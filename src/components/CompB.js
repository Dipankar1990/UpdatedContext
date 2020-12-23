import React from 'react';
import {CTimeContext,UpTimeContext} from "./TimeContext";

const CompB = () => {
    return ( 
    <>
            <h1>Current Time:{CTimeContext()}</h1>
            <button onClick={UpTimeContext()}>Click For Update Time</button>
    </> 
    );
}
 
export default CompB;