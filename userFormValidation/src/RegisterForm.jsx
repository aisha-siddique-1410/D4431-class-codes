import React, { useState } from 'react'


function RegisterForm() {

    // Form State
    const [formData, setFormData] = useState({
        name : "",
        email:"",
        password: ""
    })

    // Error State

    const [errors, setErrors] = useState({})


    const handleChange = (e) => {
        const {name, value} = e.target;  // const name = e.target.name, const value = e.target.value

        setFormData ((prevData) => ({
            ...prevData,  // spread operator
            [name] : value
        }));
    }


    const validate = () => {
        let newErrors = {};

        // Name Validation 
        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }

        //Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern .test(formData.email)){
            newErrors.email = "Enter Valid email"
        }

        // password validation

        if(formData.password.length <6){
            newErrors.password =  "Password must be atleast 6 characters"

        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()){
            alert("Form Submitted Successfully");
            console.log(formData);

            // Reset Form

            setFormData({
                name : "",
                email : "",
                password: ""
            })
        }
    }
  return (
    <div className="container">
      <h2> Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

        
      {/* Name */}
      <input type="text"
      name = "name"
      placeholder="Enter Name"
      value = {formData.name}
      onChange={handleChange}
      />

      <p className="error">{errors.name}</p>
      {/* Email */}
    <input type="text"
      name = "email"
      placeholder="Enter Email"
      value = {formData.email}
      onChange={handleChange}
      />

      
      <p className="error">{errors.email}</p>

      {/* password */}

      <input type="password"
      name = "password"
      placeholder="Enter Password"
      value = {formData.password}
      onChange={handleChange}
      />

      
      <p className="error">{errors.password}</p>

      <button type="submit"> Submit</button>
      </form>

    </div>

 
  )
}

export default RegisterForm
