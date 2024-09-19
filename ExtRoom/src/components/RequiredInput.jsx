import React, {useState, useEffect} from "react";

export default function RequiredInput(props){
    const [ID,setID]=useState("");
    const [machine,setMachine]=useState("");
    const [company,setCompany]=useState("");
    const [location,setLocation]= useState("")
    const [description,setDescription]=useState("");

    useEffect(()=>{
        let newValue="";
        newValue+=machine;
        ID!=""?newValue+="\n"+ ID:null;
        company!=""?newValue+="\n"+ company:null;
        location!=""?newValue+="\n"+ location:null;
        description!=""?newValue+="\n"+ description:null;
        newValue!="" ? props.setNewQR(newValue) : null;
        props.setFullQRData({
            ...props.fullQRData,
            machine:machine,
            company:company,
            ID:ID,
            location:location,
            description:description,
        })
    },[machine,company,ID,location,description]);

    useEffect(()=>{
        console.log("this is fullqrdata",props.fullQRData);
    },[props.fullQRData])

    useEffect(()=>{
        props.dataMode==="CS#"?setID(""):setID(props.newID);
    },[props.dataMode])
    return(
        <div className="col">
            Required*
            <div className="input-group mb-3">
                <span className="input-group-text">{props.dataMode==="CS#"?"CS#: ":"new ID:"}</span>
                <input placeholder="123456" value={ID} disabled={props.dataMode==="CS#"?false:true} required={true} className="form-control" type="text" autoComplete="off" id="ID" onChange={(e)=>setID(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Machine:</span>
                <input placeholder="machine name/description" value={machine} required={true} className="form-control" type="text" autoComplete="off" id="machine" onChange={(e)=>setMachine(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Company/MFG:</span>
                <input value={company} required={true} className="form-control" type="text" autoComplete="off" id="company" onChange={(e)=>setCompany(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Location:</span>
                <input value={location} required={true} placeholder="XXXX / Branford etc." className="form-control" type="text" autoComplete="off" id="location" onChange={(e)=>setLocation(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <textarea placeholder="notes/comments/description" required={true}  className="form-control pb-3" autoComplete="off" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
        </div>
    )
}