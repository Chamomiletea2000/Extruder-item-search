import React from "react";
import SearchByValue from "./SearchByValue";
import SearchByQR from "./SearchByQR";

export default function SearchBody(props){

    return(
        <div style={{height:window.innerHeight-56-40}}>
            <SearchByValue data={props.data}/>
            <SearchByQR/>
        </div>
    )
}