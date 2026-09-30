import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserSignup from "../hooks/useSignup"

const Signup = ({ setIsAuthenticated }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [accountType, setAccountType] = useState("");

    const navigate = useNavigate();

    const { signup, error, isLoading } = useUserSignup(
        "/api/users/signup"
    );

    const submitForm = async (e) => {
        e.preventDefault();

        const userData = {
            fullName,
            email,
            password,
            phone_number,
            gender,
            date_of_birth: dateOfBirth,
            accountType,
        };

        const success = await signup(userData);

        if (!success) {
            return;
        }

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
                />

                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Phone number: </label>
                <input
                    type="text"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label>Gender: </label>
                <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />

                <label>Date of Birth: </label>
                <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />

                <label>Account Type: </label>
                <input
                    type="text"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Signing up..." : "Sign Up"}
                </button>

                {error && <p className="error">{error}</p>}

            </form>
        </div>
    );
};

export default Signup;