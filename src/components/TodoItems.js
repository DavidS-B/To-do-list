import React, { Component } from "react";
import "./TodoItems.css";

export class TodoItems extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div
        style={{
          background: "#f4f4f4",
          padding: "10px",
          border: "3px grey solid",
          borderRadius: "7px",
          margin: "5px"
        }}
      >
        <p>
          <span>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {""}
          </span>
          <span style={this.getStyle()}>{title}</span>
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            <span role="img" aria-label="redCross">
              ❌
            </span>
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  border: "none",
  backgroundColor: "#f4f4f4",
  float: "right",
  cursor: "pointer"
};

export default TodoItems;
