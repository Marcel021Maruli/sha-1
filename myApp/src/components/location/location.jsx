import React, {useEffect} from 'react';
import "../../index.css";

function Location() {
  const [value, setValue] = React.useState(0);
  return (
    <div className='headerFixed'>
      <div>
        <h1 style={{ color: "#424749" }}>Location</h1>
      </div>
      <div className="scrollmenu">
        <button class="tablinks">
          Min<br></br>29
          </button>
      </div>
    </div>
  );
}

export default Location;
