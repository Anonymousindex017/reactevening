import React from 'react';
import { FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Myapplist } from './controls/Appcontrol';

function Welcomeapp() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Welcome to Application</h1>
                    <hr />
                </div>
            </div>
            <div className='row'>

                {Myapplist.map((app) => {
                    return (
                        <div className='col-sm-3 text-center'>
                            <Link to={app.applink} className='border myapp bg-info shadow pt-5'>
                                <FcManager />
                                <p>{app.applink}</p>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Welcomeapp