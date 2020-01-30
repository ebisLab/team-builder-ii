import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {info} from './data'

const Post = (props) =>{
  return(<div>
    <h2>I'm sure you are</h2>
  </div>)
}

const Another = (props) =>{
  console.log('props in another=>', props)
  console.log('name: ',props.data.name)
  return(
    <div style={{color: 'red'}}>
      <h2>Inside Another component</h2>
{props.data.map(item=>(<Post item={item}/>))}
    </div>
  )
}

function App(props) {
  const [data, setData] = useState( info
//     {
//     id:0,
// name: 'Ebi D Navigator',
// }
);

  console.log(data, '<==props')
  return (
    <div className="App">
      <h2>Hello from inside App component</h2>


      <Another data={data}/>
      {data.map(item=>(<Post item={item}/>))}
    
    </div>
  );
}

export default App;
