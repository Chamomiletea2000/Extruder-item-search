import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PrintPage from "./PrintPage";

const QRMaker=()=>{
    const [newQR,setNewQR]=useState("");
    const [machine,setMachine]=useState("");
    const [date,setDate]=useState("");
    const [quantity,setQuantity]=useState("");
    const [active,setActive]=useState("");

    const componentRef = useRef(null);  // Ensure it starts as null

    useEffect(()=>{
        let newValue="";
        let temp=document.querySelector("#machine").value;

        newValue+=temp;
        temp=document.querySelector("#date").value;
        temp? newValue+="\n"+ temp:null;
        temp=document.querySelector("#quantity").value;
        temp?newValue+="\n"+ temp:null;
        temp=document.querySelector("#active").value;
        temp?newValue+="\n"+ temp:null;
        newValue ? setNewQR(newValue) : "null";
    },[machine,date,quantity,active]);


    useEffect(()=>{
        console.log(newQR);
    },[newQR])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted!");
        handlePrint();
        // Allow the form to reload the page
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
                    <div className="border my-1">
                        <label className="d-flex justify-content-start">Machine</label>
                        <div className="d-flex justify-content-end">
                            <input autoComplete="off" id="machine" onChange={(e)=>setMachine(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="border my-1">
                        <label className="d-flex justify-content-start">Date</label>
                        <div className="d-flex justify-content-end">
                            <input autoComplete="off" id="date" onChange={(e)=>setDate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="border my-1">
                        <label className="d-flex justify-content-start">Quantity</label>
                        <div className="d-flex justify-content-end">
                            <input autoComplete="off" id="quantity" onChange={(e)=>setQuantity(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="border my-1">
                        <label className="d-flex justify-content-start">Active</label>
                        <div className="d-flex justify-content-end">
                            <input autoComplete="off" id="active" onChange={(e)=>setActive(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <PrintPage newQR={newQR} componentRef={componentRef}/>
            </form>
        </div>
    )
};

export default QRMaker;