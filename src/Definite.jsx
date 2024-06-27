import React, { useEffect, useState} from "react";

export default function Definite(){
    const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
    const [data,setdata]=useState();
useEffect(()=>{ fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })},[])   
    return (
      <div id="cont">
        <div  className="flex ml-20 mr-20 mt-10">
        {numbers.map(ind => (
          <div key={ind} id="num">
            <h3 className="text-center mt-3">{ind}</h3>
          </div>
        ))}
        </div>
      </div>
    )
}