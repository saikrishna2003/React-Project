import React from 'react'
import './home.css'
import img from '../images/4.jpg'
import img1 from '../images/1.1.jpg'
function Home() {
  return (
    <>
  <div className='icon' style={{backgroundImage: `url(${img})`}}>

    <div className='head'><h1>THE ARCHIVE</h1></div>
    <div className='sub'>Welcome to the archive. Here you'll find number of pages of life advice on personal values, science, relationships, finding purpose, and much more. You can browse the archive based on the category below. Enjoy.</div>
    </div>

    <div className='art'><h2>Most Popular Articles</h2></div>

    <div className='art1'>
    <img src={img1} alt='img1'/> 
    <h4>Why Growth Requires Struggle</h4>
    <div className='info'><h2>Last month’s email about trigger warnings was an unexpected hit. I can’t remember the last time I got such an overwhelmingly positive response from people about a subject.</h2>
    </div><br></br>
    <div className='dash'><h2>______________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='art1'>
    <img src={img1} alt='img1'/> 
    <h4>Ukraine's nuclear plants face uncertain future after Russian attacks</h4>
    <div className='info'><h2>Attacks on Ukraine's power grid took all 15 of the nation's nuclear reactors offline for the first time ever. Russia also retains control of Zaporizhzhia Nuclear Power Plant, the largest nuclear power station in Europe.</h2>
    </div><br></br>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='art1'>
    <img src={img1} alt='img1'/> 
    <h4>48,500-year-old zombie virus revived by scientists in Russia</h4>
    <div className='info'><h2>The thawing of ancient permafrost due to climate change may pose a new threat to humans, according to researchers who revived nearly two dozen viruses – including one frozen under a lake more than 48,500 years ago.</h2>
    </div><br></br>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>

    <div className='art1'>
    <img src={img1} alt='img1'/> 
    <h4>3 Principles for a Better Life</h4>
    <div className='info'><h2>When good, principles can be far more effective than any sort of “do this, do that” imperative. These are three of the most helpful principles I’ve come across to steer my life.</h2>
    </div><br></br>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    <div className='art1'>
    <img src={img1} alt='img1'/> 
    <h4>6 Books That Will Help You Grow From Your Pain</h4>
    <div className='info'><h2>There are a lot of "feel good" self-help books out there that all kind of say the same thing. But a rare few teach you how to grow from pain.</h2>
    </div><br></br>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    </div>
    {/* <div className='art1'>

    <div><h4>Ukraine's nuclear plants face uncertain future after Russian attacks</h4></div>
    <div  className='art2'><h2>Attacks on Ukraine's power grid took all 15 of the nation's nuclear reactors offline for the first time ever. Russia also retains control of Zaporizhzhia Nuclear Power Plant, the largest nuclear power station in Europe</h2></div>
    <br></br>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    <div><h4>48,500-year-old zombie virus revived by scientists in Russia</h4></div>
    <div className='art3'><h2>The thawing of ancient permafrost due to climate change may pose a new threat to humans, according to researchers who revived nearly two dozen viruses – including one frozen under a lake more than 48,500 years ago.</h2></div>
    <div className='dash'><h2>_____________________________________________________________________________________________________________</h2></div>
    <br></br>  */}

    
    
    </>

  )
}

export default Home