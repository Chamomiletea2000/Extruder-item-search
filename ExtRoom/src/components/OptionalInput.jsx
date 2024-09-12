import React, {useState, useEffect} from "react";

export default function OptionalInput(props){
    const [owner,setOwner]=useState('');
    const [department,setDepartment]=useState('');
    const [modelNumber,setModelNumber]=useState('');
    const [active,setActive]=useState("true");

    const departments=[
        '______________',
        'Strip Prep',
        'Blade Grinding',
        'Blade Finishing',
        'Component Stamping Prod. Supplies',
        'Packaging',
        'IMS Molding',
        'Injection Molding',
        'Saturn',
        'Quality audit',
        'Plant Services',
        'Industrial Engineering',
        'Manufacturing Tool Room',
        'Warehouse and Receiving',
        'BYG',
        'Security',
        'EHS',
        'Central Stores',
        'Central Tool Room',
        'Engineering Services']

    useEffect(()=>{
        props.setFullQRData({
            ...props.fullQRData,
            owner:owner,
            department:department,
            modelNumber:modelNumber,
            active:active
        })
    },[owner,department,modelNumber,active]);

    return(
        <div className="col">
            <div className="input-group mb-3">
                <span className="input-group-text">Owner:</span>
                <input placeholder="First-Name Last-Name" value={owner} className="form-control" type="text" autoComplete="off" id="owner" onChange={(e)=>setOwner(e.target.value)}></input>
            </div>
            <div className="input-group mb-3 col">
                <span className="input-group-text">Department:</span> 
                <div className="dropdown form-control p-0">
                    <button placeholder="Chooce a Department" className="form-control dropdown-toggle overflow-hidden border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {department===""?departments[0]:department}
                    </button>
                    <ul className="dropdown-menu overflow-auto" style={{height:window.innerHeight/4}}>
                        {departments.map((dept)=>{
                            return <li key={dept} ><button className="btn dropdown-item" type="button" onClick={()=>setDepartment(dept)}>{dept}</button></li>
                        })}
                    </ul>
                </div>           
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Model Number:</span>
                <input placeholder="xxxxxxxx" value={modelNumber} className="form-control" type="text" autoComplete="off" id="modelNumber" onChange={(e)=>setModelNumber(e.target.value)}></input>
            </div>
            <div className="input-group align-items-center mb-3">
                <span className="input-group-text">Status</span>
                <div className="form-control">
                    <input
                    type="radio"
                    name="options"
                    value={"true"}
                    checked={active==="true"}
                    onChange={(event)=>{setActive(event.target.value)}}
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
                    onChange={(event)=>{setActive(event.target.value)}}
                    className="form-check-input"
                    />
                    <span>Inactive</span>
                </div>
            </div>
        </div>
    );
}