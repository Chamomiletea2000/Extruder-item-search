import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PrintPage from "./PrintPage";

const QRMaker=()=>{
    const [newQR,setNewQR]=useState("");
    const [machine,setMachine]=useState("");
    const [date,setDate]=useState("");
    const [quantity,setQuantity]=useState("");
    const [active,setActive]=useState(true);

    const componentRef = useRef(null);  // Ensure it starts as null

    useEffect(()=>{
        let newValue="";
        newValue+=machine;
        date!=""? newValue+="\n"+ date:null;
        quantity!=""?newValue+="\n"+ quantity:null;
        active!=""?newValue+="\n"+ active:null;
        newValue!="" ? setNewQR(newValue) : null;
    },[machine,date,quantity,active]);

    // useEffect(()=>{
    //     console.log(newQR);
    // },[newQR])

    const handleOptionChange = (event) => {
        setActive(event.target.value)
      };

    // useEffect(()=>{
    //     console.log(selectedOption);
    // },[selectedOption])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted!");
        handlePrint();
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current || null,  // Ensure no null call
        onBeforeGetContent: () => {
          console.log('Preparing print...');
        },
        onAfterPrint: () => {
          console.log('Print successful');
          window.location.reload();
        },
        onPrintError: (err) => {
          console.error('Print error:', err);
        },
      });

    return(
        <div>
            <form method="GET" onSubmit={handleSubmit} autoComplete="off">
                <div className="row col-6 mx-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Machine:</span>
                        <input className="form-control" type="text" autoComplete="off" id="machine" onChange={(e)=>setMachine(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Date:</span>
                        <input placeholder="mm/dd/yyyy" className="form-control"nput type="date" autoComplete="off" id="date" onChange={(e)=>setDate(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Quantity:</span>
                        <input keyboard className="form-control"nput type="number" autoComplete="off" id="quantity" onChange={(e)=>setQuantity(e.target.value)}></input>
                    </div>
                    <div className="input-group align-items-center ">
                        <span className="input-group-text">Status</span>
                        <div className="form-control">
                            <input
                            type="radio"
                            name="options"
                            value={true}
                            checked={active===true}
                            onChange={handleOptionChange}
                            className="form-check-input"
                            />
                            <span>Active</span>
                        </div>
                        <div className="form-control">
                            <input
                            type="radio"
                            name="options"
                            value={false}
                            checked={active===false}
                            onChange={handleOptionChange}
                            className="form-check-input"
                            />
                            <span>Inactive</span>
                        </div>
                    </div>
                </div>
                <PrintPage newQR={newQR} componentRef={componentRef}/>
            </form>
        </div>
    )
};

export default QRMaker;