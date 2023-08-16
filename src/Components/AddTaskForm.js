import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function AddTaskForm({onAddTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       const newTask = {
        title,
        description,
        dueDate,
       };

       await onAddTask(newTask);
       navigate.push('/tasklist');
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={ handleSubmit }>
                <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={ (e) => setTitle (e.target.value)}
                required
                />

                <textarea
                placeholder='Description'
                value={description}
                onChange={ (e) => setDescription (e.target.value)}
                required
                />

                <input
                type="date"
                value={dueDate}
                onChange={ (e) => setDueDate (e.target.value)}
                required
                />

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
    };

   


export default AddTaskForm;