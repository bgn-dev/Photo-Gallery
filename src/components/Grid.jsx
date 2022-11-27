import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query} from "@firebase/firestore"
import { firestore } from '../firebase/config';

export default function Grid({ setSelectedImg }) {

  const [imagesDoc, setImagesDoc] = useState([]);
  console.log(imagesDoc);

  /*  every render the useEffect is called, with an firestore listener, so called onSnapshot, 
      which sorts the image documents in descendant timestamp order, so the last picture is shown on the top left
  */
  useEffect(() => {
    const firestoreRef = collection(firestore, "images");
    onSnapshot(query(firestoreRef, orderBy("timestamp", "desc")), (snapshot) => {
      /*  @map: calls a defined callback function on each element of an array, and returns an array that contains the results.
          the results are the data of the document and the document id, which is automatically given by firebase at the upload
          ... : the three dots gives for each row a property in the array doc (call it an array in array)
      */
      setImagesDoc(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }) 
  }, []);

  /*  for every image, there exists an wrap
      onClick: if an image is clicked -> set the url of the image, which is a constant in the App.js
  */

  return (
    <div className='grid'>
      { imagesDoc && imagesDoc.map(images => (
        <div className='img_wrap' key={images.id}
        onClick={() => setSelectedImg(images.url)}>
          <img src={images.url} alt="uploaded pic" />
        </div>
      )) }
    </div>
  )
}
