import React, {useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from './assets/firebase';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import SearchBody from './components/SearchBody'
import './App.css'

const App=() => {
  const [changeFlag,setChangeFlag]=useState(true);
  const [data,setData]=useState([]);
  const [dataMode,setDataMode]=useState("CS#")

  
  useEffect(() => {
      async function querySnapshot() {
        let collectionType=dataMode==="CS#"?"Inventory":"NonInventory"
        const querysnapshot = await getDocs(collection(db, collectionType));
        const documents = querysnapshot.docs.map(doc => ({
            id: doc.id, // to store the document ID
            ...doc.data() // to get the document's data
        }));
        setData(documents);
      }
      querySnapshot();
      console.log("Got data from database");
    }, [changeFlag,dataMode]);

  return (
    <div className='container-fluid mx-auto position-absolute top-0 start-0'>
        <Header/>
        {<Home data={data} setData={setData} changeFlag={changeFlag} setChangeFlag={setChangeFlag} dataMode={dataMode} setDataMode={setDataMode}/>}
        <Footer/>
    </div>
  )
}

export default App
//<SearchBody data={data} setData={setData} changeFlag={changeFlag} setChangeFlag={setChangeFlag}/>