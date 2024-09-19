import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { doc, collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import db from "../assets/firebase";
import PrintPage from "./PrintPage";
import RequiredInput from "./RequiredInput";
import OptionalInput from "./OptionalInput";

const QRMaker=(props)=>{
    const [newQR,setNewQR]=useState("");

    const componentRef = useRef(null);  // Ensure it starts as null
    const [qrHeight,setQRHeight]=useState('4in'); //default height for display
    const [qrWidth,setQRWidth]=useState('3in'); //default size for display
    const [qrSize,setQRSize]=useState(200); //default size for display
    const [fullQRData,setFullQRData]=useState({});
    const [newID,setNewID]=useState(null);


    function addQRData(newData){
        async function docRef() {
            let collectionType=props.dataMode==="CS#"?"test":"NonInventory"
            const doc = await addDoc(collection(db, collectionType ), newData);  //used to be test
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

    const getNewID=async()=>{
        const querySnapshot = await getDocs(collection(db, "IDGen" ));  //used to be test
        let currentID;
        querySnapshot.docs.map((doc)=>{
            console.log(doc.data().LatestID);
            currentID=doc.data().LatestID;
        });
        let temp=`S${parseInt(currentID.slice(1,currentID.length))+1}`
        setNewID(temp);
    }

    const updateID=async()=>{
        const docRef = doc(db, "IDGen", "IDCounter");
        try {
            // Update the document with the new data
            newID===null?null:
            await updateDoc(docRef, {LatestID:newID});
            console.log("Document updated successfully");
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    }
    useEffect(()=>{
        getNewID();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let today=new Date;
        let dateRecorded=today.toDateString();
        let updatedData={...fullQRData,dateRecorded:dateRecorded};
        console.log("updated: ",updatedData, "date ",dateRecorded);
        addQRData(updatedData);
        updateID();
        getNewID();
        props.setChangeFlag(!props.changeFlag);
        alert("submitted!");
        handlePrint();
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current || null,  // Ensure no null call
        onBeforeGetContent: () => {
          setQRHeight('8.5in');
          setQRWidth('11in');
          setQRSize(300);
          console.log('Preparing print...');
        },
        onAfterPrint: () => {
          console.log('Print successful');
          setQRHeight('4in');
          setQRWidth('3in');
          setQRSize(200);
          console.log('Default sizes set');
          //window.location.reload();
        },
        onPrintError: (err) => {
          console.error('Print error:', err);
        },
      });
    return(
        <div className="overflow-auto" style={{height:`${window.innerHeight-56-40}px`}}>
            <div className="row my-2">
            <div className="col-4">
                    <button className="btn"
                        style={{
                            background: props.dataMode === "newID" ? 'rgba(0, 120, 255, 1)' : 'lightblue', 
                            borderStyle: props.dataMode === "newID" ? 'outset' : 'inset',
                            borderWidth: props.dataMode === "newID" ? '3px' : '1px', // Optional: to make the clicked effect more pronounced
                            borderColor: props.dataMode === "newID" ? 'darkblue' : 'gray' // Optional: change the border color when clicked
                          }}
                          onClick={()=>{props.setDataMode("newID")}}
                    >by new ID</button>
                    <button className="btn" 
                        style={{
                            background: props.dataMode === "CS#" ? 'rgba(0, 120, 255, 1)' : 'lightblue ', 
                            borderStyle: props.dataMode === "CS#" ? 'outset' : 'inset',
                            borderWidth: props.dataMode === "CS#" ? '3px' : '1px',
                            borderColor: props.dataMode === "CS#" ? 'darkblue' : 'gray'
                          }}
                          onClick={()=>{props.setDataMode("CS#")}}
                    >by CS Number</button>
                </div>
                <h3 className="">Create a new Label</h3>
            </div>
            <form method="GET" onSubmit={handleSubmit} autoComplete="off">
                <div className="row mx-auto d-flex justify-content-center">
                    <RequiredInput setNewQR={setNewQR} fullQRData={fullQRData} setFullQRData={setFullQRData} dataMode={props.dataMode} newID={newID}/>
                    <OptionalInput fullQRData={fullQRData} setFullQRData={setFullQRData}/>
                </div>
                <PrintPage newQR={newQR} componentRef={componentRef} qrHeight={qrHeight} qrWidth={qrWidth} qrSize={qrSize}/>
            </form>
        </div>
    )
};

export default QRMaker;