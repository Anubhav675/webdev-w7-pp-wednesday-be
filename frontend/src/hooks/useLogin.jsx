import { useState } from "react";

const useLogin = (url) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (credentials) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const user = await response.json();

            if (!response.ok) {
                setError(user.error);
                return false;
            }

            localStorage.setItem("user", JSON.stringify(user));

            return true;
        } catch (error) {
            setError(error.message);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { login, error, isLoading };
};

export default useLogin;