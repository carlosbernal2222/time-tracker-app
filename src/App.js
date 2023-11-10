
import './App.css';
import Report from './components/Report';
import Category from './components/Category';
import data from "./data.json"

function App() {

  const categories = data.map(item=>{
    return(
      <Category
        item={item}
      
      />
    )
  })

  return (
    <div className="App">
      <Report />
      <section className='categories--grid'>
        {categories}
      </section>

    </div>
  );
}

export default App;
