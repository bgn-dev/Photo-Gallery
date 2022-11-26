import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from "@firebase/firestore"
import { firestore } from '../firebase/config';

export default function Grid({ setSelectedImg }) {

  const [images, setImages] = useState([]);

  console.log(images);
  useEffect(() => 
      onSnapshot(collection(firestore, "images"), (snapshot) => { 
        setImages(snapshot.docs.map((doc) => doc.data()))
      }), 
    []
  );


  return (
    <div className='grid'>
      { images && images.map(images => (
        <div className='img_wrap' key={images.url}
        onClick={() => setSelectedImg(images.url)}>
          <img src={images.url} alt="uploaded pic" />
        </div>
      ))}
    </div>
  )
}
