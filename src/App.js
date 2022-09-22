import "./NavBar.css"
import Model from "./Model";
import React, { Component, useEffect } from 'react'
import { useState } from "react";
import Board from "./Board";
import './Board.css'
import axios from 'axios'
import './inputbox.css'
import './placeholder.css'
import Popup from "./Popup";
import './Hint.css'
import { set } from "countapi-js";







function App() {

const [arr, setArray] = useState([])
const [victory, setVictory] = useState('');
const [seconds, setseconds] = useState();
const [minutes, setminutes] = useState();
const [hours, sethours] = useState('');
const [gamestatus, setGameStatus] = useState(false);
const [Attempts, SetAttempts] = useState(0);
const [divnum, setDiv] = useState(1);

const [isOpen, setIsOpen] = useState(false);
const [buttonpopup, setbuttonpopup] = useState(false);
const [tweets, setTweet] = useState();
const [sharebut, setSharebut] = useState(false);
const [answer, setAnswer] = useState();
const [answer2,setAnswer2] = useState();



let num = [];
num[0] = 0;

if(localStorage.getItem("winstreak") === null)
{
localStorage.setItem("winstreak", JSON.stringify(num))
}
else
{
  
};

let winstreak = JSON.parse(localStorage.getItem("winstreak"));

let array = localStorage.getItem("winstreak");
let test = array.split('')

const open = {}
test.forEach(function(t){
  open[t] = (open[t] || 0) + 1
})



let streaks = winstreak.reduce(function(res, n) { 
  if (n) res[res.length-1]++;
  else res.push(0);
  return res;
}, [1]);


let streak = Math.max.apply(Math, streaks);

localStorage.setItem("gamesplayed", winstreak.length)
let current = localStorage.getItem("gamesplayed");
let correct = localStorage.getItem("correctgames");
localStorage.getItem("winstreak", winstreak);



useEffect(() =>{

getTweet();

}, [])


if(gamestatus === true)
{
  document.getElementById('input').style.pointerEvents = 'none'

};

function hint()
{
   let number = '' + divnum
       let div = 'div'

  var ans1 = answer.length;
  var ans2 = answer2.length;

  var ans15 = answer.substring(0, Math.round(ans1 / 4));
  var ans25 = answer.substring(Math.round(ans1 / 4), Math.round(ans1 / 2))
  var ans35 = answer.substring(Math.round(ans1 / 2), Math.round(3*ans1/4))
  var ans45 = answer.substring(Math.round(3*ans1 / 4), ans1 - 1)

  var ans125 = answer2.substring(0, Math.round(ans2 / 4))
  var ans135 = answer2.substring(Math.round(ans2 / 4),Math.round(ans2 / 2))
  var ans145 = answer2.substring(Math.round(ans2 / 2),Math.round(3*ans2 / 4))
  var ans155 = answer2.substring(Math.round(3*ans2 / 4), ans2 - 1)
  
     if(answer.length < 4 && answer2.length > 4)
   {
      if(Attempts === 0)
      {
            document.getElementById(div + 1).innerHTML = ans125
           document.getElementById(div + 1).style.background = 'red'
       
        
      }
      if(Attempts === 1)
      {
           document.getElementById(div + 2).innerHTML = ans125 + ans135 
           document.getElementById(div + 2).style.background = 'red'
        
      }
      if(Attempts === 2)
      {
         document.getElementById(div + 3).innerHTML = ans125 + ans135 + ans145
         document.getElementById(div + 3).style.background = 'red'
        
      }
      if(Attempts === 3)
      {
         document.getElementById(div + 4).innerHTML = ans125 + ans135 + ans145 + ans155
         document.getElementById(div + 4).style.background = 'red'
        
      }
      if(Attempts === 4)
      {   
        
         document.getElementById(div + 5).innerHTML = answer2
         document.getElementById(div + 5).style.background = 'red'
        
      }
      
    if(answer2.length < 4)
             {
                 alert('Username and twitter @ too short to use hint')
                 
             }
      
   }
   else
   {

   


      if(Attempts === 0)
      {
        document.getElementById(div + 1).innerHTML = ans15 + ' or ' + ans125
        document.getElementById(div + number).style.background = 'red'
   
      }
      if(Attempts === 1)
      {
        document.getElementById(div + 2).innerHTML = ans15 + ans25 + ' or ' + ans125 + ans135 
        document.getElementById(div + number).style.background = 'red'
       
      }
      if(Attempts === 2)
      {
        document.getElementById(div + 3).innerHTML = ans15 + ans25 + ans35 + ' or ' + ans125 + ans135 + ans145
        document.getElementById(div + number).style.background = 'red'
      
      }
      if(Attempts === 3)
      {
        document.getElementById(div + 4).innerHTML = ans15 + ans25 + ans35 + ans45 + ' or '+ ans125 + ans135 + ans145 + ans155
        document.getElementById(div + number).style.background = 'red'
        
      }
      if(Attempts === 4)
      {
        document.getElementById(div + 5).innerHTML = answer
        document.getElementById(div + number).style.background = 'red'
        
      }

        
       
      
       setDiv(divnum + 1)
  
    }
   

  if(Attempts > 3)
   {
    console.log("you lose")
    setVictory("You did not get today's Tweetle")
     setIsOpen(true)
    setSharebut(true)
    setGameStatus(true)
    localStorage.setItem("gamesplayed", winstreak.length)
    document.getElementById('hintbut').style.pointerEvents = 'none'
      winstreak.push(0)
       localStorage.setItem("winstreak", JSON.stringify(winstreak))
    return
   }
  
   
  SetAttempts(Attempts + 1)
}
let boxval 


  


setInterval(() =>{

let nextMidnight = new Date();
nextMidnight.setHours(24,0,0,0);
let now = new Date();
let remainingTimeInSeconds = (nextMidnight.getTime() - now.getTime())/1000;
const hours = Math.floor(remainingTimeInSeconds/3600);
remainingTimeInSeconds = remainingTimeInSeconds - hours * 3600
const minutes = Math.floor(remainingTimeInSeconds / 60)
remainingTimeInSeconds = remainingTimeInSeconds - (minutes * 60)
const seconds = Math.floor(remainingTimeInSeconds)

if(hours < 10)
{
  sethours('0' + hours)
}
else
{
  sethours(hours)
}
if(minutes < 10)
{
  setminutes('0' + minutes)
}
else
{
  setminutes(minutes)
}
if(seconds < 10)
{
  setseconds('0' + seconds)
}
else
{
  setseconds(seconds)
}

}, 1000)



function getTweet(){


axios.get('https://tweetleserver.herokuapp.com/').then(res => {

//https://tweetleserver.herokuapp.com/

setTweet(res.data.data.id);
setAnswer(res.data.includes.users[0].name);
setAnswer2(res.data.includes.users[0].username);

console.log(document.getElementsByClassName('css-1dbjc4n r-18u37iz r-1t982j2')[0])

return ;
})
.catch(err => {
  console.log(err)
  return 
})

};




 function getData(val)
  {

    

    if(val.toUpperCase().replace(/\s/g, "") === answer.toUpperCase().replace(/\s/g, ""))
    {

       let number = '' + divnum
       let div = 'div'
      
       
      document.getElementById(div + number).innerHTML = val
      document.getElementById(div + number).style.background = 'green'
      document.getElementById(div + number).style.display = 'flex'
      document.getElementById(div + number).style.justifyContent = 'center'
      setIsOpen(true)
      document.getElementById('unblurred').style.backdropFilter = 'blur(0px)'
      document.getElementById('insideblur').style.backdropFilter = 'blur(0px)'

      console.log('you are right!')
      localStorage.setItem("correctgames", open['1'])
      setVictory("You got today's Tweetle!")
       localStorage.setItem("gamesplayed", current++)
       
       winstreak.push(1)
       
       localStorage.setItem("winstreak", JSON.stringify(winstreak))
       setSharebut(true)
       setGameStatus(true)
      return
    }
    if(val.toUpperCase().replace(/\s/g, "") === answer2.toUpperCase().replace(/\s/g, ""))
    {
      

       let number = '' + divnum
       let div = 'div'
      
       
      document.getElementById(div + number).innerHTML = val
      document.getElementById(div + number).style.background = 'green'
      document.getElementById(div + number).style.display = 'flex'
      document.getElementById(div + number).style.justifyContent = 'center'
      setIsOpen(true)
      document.getElementById('unblurred').style.backdropFilter = 'blur(0px)'
      document.getElementById('insideblur').style.backdropFilter = 'blur(0px)'
      console.log('you are right!')
      
      localStorage.setItem("correctgames", open['1'])
       setVictory("You got today's Tweetle!")
       localStorage.setItem("gamesplayed", current++)

       winstreak.push(1)
      localStorage.setItem("winstreak", JSON.stringify(winstreak))
      setSharebut(true)
      setGameStatus(true)
      return 
    }
    if(val !== answer)
    {
      SetAttempts(Attempts + 1)
      if(Attempts <= 3)
      {

       let number = '' + divnum
       let div = 'div'

       
      document.getElementById(div + number).innerHTML = val
        document.getElementById(div + number).style.background = 'red'
        document.getElementById(div + number).style.display = 'flex'
      document.getElementById(div + number).style.justifyContent = 'center'
       setDiv(divnum + 1)
       
        console.log(val.search(/g/i))

        return
      }

      
    }
    if(val !== answer2)
    {
      SetAttempts(Attempts + 1)
      
      if(Attempts <= 3)
      {

        
       let number = '' + divnum
       let div = 'div'

       
        
       document.getElementById(div + number).innerHTML = val
      document.getElementById(div + number).style.background = 'red'
      document.getElementById(div + number).style.display = 'flex'
      document.getElementById(div + number).style.justifyContent = 'center'
       setDiv(divnum + 1)

        console.log(val.search())

        return
      }
      
      
      
    }
   if(Attempts >= 4)
   {
    console.log("you lose")
 setVictory("You did not get today's Tweetle")
    SetAttempts(5)
      let number = '' + divnum
       let div = 'div'
       localStorage.setItem("gamesplayed", winstreak.length)
        document.getElementById(div + number).innerHTML = val
      document.getElementById(div + number).style.background = 'red'
      document.getElementById(div + number).style.display = 'flex'
      document.getElementById(div + number).style.justifyContent = 'center'
      
       winstreak.push(0)
       localStorage.setItem("winstreak", JSON.stringify(winstreak))
    setIsOpen(true)
    setSharebut(true)
    setGameStatus(true)
    return 
   }
   
   return
  }


function handleKeyPress(event)
{
   
    let test = []
if (event.key === 'Enter')
{
  
  let ansStore = document.getElementById('input').value
  test.push(ansStore)
  console.log(test)
  getData(ansStore)
  
  return
}
else
{
  
    
  console.log('keep going')
  return
}






}

  return (
    <>
    <div className="App">
   <div className="navbar">
   <div className='help' onClick={() => setbuttonpopup(true)}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg> </div>
    <Popup open = {buttonpopup} onClose={() => setbuttonpopup(false)}></Popup>
    <div className='home'>Tweetle</div>
    <div className='settings' onClick={() => setIsOpen(true)}>
      <span className="material-symbols-outlined">
leaderboard
</span></div>
        </div>
    </div>
    <Model victory={victory} complete={sharebut} currentattempts = {Attempts} streak = {streak} percent = {(localStorage.getItem("correctgames") / localStorage.getItem("gamesplayed")) * 100} correct = {localStorage.getItem("correctgames")} attempts = {localStorage.getItem("gamesplayed")} hours = {hours} minutes = {minutes} seconds = {seconds} text ={'You completed the Tweetle in ' + (Attempts + 1) + " Tries"} open={isOpen} onClose={() => setIsOpen(false)}>
      </Model>
    <Board number = {tweets}></Board>
    <div className="wrapper">
    <input placeholder='Guess who made the Tweet!' id='input' type= "text" onKeyDown={handleKeyPress}/>
    </div>
    <div className="placewrap">
      
    <div className="box1" id="div1"></div>
    <div className="box2" id="div2"></div>
    <div className="box3" id="div3"></div>
    <div className="box4" id="div4"></div>
    <div className="box5" id="div5"></div>
    <div id='hintbut' className='hint' onClick={() => hint()}>Hint</div>
    
    </div>
    </>
   
  );
}



export default App;
