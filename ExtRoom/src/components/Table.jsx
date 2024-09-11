import React from "react";


{/*to make it looks nice I add plus one to every index <th> so that it doesnt start at 0*/}
const Table=(props)=>{  
    return (
        <div className="overflow-auto" style={{height:`${window.innerHeight-56}px`}}>
            <table className="table table-hover">
                <thead> 
                    <tr>
                        <th className="col">#</th>
                        <th className="col">CS#</th>
                        <th className="col">Machine</th>
                        <th className="col">Date</th>
                        <th className="col">Location</th>
                    </tr>
                </thead>
                <tbody> 
                    {props.data.map((item,index) => {
                        return(
                            <React.Fragment key={`Main${item.id}`}>
                                <tr className="col" key={`Primary${item.id}`} data-bs-toggle="collapse" data-bs-target={`#Collapsable${item.id}`} aria-expanded="false" aria-controls={`Collapsable${item.id}`}>
                                    <th>{index+1}</th>      
                                    <td>{item.csNum}</td>
                                    <td>{item.machine}</td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                </tr>
                                <tr className="collapse bg-light" key={`Secondary${item.id}`} id={`Collapsable${item.id}`} data-bs-toggle="collapse" data-bs-target={`#Collapsable${item.id}`} aria-expanded="false" aria-controls={`Collapsable${item.id}`}>
                                    <td colSpan="5" className="py-0">
                                        <table className="table m-0">
                                            <thead>
                                                <tr>
                                                    <th className="col">Owner</th>
                                                    <th className="col">Department</th>
                                                    <th className="col">Model Number</th>
                                                    <th className="col">Status</th>
                                                    <th className="col">Date Recorded</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{item.owner}</td>
                                                    <td>{item.department}</td>
                                                    <td>{item.modelNumber}</td>
                                                    <td>{item.active}</td>
                                                    <td>{item.dateRecorded}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )})
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;