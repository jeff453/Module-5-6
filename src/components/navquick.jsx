import React from 'react';
import "./navquickS.css";

const Navquick = () => {
  return (
    <div className='widgets'>
      <iframe src="https://google.com/search?igu=1" width="340" height="100%" style={{ border: "none", overflow: "hidden" }} frameBorder="0" scrolling='0' allowTransparency="true" allow='encrypted-media'>
      </iframe>
    </div>
  );
}

export default Navquick;