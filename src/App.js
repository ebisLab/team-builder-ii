import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {info} from './data';
import Form from './component/Form'

const Member = (props) =>{
  console.log('props in Member => ', props.item.name)
  return(<div>
    <h2>{props.item.name}</h2>
    <p>{props.item.body}</p>
    <p>{props.item.email}</p>
    <p>{props.item.role}</p>
  </div>)
}

const Another = (props) =>{
  console.log('props in another=>', props)
  console.log('name: ',props.data.name)
  return(
    <div style={{color: 'red'}}>
      <h2>Inside Another component</h2>
{props.data.map(item=>(<Member item={item}/>))}
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
const addNewPeople = (peep) => {
const newPerson = {
  id: Date.now(),
  name: peep.name,
  body: peep.body,
  email: peep.email,
role: peep.role
}
//7. add more to data object
setData([...data, newPerson])
}

  console.log(data, '<==props')
  return (
    <div className="App">
      <h2>Hello from inside App component</h2>


      {/* <Another data={data}/> */}
      {data.map(item=>(<Member item={item}/>))}
{/*pass addPerson as function*/}
      <Form data={data} addNewPeople={addNewPeople}/>
    
    </div>
  );

}

export default App;
