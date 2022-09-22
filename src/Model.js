import React from 'react'
import './Model.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useState } from 'react'


 
export default function Model({open, onClose, hours,minutes,seconds, attempts,currentattempts, complete, correct, percent, streak, victory}) {
    if(!open) return null
   
    const [copy, setCopy] = useState(false)
    
    function t()
    {
      if(copy === true)
      {
        document.getElementById('test').style.fontSize = '200%'
        document.getElementById('test').style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        document.getElementById('test').style.fontWeight = '500'
        document.getElementById('test').style.color = 'white'

      }
    }
    function test()
    {
      if(correct === null)
      {
        return 0
      }
      else
      {
        return correct
      }
    }
    function test2()
    {
      if(attempts === null)
      {
        return 0
      }
      else
      {
        return attempts
      }
    }
  return(
    
     <div className='overlay'>
    <div className='container'>
        <div className='container2' onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg></div>
        <h1 className='head'>Your Stats</h1>
        <div className='containstats'>
        
        </div>
        <div className='timeleft'>Next Tweetle in {hours}:{minutes}:{seconds} </div>
        <div id='statusmsg'>{victory}</div>
       {complete &&  <CopyToClipboard text={'Daily Tweetle ' + currentattempts + '/5 incorrect 🐦 Play Tweetle at https://tweetle.app/'} onCopy={() => setCopy(true)}><div className='sharecontainer'><div className='share'><div className='sharetext'><span id='test' class="material-symbols-outlined" onClick={t()}>
{copy ? 'Copied': "share"}
</span></div></div></div></CopyToClipboard>} 
        
        <div className='containercontainer'>
          <div className='attemptcontainer'>
            <div className='attempts'>{test()} / {test2()}</div>
            <div className='attempts2'>Attempts</div>
          </div>
          <div className='streakcontainer'>
             <div className='streaknum'>{streak}</div>
              <div className='streak'>Longest Streak</div>
          </div>
          <div className='wincontainer'>
            <div className='percent'>{percent.toFixed(0)}% </div>
                <div className='winpercent'>Win Percentage</div> 
          </div>
        </div>
         
        <div className='statcontainer'>
          <div className='gamesplayed'></div>
          <div className='streak'></div>



        </div>
   </div>
   </div>
   
  )

}
