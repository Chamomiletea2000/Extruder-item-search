import React, { useEffect, useState } from "react";
import Table from "./Table";

export default function SearchByValue(props){
    const [searchValue,setSearchValue]=useState('');
    const [map,setMap]=useState([]);
    //console.log(props.data);
    
    useEffect(() => {
        setSearchValue("safasf");
    }, []); // Empty dependency array means this runs only on mount

    useEffect(()=>{
        const scoresMap= props.data===undefined ? null : props.data.length>0 ? props.data.map((object)=>{
            let score=0;
            for(let [key,value] of Object.entries(object)){     //iterate through each object in the array ex. cs:"something"
                let count=parseFloat(0);
                if(key!="id"){
                    for(let i=0;i<searchValue.length;i++){      //iterate through both the search value and the current value of the iterated object key. 
                        if(value===undefined){
                            break;
                        }                                       
                        for(let j=0;j<value.length;j++){
                            if(searchValue[i]==value[j]){                 //once it finds a match we go to the next letter in searchValue until there are none
                                count++;                                  //impprovment suggestion is to make a map of both and count how many instances of each letter and compare
                                break;
                            }
                        }
                    }
                }
                if(value!=undefined){
                    let calc=((count/searchValue.length)*(count/value.length));
                    score=Math.max(score,calc);
                }
            }
            return [score,object];
        }):null;
        scoresMap?setMap(scoresMap.sort((a, b) => b[0] - a[0])):null;
        console.log(map);
    },[searchValue,props.data])
        return( 
            <>
                <Table data={map.map((arr)=>{
                    return arr[1];
                })}/>
            </>
        )
    }