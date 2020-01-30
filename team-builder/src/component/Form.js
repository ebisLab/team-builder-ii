import React, {useState} from 'react';


const Form = (props) =>{
return(
    <div>
        <h2>Hello from inside the Form</h2>
        <form>
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            name="name"
            type="text"
            />

            <label htmlFor="email">Email</label>
            <input 
            id="email"
            name="email"
            type="text"
            />
            <label htmlFor="role">Role</label>
            <input 
            id="role"
            name="role"
            type="text"
            />
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form