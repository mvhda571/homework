import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState({
    Name: "",   
    surname: "",
    Email: "",
    agreed: false,
  });
  const [list, setList] = useState([])
function handleChange(e) {
  const { name, value} = e.target
  setName(prev => ({...prev,[name]: value }))
}

function Submit(e) {
  e.preventDefault()
  setList([...list, name])
  setName({
    Name: "",   
    surname: "",
    Email: "",
    agreed: false,
  })
}
  return (
    <div className="flex flex-col gap-4 w-96 mx-auto mt-10 border p-4 rounded">
      <label htmlFor="Name">Name</label>
      <input type="text" name="Name" value={name.Name} onChange={handleChange}  className="border p-2 rounded"/>
      <label htmlFor="surname">Surname</label>
      <input type="text" name="surname" value={name.surname} onChange={handleChange} className="border p-2 rounded"/>
      <label htmlFor="Email">Email</label>
      <input type="email" name="Email" value={name.Email} onChange={handleChange} className="border p-2 rounded"/>
      <label>
        <input type="checkbox" name="agreed" checked={name.agreed} onChange={handleChange} />
        I agree to the terms and conditions
      </label>
      <button className="" onClick={Submit}>Submit</button>
    </div>
  )
}

export default Input
