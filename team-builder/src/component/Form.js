import React, {useState} from 'react';


const Form = (props) =>{
    const [data, setData]= useState({
        name: '',
body: '', 
email: '',
role: ''
    })

    const handleChanges = e =>{
        setData({name: e.target.value})
        e.preventDefault();
        console.log(data)
    }
return(
    <div>
        <h2>Hello from inside the Form</h2>
        <form >
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            name="name"
            type="text"
            onChange={handleChanges}
            />

            <label htmlFor="email">Email</label>
            <input 
            id="email"
            name="email"
            type="text"
            onChange={handleChanges}

            />
            <label htmlFor="role">Role</label>
            <input 
            id="role"
            name="role"
            type="text"
            onChange={handleChanges}

            />
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form