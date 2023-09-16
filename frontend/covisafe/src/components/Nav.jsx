import React, { useState } from 'react'

export default function Nav(props) {
  return (
    <>
      {/* <!-- header --> */}
      <div className="mheader">
        <div className="mleftlogo">
          <img src="./images/emblem-gov.svg" />
          <p>
            Ministry of Health and
            <br />
            Family Welfare
          </p>
        </div>

        <div className="mrightside">
          <button onClick={()=>props.zoom[1](props.zoom[0]+1)}>A+</button>
          <button onClick={()=>props.zoom[1](100)}>A</button>
          <button onClick={()=>props.zoom[1](props.zoom[0]-1)}>A-</button>

          <p id="eng">English </p>
        </div>
      </div>

      {/* <!-- nav --> */}
      <div className="mnav">
        <div className="mlogo">
          <img src="./images/mainlogo.png" alt="logo" />
        </div>

        <div className="mnavlist">
          <a href="/dashboard.html">
            <h4>Dashboard</h4>
          </a>
          <a href="./service.html">
            <h4>Service</h4>
          </a>
          <a href="/faq.html">
            <h4>FAQ</h4>
          </a>
          <a href="/partner.html">
            <h4>Partner</h4>
          </a>
          <a href="./login.html">
            <button>Register/Signin</button>
          </a>
        </div>
      </div>
    </>
  );
}