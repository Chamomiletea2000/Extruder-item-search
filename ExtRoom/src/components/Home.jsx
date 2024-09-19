import React, { useState, useEffect } from "react";
import Table from "./Table";
import QRMaker from "./QRMaker";


const Home=(props)=>{

    return(
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 bg-light bg-white" id="left-side">
                        <Table data={props.data} dataMode={props.dataMode}/>
                    </div>
                    <div className="col-7 bg-light bg-white" id="right-side">
                        <QRMaker setChangeFlag={props.setChangeFlag} changeFlag={props.changeFlag} dataMode={props.dataMode} setDataMode={props.setDataMode}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;