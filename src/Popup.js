import React from 'react'
import './Popup.css'
import img1 from './images/kyliejennernotcorrect.png'
import img2 from './images/kyliejennercorrect.png'

export default function Popup({open, onClose}) {
    if(!open) return null
  return (
    <div className='overlay1'>
        <div className='container1'>
                
              
            <div className='close' onClick={onClose}>
                
             
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
            
            
            </div>
            <div className='how2playcont'>
            <h1 className='how2play'>HOW TO PLAY</h1>
            </div>
            <p className='textin'>Guess the username or the Twitter @ of the author of the tweet in the least amount of attempts.<p className='textin2'>If you are stuck use the hint button. </p></p>
            
            <div className='imageholder'><img id='img1'src={img1}></img><img id='img2' src={img2}></img></div>
            <div id='twitter'>Any issues or bugs? Send us a dm <a href='https://twitter.com/TweetleOfficial'>@TweetleOfficial</a> on Twitter!</div>
        </div>    
    </div>
  ) 
}
