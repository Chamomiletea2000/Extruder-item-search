import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { collection, addDoc } from "firebase/firestore";
import db from "../assets/firebase";
import PrintPage from "./PrintPage";
import RequiredInput from "./RequiredInput";
import OptionalInput from "./OptionalInput";

const QRMaker=(props)=>{
    const [newQR,setNewQR]=useState("");

    const componentRef = useRef(null);  // Ensure it starts as null
    const [qrHeight,setQRHeight]=useState('3in'); //default size, because 6in leaves a lot of blank space
    const [fullQRData,setFullQRData]=useState({});

    function addQRData(newData){
        async function docRef() {
            const doc = await addDoc(collection(db, "test"), newData);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let today=new Date;
        let dateRecorded=today.toDateString();
        let updatedData={...fullQRData,dateRecorded:dateRecorded};
        console.log("updated: ",updatedData, "date ",dateRecorded);
        addQRData(updatedData);
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
          window.location.reload();
        },
        onPrintError: (err) => {
          console.error('Print error:', err);
        },
      });

    return(
        <>
            <h3>Create a new Label</h3>
            <form method="GET" onSubmit={handleSubmit} autoComplete="off">
                <div className="row mx-auto d-flex justify-content-center">
                    <RequiredInput setNewQR={setNewQR} fullQRData={fullQRData} setFullQRData={setFullQRData}/>
                    <OptionalInput fullQRData={fullQRData} setFullQRData={setFullQRData}/>
                </div>
                <PrintPage newQR={newQR} componentRef={componentRef} qrHeight={qrHeight}/>
            </form>
        </>
    )
};

export default QRMaker;