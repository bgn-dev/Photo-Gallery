import React from 'react'

const Picture = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    if(e.target.classList.contains("drop_off")) {
      setSelectedImg(null);
    }
  }

  return (
    <div className="drop_off" onClick={handleClick}>
        <img src={selectedImg} alt="enlarged" />
    </div>
  )
}

export default Picture;
