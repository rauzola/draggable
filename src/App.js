import React from "react";
import ReactDOM from "react-dom";
import DraggableList from "react-draggable-lists";
import "./styles.css";

export default function App() {
  const myList = [
    { name: "one", color: "green" },
    { name: "two", color: "blue" },
    { name: "three", color: "red" },
    { name: "four", color: "lightgreen" },
    { name: "five", color: "lightblue" },
    { name: "six", color: "cyan" }
  ];
  const handleClick = () => {
    console.log("mylist: ", myList);
  };

  return (
    <div className="App">
      <div style={{ width: 300, margin: "0 auto" }}>
        <DraggableList width={100} height={100}>
          {myList.map((item, i) => (
            <div style={{ width: 100, height: 100, background: item.color }}>
              {item.name}
            </div>
          ))}
          {/* <div style={{ width: 100, height: 100, background: "green" }}>1</div>
          <div style={{ width: 100, height: 100, background: "blue" }}>2</div>
          <div style={{ width: 100, height: 100, background: "red" }}>3</div>
          <div style={{ width: 100, height: 100, background: "lightgreen" }}>
            4
          </div>
          <div style={{ width: 100, height: 100, background: "lightblue" }}>
            5
          </div> */}
        </DraggableList>
        <button onClick={handleClick}>get order</button>
      </div>
    </div>
  );
}
