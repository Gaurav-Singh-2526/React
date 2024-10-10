import { useState } from "react";
import "./index.css";

const Registration = ()=>{
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("");

    const handleInputChange =(e)=>{ 
        const {name,value} = e.target;
        switch(name){
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
        }

    };

    const handleSubmitData =(event)=>{
        event.preventDefault();
        const formData ={
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };
        console.log(formData);
    }
    return(
        <>
           
            <form onSubmit={handleSubmitData} >
            <div className="container">
                <h1>Sign Up</h1>
                <p>please fill in this form to create  an account</p>
                <label htmlFor="firstName">
                        <b>First Name</b>
                </label>
                    <input 
                    type="text"
                    name="firstName"
                    placeholder="Enter firstName"
                    required
                    value={firstName}
                    onChange={handleInputChange}
                    />

                <label htmlFor="lastName">
                        <b>Last Name</b>
                </label>
                    <input 
                    type="text"
                    name="lastName"
                    placeholder="Enter lastName"
                    required
                    value={lastName}
                    onChange={handleInputChange}
                    />
                <label htmlFor="email">
                        <b>Email</b>
                </label>
                    <input 
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    required
                    value={email}
                    onChange={handleInputChange}
                    />
                <label htmlFor="password">
                        <b>password</b>
                </label>
                    <input 
                    type="text"
                    name="password"
                    placeholder="Enter passsword"
                    required
                    value={password}
                    onChange={handleInputChange}
                    />
                <label htmlFor="phone">
                        <b>phone Number</b>
                </label>
                    <input 
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    required
                    value={phoneNumber}
                    onChange={handleInputChange}
                    />
                <p> 
                    By creating an account you agree to our
                    <a href="#" style={{color:"dodgerblue"}}>
                            Terms & privacy
                    </a>
                </p>

                <div className="clearfix">
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </div>

            </div>
            </form>
            <section className="summary"
            style={{textAlign:"center", marginTop:"5px"}}
            >
                <p>
                    Hello, my name is 
                    <span>
                        {firstName}{lastName}
                    </span>
                    . My email address is <span>{email}</span> and my phone number is
                    <span>{phoneNumber}</span>.
                </p>

            </section>

        </>
    );
};
    
export default Registration;