import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = ({setIsAuthenticated }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [accountType, setAccountType] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({
        fullName,
        email,
        password,
        phone_number,
        gender,
        date_of_birth: dateOfBirth, 
        accountType,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));

    console.log("Successfully created account");
    setIsAuthenticated(true);
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Full Name: </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>Phone number: </label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
        <label>Gender </label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        ></input>
        <label>Date of Birth </label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        ></input>
        <label>Account Type: </label>
        <input
          type="text"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        ></input>
        <button>Sign Up</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
