import { useState } from "react";

import "./App.css";

function App() {
    const [otp, setOtp] = useState({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: "",
        digitFive: "",
        digitSix: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setOtp((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log(otp);

    const renderInput = () => {
        return Object.keys(otp).map((keys, index) => (
            <input
            maxLength={1}
                type="text"
                name={keys}
                className="w-16 h-12 rounded-md mr-3 text-center text-xl outline-none bg-white"
                onChange={handleChange}
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
