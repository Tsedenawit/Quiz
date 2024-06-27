import React, { useEffect, useState} from "react";

export default function Definite(){
    const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
    const questions =["In which country are the world’s 10 coldest cities located? - russia",
      "Supposedly home to a “monster,” Loch Ness is one of many inland seas—or “lochs”—in which country?- scotland",
    "Which country has three capital cities—Pretoria, Cape Town, and Bloemfontein? - southafrica",
  "Thanks to its overseas territories, which country technically spans 12 time zones? -france",
"With an area of less than 0.2 square mile (0.5 square kilometer), which is the smallest country in the world? - vatican city",
"Which continent is home to the most countries? -africa",
"Home to languages like Tok Pisin, Hiri Motu, and a German creole known as Unserdeutsch, which is the most linguistically diverse country in the world? - Papua New Guinea",
"Which of these is NOT one of the 13 countries crossed by the Equator? - egypt",
"Thanks to the tombs built by the ancient kingdom of Kush, which country is home to—by far—the most pyramids in the world?-sudan",
" What country has the longest coastline? - canada"]
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