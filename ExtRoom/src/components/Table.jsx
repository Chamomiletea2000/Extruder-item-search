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
                {props.data.map((item,index) => (
                    <tr key={item.id}>
                        <th>{index+1}</th>      
                        <td>{item.csNum}</td>
                        <td>{item.machine}</td>
                        <td>{item.date}</td>
                        <td>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;