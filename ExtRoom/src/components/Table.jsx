import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../assets/firebase"



const Table=(props)=>{  
    const [data,setData]=useState([]);
    useEffect(() => {
        async function querySnapshot() {
            const querysnapshot = await getDocs(collection(db, "test"));
            const documents = querysnapshot.docs.map(doc => ({
                id: doc.id, // to store the document ID
                ...doc.data() // to get the document's data
            }));
            setData(documents);
        }
        querySnapshot();
        console.log("Got data from database");
    }, [props.changeFlag]);

    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">Machine</div>
                <div className="col">Date</div>
                <div className="col">Quantity</div>
                <div className="col">Active</div>
            </div>
            <div className="row">
                {data.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col">{item.machine}</div>
                        <div className="col">{item.date}</div>
                        <div className="col">{item.quantity}</div>
                        <div className="col">{item.active==="false"?"False":"True"}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Table;