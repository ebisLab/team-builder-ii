import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {info} from './data';
import Form from './component/Form'

const Post = (props) =>{
  console.log('props in Post => ', props.item.name)
  return(<div>
    <h2>{props.item.name}</h2>
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

      <Form data={data} />
    
    </div>
  );

}

export default App;
