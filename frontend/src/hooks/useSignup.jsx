import { useState } from "react";

const useUserSignup = (url) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (userData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
                return false;
            }

            localStorage.setItem("user", JSON.stringify(data));

            return true;
        } catch (error) {
            setError(error.message);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, error, isLoading };
};

export default useUserSignup;