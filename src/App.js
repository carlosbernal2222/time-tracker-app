
import './App.css';
import Report from './components/Report';
import Category from './components/Category';
import data from "./data.json"
import { useState } from 'react';

function App() {
  const [timeframe, setTimeframe] = useState("weekly"); //default to weekly

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  }

  const categories = data.map(item=>{
    return(
      <Category
        item={item}
        timeframe={timeframe}   
      />
    )
  })

  return (
    <div className="app">
      
      <section className='tracker--wrapper'>
        <Report onTimeframeChange={handleTimeframeChange} />
        <div className='categories--container'>
          {categories}
        </div>
        
      </section>
      

    </div>
  );
}

export default App;
