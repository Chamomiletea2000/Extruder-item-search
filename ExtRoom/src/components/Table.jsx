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

    return (
        <table className="table table-hover">
            <thead className="table-light">
                <tr>
                    <td>Machine</td>
                    <td>Date</td>
                    <td>Quantity</td>
                    <td>Active</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.machine}</td>
                        <td>{item.date}</td>
                        <td>{item.quantity}</td>
                        <td>{item.active?"True":"False"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;