import React, { useState } from "react";
import Table from "./Table";
import QRMaker from "./QRMaker";

const Body=()=>{
    const [changeFlag,setChangeFlag]=useState(true);
    return(
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-light py-5 bg-white" id="left-side">
                        <Table changeFlag={changeFlag}/>
                    </div>
                    <div className="col bg-light py-5 bg-white" id="right-side">
                        <QRMaker setChangeFlag={setChangeFlag} changeFlag={changeFlag}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;