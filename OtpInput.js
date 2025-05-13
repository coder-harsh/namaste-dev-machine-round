import "./styles.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
export default function App() {
  const inputLength = 4;
  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  const [inputArr, setInputArr] = useState(new Array(inputLength).fill(""));
  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };
  const handleOnKeyDown = (e, index) => {
    console.log(e.key);
    if (e.key === "Backspace") {
      !e.target.value && refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h3>Otp Input</h3>
      <div className="inputContainer">
        {inputArr.map((input, index) => {
          return (
            <input
              type={"text"}
              value={input}
              key={index}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
