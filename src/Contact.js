import React, { Fragment } from 'react'
import { About1 } from './About';

function Contact() {
  const name = "kumar";
  const age = 50;
  let sub = "web design";
  let working= true;

  return (
    <Fragment>
      <div className='first'>Contact</div>
      <h1>this is heading</h1>
      <h3>heading three</h3>
      <h1>{name}</h1>
      <h1>{80}</h1>
      <h1>{90*4}</h1>
      <h1>{<span>this is my element</span>}</h1>
      <h1>{<About1/>}</h1>
      <h1>{name==="kumar" ? "yes" : "no"}</h1>
      <h1 style={{color:'red',fontSize:50}}>this is inline css</h1>
      <div className='first'></div>

    </Fragment>
  )
}

export default Contact