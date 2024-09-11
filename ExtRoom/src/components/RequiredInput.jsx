import React, {useState, useEffect} from "react";

export default function RequiredInput(props){
    const [csNum,setCsNum]=useState("");
    const [machine,setMachine]=useState("");
    const [date,setDate]=useState("");
    const [location,setLocation]= useState("")
    const [description,setDescription]=useState("");

    useEffect(()=>{
        let newValue="";
        newValue+=machine;
        date!=""? newValue+="\n"+ date:null;
        csNum!=""?newValue+="\n"+ csNum:null;
        location!=""?newValue+="\n"+ location:null;
        description!=""?newValue+="\n"+ description:null;
        newValue!="" ? props.setNewQR(newValue) : null;
        props.setFullQRData({
            ...props.fullQRData,
            machine:machine,
            date:date,
            csNum:csNum,
            location:location,
            description:description
        })
    },[machine,date,csNum,location,description]);

    // useEffect(()=>{
    //     console.log("this is fullqrdata",props.fullQRData);
    // },[props.fullQRData])

    return(
        <div className="col">
            <div className="input-group mb-3">
                <span className="input-group-text">CS#:</span>
                <input placeholder="123456" value={csNum} required={true} className="form-control" type="text" autoComplete="off" id="csNum" onChange={(e)=>setCsNum(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Machine:</span>
                <input placeholder="machine name/description" value={machine} required={true} className="form-control" type="text" autoComplete="off" id="machine" onChange={(e)=>setMachine(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Date:</span>
                <input value={date} required={true} placeholder="mm/dd/yyyy" className="form-control" type="date" autoComplete="off" id="date" onChange={(e)=>setDate(e.target.value)}></input>
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