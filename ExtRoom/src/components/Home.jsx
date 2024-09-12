import React, { useState, useEffect } from "react";
import Table from "./Table";
import QRMaker from "./QRMaker";
import { collection, getDocs } from "firebase/firestore";
import db from "../assets/firebase"

const Home=()=>{
    const [changeFlag,setChangeFlag]=useState(true);
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
    }, [changeFlag]);

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    return(
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 bg-light bg-white" id="left-side">
                        <Table data={data}/>
                    </div>
                    <div className="col-7 bg-light bg-white" id="right-side">
                        <QRMaker setChangeFlag={setChangeFlag} changeFlag={changeFlag}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;