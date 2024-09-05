import React from "react";
import Table from "./Table";
import QRMaker from "./QRMaker";

const Body=()=>{
    return(
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-light py-5 bg-white" id="left-side">
                        <Table/>
                    </div>
                    <div className="col bg-light py-5 bg-white" id="right-side">
                        <QRMaker/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;