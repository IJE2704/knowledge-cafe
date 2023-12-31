
import { useState } from 'react'
import './App.css'
import Feed from './Components/Feed/Feed'
import Header from './Components/Header/Header'
// import Main from './Components/Main/Main'
import Saved from './Components/Saved/Saved'

function App() {
  const [totalTime, setTime] = useState(0);
  const time = readTime => {
    const newTime = totalTime + readTime;
    setTime(newTime);
  }
  const [headlines, setHeadline] = useState([]);
  const handleHeadLine = headline => {

    const newHeadlines = [...headlines, headline];
    setHeadline(newHeadlines);
  }
  // console.log(handleHeadLine);

  return (
    <div className=''>
      <Header></Header>
      <div className='main-container flex flex-col md:grid gap-6 md:grid-cols-3 xl:grid xl:grid-cols-3 '>
        <div className='md:col-span-2 xl:col-span-2 '>
          <Feed
            time={time}
            handleHeadLine={handleHeadLine}
          ></Feed>
        </div>
        <div className='md:col-span-1 xl:col-span-1'>
          <Saved
            totalTime={totalTime}
            headlines={headlines}
          ></Saved>
        </div>

      </div>
    </div>
  )
}

export default App
