import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, error, isLoading } = useLogin("/api/users/login");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        const success = await login(credentials);

        if (!success) {
            return;
        }

        console.log("success");

        setIsAuthenticated(true);
        navigate("/");
    };

    return (
        <div className="create">
            <h2>Login</h2>

            <form onSubmit={handleFormSubmit}>
                <label>Email address:</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                </button>

                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;