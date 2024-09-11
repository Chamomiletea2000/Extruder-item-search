import React from "react";


{/*to make it looks nice I add plus one to every index th so that it doesnt start at 0*/}
const Table=(props)=>{  
    return (
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
                        <>
                            <tr className="col" key={item.id} data-bs-toggle="collapse" data-bs-target={`#Collapsable${item.id}`} aria-expanded="false" aria-controls={`Collapsable${item.id}`}>
                                <th>{index+1}</th>      
                                <td>{item.csNum}</td>
                                <td>{item.machine}</td>
                                <td>{item.date}</td>
                                <td>{item.location}</td>
                            </tr>
                            <tr className="collapse" id={`Collapsable${item.id}`}>
                                <td colSpan="5" className="pt-0">
                                    <table class="table m-0">
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
                        </>
                    )})
                }
            </tbody>
        </table>
    );
}

export default Table;