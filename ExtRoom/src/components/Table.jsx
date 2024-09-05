import React, { useEffect, useState } from "react";



const Table=()=>{
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('/data/items.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data.dataset))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);
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