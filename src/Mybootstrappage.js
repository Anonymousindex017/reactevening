import React from 'react'
import { FcCloseUpMode ,FcDislike} from "react-icons/fc";
import { ImHome3 } from "react-icons/im";

function Mybootstrappage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-danger bg-info border'> <FcCloseUpMode/>this is bootstrap <ImHome3/> page <FcDislike/></h1>
        </div>
      </div>
    </div>
  )
}

export default Mybootstrappage