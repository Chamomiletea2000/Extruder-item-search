import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";




const QRMaker=()=>{
    const [newQR,setNewQR]=useState("");
    const [machine,setMachine]=useState("");
    const [date,setDate]=useState("");
    const [quantity,setQuantity]=useState("");
    const [active,setActive]=useState("");
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
        // Allow the form to reload the page
        window.location.reload(); // Force page refresh after submission
    };

    return(
        <div>
            <QRCode value={newQR}/>
            <form method="GET" onSubmit={handleSubmit}>
                <div>
                    <input className="form-control" id="machine" onChange={(string)=>setMachine(string.target.value)}></input>
                    <input className="form-control" id="date" onChange={(string)=>setDate(string.target.value)}></input>
                    <input className="form-control" id="quantity" onChange={(string)=>setQuantity(string.target.value)}></input>
                    <input className="form-control" id="active" onChange={(string)=>setActive(string.target.value)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default QRMaker;