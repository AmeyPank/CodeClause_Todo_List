import { useState } from "react";
import "./styles.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");

    const handleAddTask = () => {
        if (text.trim() === "") {
            toast.error("Please add a valid Task!");
        } else {
            onAddTask(text);
            setText("");
            toast("Tast Added!");

        }
    };

    return (
        <div className="header">
            <ToastContainer />
            <div className="input-container">
                <input
                    placeholder="What you want to do..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    id="add-todo-btn"
                    onClick={handleAddTask}
                >
                    ADD
                </button>
            </div>
        </div>

    );
}