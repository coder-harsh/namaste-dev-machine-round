import React, { useState } from "react";
import './styles.css'
function ChipsInput() {
  const [inputText, setInputText] = useState("")
  const [chips, setChips] = useState([])
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      console.log(inputText)
      setChips(prev => [...prev, inputText])
      setInputText("")
    }
  }
  const handleDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1)
    setChips(copyChips)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }} value={inputText} onChange={(e) => { setInputText(e.target.value) }} onKeyDown={handleKeyDown}
      />
      {
        <div>
          <h2>Value:{inputText}</h2>
          <div style={{ display: "flex", gap: "6px", flexWrap: "nowrap" }}>{chips.map((c, index) => {
            return <div key={index} style={{ backgroundColor: "#c4c4c4", borderRadius: "8px", padding: "6px 8px", display: "flex", gap: "2px" }}>
              <div>
                {c}
              </div>
              <button style={{ backgroundColor: "transparent", cursor: "pointer" }} onClick={() => handleDelete(index)}>X</button>
            </div>
          })}</div>
        </div>
      }
    </div >
  );
}

export default ChipsInput;
