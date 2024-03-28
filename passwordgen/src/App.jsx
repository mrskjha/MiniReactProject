import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~`!@#$%^&*_+-*/.";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator(); // Call the passwordGenerator function here
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    
      <div className=" bg-gray-800 h-48 w-auto rounded-md ">
        <h1 className="text-4xl text-center text-white mt-5">Password Generator</h1>
        <div className="pt-5">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="h-10 pt- placeholder:text-slate-400"
          readOnly
          ref={passwordRef}
        ></input>
        <button onClick={copyPasswordToClipboard} className="h-10 rounded-none hover:nono">Copy</button>
        <div className="pt-4">
          <input
            type="range"
            min={2}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: ({length})</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="charInput">Character</label>
        </div>
        </div>
        
      </div>
  );
}

export default App;
