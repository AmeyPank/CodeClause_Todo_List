import { useState } from "react";
export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    return (
        <div className="header">
            <input
                placeholder="What you want to do"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button id="add-todo-btn"
                onClick={() => {
                    setText("");
                    onAddTask(text);
                }}
            >
                ADD
            </button>
        </div>
    );
}