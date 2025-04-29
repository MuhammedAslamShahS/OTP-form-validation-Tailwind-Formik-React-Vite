import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
    const inputRef = useRef({});

    const [otp, setOtp] = useState({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: "",
        digitFive: "",
        digitSix: "",
    });

    useEffect(() => {
        inputRef.current[0]?.focus;
    }, []);

    const handleChange = (event, index) => {
        const { name, value } = event.target;

        if (/[a-z]/gi.test(value)) return;

        setOtp((prev) => ({
            ...prev,
            [name]: value.slice(-1),
        }));
        value && index < 5 ? inputRef.current[index + 1].focus() : null;
    };

    const handleBackSpace = (event, index) => {
        event.key === "Backspace" ? inputRef.current[index - 1]?.focus() : null;
    };

    const renderInput = () => {
        return Object.keys(otp).map((keys, index) => (
            <input
                key={index}
                ref={(element) => (inputRef.current[index] = element)}
                type="text"
                value={otp[keys]}
                name={keys}
                className="w-16 h-12 rounded-md mr-3 text-center text-xl outline-none bg-white"
                onChange={(event) => handleChange(event, index)}
                onKeyUp={(event) => handleBackSpace(event, index)}
            />
        ));
    };
    return (
        <form action="">
            <h3 className="text-3xl mb-8 text-amber-100">Enter the OTP</h3>
            <div>{renderInput()}</div>

            <button className="mt-4 w-32">Submit</button>
        </form>
    );
}

export default App;
