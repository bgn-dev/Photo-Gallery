import React, { useEffect, useState } from 'react'
import { storage, firestore } from "../firebase/config"
import { addDoc, serverTimestamp, collection } from "@firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

export default function Upload() {

  const [file, setFile] = useState("");
  const [url, setURL] = useState(null);
  const [percent, setPercent] = useState(0);
  const [showPercent, setShowPercent] = useState(0);

  /*  @setFile: get the image of the targeted event (multiple images possible) */
  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log("file is assigned");
  }
  
  /*  @if: check if an file is selected by the user
      @storageRef: create a reference for the selected file 
      @uploadTask: use the method uploadBytesResumable to calculate the percentage of the already uploaded file
      @uploadTask.on: when the state is changed, calculate the new percentage */
  const handleUpload = async(e) => {
    if(!file) {
        alert("Please select an image type file.");
    }
    // some image is in process, so set showPercentage true
    setShowPercent(1);

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed", 
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // update progress
        setPercent(percent);
      }, (err) => {
        // log error
        console.log(err);
      }, () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              // upload of the image is done, set showPercentage false
              setShowPercent(0);
              setURL(url);
              console.log(url);
            });
      }
    );
  }

  /*  @firestoreRef: reference to the db, which is named images
      @addDoc: send the document with the url and timestamp to the db
      useEffect itself gets called, when the gets changed
  */

  useEffect(() => {
    const firestoreRef = collection(firestore, "images");
    if (url) {
      console.log("a new url is assigned")
      const fetchD = async() => {
        const docRef = await addDoc(firestoreRef, {
          url: url,
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      }
      
      const result = fetchD()
      .catch(console.error);;
  
      // log the result
      console.log(result);

    }
  }, [url]);


  /*  @onChange handler: will called every time the value of file changed
      @onClick handler: will be called, when the click on the button is detected
      @percent: will only displayed if its set to true -> true if in image gets uploaded to the db 
      */

  return (
    <div className="navbar">    
        <input type="file" onChange={handleChange} accept="image/*"/>
        <button onClick={handleUpload}>Upload</button>
        <p> { (showPercent !== 0) && percent + "%" } </p>
    </div>
  );
}
