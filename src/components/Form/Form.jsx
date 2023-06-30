import React, {useState} from 'react'

function Form() {

    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
  
    const message = `Hello! ${firstName} ${middleName} ${lastName}`
    
    return (
    <form>
        <input type="text" placeholder="Enter First Name" value={firstName}  onChange={(e) => {setFirstName(e.target.value)}} />
        <input type="text" placeholder="Enter Middle Name" value={middleName} onChange={(e) => {setMiddleName(e.target.value)}} />
        <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
        {message}
    </form>
    )
}

export default Form