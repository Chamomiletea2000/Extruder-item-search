import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { collection, addDoc } from "firebase/firestore";
import db from "../assets/firebase";
import PrintPage from "./PrintPage";

const QRMaker=(props)=>{
    const [newQR,setNewQR]=useState("");
    const [machine,setMachine]=useState("");
    const [date,setDate]=useState("");
    const [quantity,setQuantity]=useState("");
    const [active,setActive]=useState("true");
    const [description,setDescription]=useState("");

    const componentRef = useRef(null);  // Ensure it starts as null
    const [qrHeight,setQRHeight]=useState('3in'); //default size because 6in leaves a lot of blank space

    function addQRData(){
        async function docRef() {
            const doc = await addDoc(collection(db, "test"), {
                machine: machine,
                date: date,
                quantity: quantity,
                active: active,
                description: description
              });
              return doc;
        }
        try {
            const doc=docRef();
            console.log("Document written with ID: ", doc.id);
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
    } 

    useEffect(()=>{
        let newValue="";
        newValue+=machine;
        date!=""? newValue+="\n"+ date:null;
        quantity!=""?newValue+="\n"+ quantity:null;
        newValue+="\n"+ active;
        description!=""?newValue+="\n"+ description:null;
        newValue!="" ? setNewQR(newValue) : null;
    },[machine,date,quantity,active,description]);

    const handleOptionChange = (event) => {
        setActive(event.target.value)
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addQRData();
        props.setChangeFlag(!props.changeFlag);
        alert("submitted!");
        handlePrint();
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current || null,  // Ensure no null call
        onBeforeGetContent: () => {
          setQRHeight('6in')
          console.log('Preparing print...');
        },
        onAfterPrint: () => {
          console.log('Print successful');
          setQRHeight('3in')
          //window.location.reload();
        },
        onPrintError: (err) => {
          console.error('Print error:', err);
        },
      });

    return(
        <div>
            <h3>Create a new Label</h3>
            <form method="GET" onSubmit={handleSubmit} autoComplete="off">
                <div className="row col-6 mx-auto">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Machine:</span>
                        <input value={machine} required={true} className="form-control" type="text" autoComplete="off" id="machine" onChange={(e)=>setMachine(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Date:</span>
                        <input value={date} required={true} placeholder="mm/dd/yyyy" className="form-control"nput type="date" autoComplete="off" id="date" onChange={(e)=>setDate(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Quantity:</span>
                        <input value={quantity} required={true} keyboard className="form-control"nput type="number" autoComplete="off" id="quantity" onChange={(e)=>setQuantity(e.target.value)}></input>
                    </div>
                    <div className="input-group align-items-center mb-3">
                        <span className="input-group-text">Status</span>
                        <div className="form-control">
                            <input
                            type="radio"
                            name="options"
                            value={"true"}
                            checked={active==="true"}
                            onChange={handleOptionChange}
                            className="form-check-input"
                            />
                            <span>Active</span>
                        </div>
                        <div className="form-control">
                            <input
                            type="radio"
                            name="options"
                            value={"false"}
                            checked={active==="false"}
                            onChange={handleOptionChange}
                            className="form-check-input"
                            />
                            <span>Inactive</span>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Description:</span>
                        <textarea required={true} keyboard className="form-control"nput type="number" autoComplete="off" id="quantity" onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <PrintPage newQR={newQR} componentRef={componentRef} qrHeight={qrHeight}/>
            </form>
        </div>
    )
};

export default QRMaker;