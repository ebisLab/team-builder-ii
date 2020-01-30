import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {info} from './data'



function App(props) {
  const [data, setData] = useState(info);

  console.log(data, '<==props')
  return (
    <div className="App">
      <h2>Hello from inside App component</h2>
      {/* <Team data={data} /> */}
{/* {props.data.map((inf)=><div>Hello World</div>)} */}
    
    </div>
  );
}

export default App;
