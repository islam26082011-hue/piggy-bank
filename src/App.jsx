import { useState } from 'react';
import reactLogo from './assets/pyggy.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  let text = null;
  let style_btn = null

  if (count >= 500) {
    text = "Копилка полная";
    style_btn = "deactive"
  } else {
    text = `${count}руб`;
    style_btn = "active"
  }


  return (
    <>
    <h1>PiggyBank</h1>
      <div className ="piggy">
        <img src={reactLogo} className="piggy-img"/>
      </div>

      
      <div className='paper'>
        <h3>{text}</h3>
      </div> 
       
      <button className={style_btn} onClick={() => setCount((count) => count + 100)}>
        Положить 100 рублей
      </button>
    </>
  )
}

export default App
