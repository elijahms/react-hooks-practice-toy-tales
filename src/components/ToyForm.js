import React, {useState} from "react";

function ToyForm({setToys, toys}) {

  const [form, setForm] = useState({
    image: "",
    name: "",
    likes: 0
  })

  function handleChange(e) {
    setForm({...form, [e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newToys = [...toys, form]
    setToys(newToys)
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
