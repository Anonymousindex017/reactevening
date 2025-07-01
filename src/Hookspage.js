import React, { useState } from 'react'

function Hookspage() {

const [abc,xyz]=useState("ravi");

const myupdate = (p)=>{
        // xyz("pankaj singh");
        // console.log(p);
        // console.log(p.target.value);
        xyz(p.target.value);
}


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>

        <input type='text' value={abc}/>
        <h1>{abc}</h1>
        <input type='button' value="update state" onClick={myupdate} disabled={abc==="mohan"? false : true} />
        <input type="text" value={abc} onInput={myupdate}/>
        <h3>this is element</h3>
        

            </div>
        </div>
    </div>
  )
}

export default Hookspage