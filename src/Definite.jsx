import React, { useEffect, useState} from "react";
import { motion } from "framer-motion";
export default function Definite(){
    const numbers = [{id:1, num:1},
      {id:2, num:2} ,{id:3, num:3}, {id:4, num:4},{id:5, num:5},
      {id:6, num:6},{id:7, num:7},{id:8, num:8},{id:9, num:9},{id:10, num:10}];
    const questions =[
      {IDE:1 ,que:"In which country are the world’s 10 coldest cities located? - russia"},
      {IDE:2, que:"Supposedly home to a “monster,” Loch Ness is one of many inland seas—or “lochs”—in which country?- scotland"},
      {IDE:3, que:"Which country has three capital cities—Pretoria, Cape Town, and Bloemfontein? - southafrica"},
      {IDE:4, que:"Thanks to its overseas territories, which country technically spans 12 time zones? -france"},
      {IDE:5, que:"With an area of less than 0.2 square mile (0.5 square kilometer), which is the smallest country in the world? - vatican city"},
      {IDE:6, que:"Which continent is home to the most countries? -africa"},
      {IDE:7, que:"Home to languages like Tok Pisin, Hiri Motu, and a German creole known as Unserdeutsch, which is the most linguistically diverse country in the world? - Papua New Guinea"},
      {IDE:8, que:"Which of these is NOT one of the 13 countries crossed by the Equator? - egypt"},
      {IDE:9, que:"Thanks to the tombs built by the ancient kingdom of Kush, which country is home to—by far—the most pyramidEs in the world?-sudan"},
      {IDE:10, que:" What country has the longest coastline? - canada"}];
    // const [data,setdata]=useState();
    const answers =[
      {Isentify:1, ans:"Russia"},
      {Isentify:2, ans:"Scotland"},
      {Isentify:3, ans:"Scotland"}



    ]
    const [answer, setAnswer]=useState([]);
  //   const app = () => {
    
  // }
  // console.log(app())
useEffect(()=>{ fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    setAnswer(data);
    console.log(data);
    console.log(data[95].altSpellings);
    console.log(data[95].altSpellings[1]);
  })
  .catch(error => {
    console.log(error)
  })},[])   
  console.log(answer)
    return (
      <div id="cont">
        <div  className="flex ml-20 mr-20 mt-10">
        {numbers.map((ind) => (
          <div key={ind.id} className="num">
            <h3 className="text-center mt-3">{ind.num}</h3>
          </div>
        ))}
        </div>
       
        {questions.length > 0 && (
    <div key={questions[0].IDE} className="w-250">
      <h1 className="text-red-300">{questions[0].que}</h1>
            </div>
          )}
          <div>
  {answer.map((ans) => (
    <div key={ans.IDE} className="bg-current w-200 h-100">
      {/* Assuming ans is an object and altSpellings is an array */}
     <h3 className="text-white">{ans.altSpellings[1]}</h3>
    </div>
  ))}
</div>
          
      </div>
    )
}