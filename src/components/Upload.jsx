import React, { useEffect, useState } from 'react'
import { storage, firestore } from "../firebase/config"
import { addDoc, serverTimestamp, collection } from "@firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

export default function Upload() {

  const [file, setFile] = useState("");
  const [url, setURL] = useState(null);
  const [percent, setPercent] = useState(0);

  /*  @setFile: get the image of the targeted event (multiple images possible) */
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  
  /*  @if: check if an file is selected by the user
      @storageRef: create a reference for the selected file 
      @uploadTask: use the method uploadBytesResumable to calculate the percentage of the already uploaded file
      @ */
  const handleUpload = async(e) => {
    if(!file) {
        alert("Please select an image type file.");
    }

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed", 
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        
        // update progress
        setPercent(percent);
        }, (err) => console.log(err), () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((urlTemp) => {
                console.log(urlTemp);
                setURL(urlTemp);
            });
        }
    );
  }

  useEffect(() => {
    const firestoreRef = collection(firestore, "images");
    if (url != null) {
      const fetchD = async() => {
        const docRef = await addDoc(firestoreRef, {
          url: url,
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
      }

      const result = fetchD()
      .catch(console.error);;
  
      // what will be logged to the console?
      console.log(result);

    }
  }, [url]);


  /*  @onChange handler: will called every time the value of file changed
      @onClick handler: will be called, when the click on the button is detected
      @percent: obviously
      */

  return (
    <div>    
        <input type="file" onChange={handleChange} accept="image/*"/>
        <button onClick={handleUpload}>Upload</button>
        <p>{percent} %</p>
    </div>
  );
}
