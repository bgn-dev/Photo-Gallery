import React from 'react'

const Enlarged = ({ selectedImg, setSelectedImg }) => {

  /*  When the click is registered, first check if its outside of the drop_off div (outside of the image which is shown),
      then set selected image to null, so the div drop_off is not shown anymore, which is handled in the App.js

  */
  const handleClick = (e) => {
    if(e.target.classList.contains("drop_off")) {
      setSelectedImg(null);
    }
  }

  /*  here the selected image will be enlarged, if and only selectedImg has an value
      the drop_off div which has an onClick event, is needed to minimize the image
  */
  return (
    <div className="drop_off" onClick={handleClick}>
        <img src={selectedImg} alt="enlarged" />
    </div>
  )
}

export default Enlarged;
