import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import './Board.css'


export default function Board({number}) {


//<div id='unblurred'></div><div id='insideblur'></div>

  return (
        <>
        
        <div id='tweet'>
          <div id='unblurred'></div>
          <TweetEmbed tweetId = {number} options={{theme: 'dark', cards: 'hidden', conversation: 'none'}}/>
          <div id='insideblur'></div>

          
        </div>
        
        </>
       
    )
}
