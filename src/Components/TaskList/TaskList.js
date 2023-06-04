import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { MdDataSaverOn, MdOutlineCancel } from "react-icons/md";
import "./styles.css"
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <div className="tasks-container">
            <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}
                        />
                    ))
                ) : (
                    <li className="empty-tasks">Tasks List is empty!</li>
                )}
            </ul>
        </div>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(task.text);

    const handleInputChange = (e) => {
        setUpdatedText(e.target.value);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onChange(task.id, updatedText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setUpdatedText(task.text);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <li className="task">
            {isEditing ? (
                <div className="task-details">
                    <div className="description">
                        <textarea
                            type="text"
                            value={updatedText}
                            onChange={handleInputChange}
                        />
                        <span className="button save" onClick={handleSave}>
                            <MdDataSaverOn />
                        </span>
                        <span className="button cancel" onClick={handleCancel}>
                            <MdOutlineCancel />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="task-details">
                    <div className="description">
                        <span className="text">{updatedText}</span>
                        <span className="button edit" onClick={handleEdit}>
                            <HiPencil />
                        </span>
                        <span className="button delete" onClick={handleDelete}>
                            <RiDeleteBinLine />
                        </span>
                    </div>
                </div>
            )}
        </li>
    );
}
