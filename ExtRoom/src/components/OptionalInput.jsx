import React, {useState, useEffect} from "react";

export default function OptionalInput(props){
    const [owner,setOwner]=useState('');
    const [department,setDepartment]=useState('');
    const [modelNumber,setModelNumber]=useState('');
    const [active,setActive]=useState("true");

    useEffect(()=>{
        props.setFullQRData({
            ...props.fullQRData,
            owner:owner,
            department:department,
            modelNumber:modelNumber,
            active:active
        })
    },[owner,department,modelNumber,active]);

    const handleOptionChange = (event) => {
        setActive(event.target.value)
      };

    return(
        <div className="col">
            <div className="input-group mb-3">
                <span className="input-group-text">Owner:</span>
                <input placeholder="First-Name Last-Name" value={owner} required={true} className="form-control" type="text" autoComplete="off" id="owner" onChange={(e)=>setOwner(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Department:</span>
                <input placeholder="*Note to self* make this a drop down" value={department} required={true} className="form-control" type="text" autoComplete="off" id="department" onChange={(e)=>setDepartment(e.target.value)}></input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Model Number:</span>
                <input placeholder="xxxxxxxx" value={modelNumber} required={true} className="form-control" type="text" autoComplete="off" id="modelNumber" onChange={(e)=>setModelNumber(e.target.value)}></input>
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
        </div>
    );
}