import React, { useState } from "react";

function StudentForm() {

 const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");



  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      id,
      name,
      email,
      course
    };

    const response = await fetch("http://localhost:5000/addStudent", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)

    });

    const result = await response.text();

    alert(result);

  };



  return (

    <div>

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>


        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

    </div>

  );
}

export default StudentForm;