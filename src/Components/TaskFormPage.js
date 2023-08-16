import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function TaskFormPage() {
    const [ successMessage, setSuccessMessage] = useState('');

    const handleAddTask = async (newTask) => {
        try {
            const taskRef = collection(db, 'tasks');
            await addDoc(taskRef, {
                ...newTask,
                completed: false,
            });
            setSuccessMessage ('Task added successfully'); //set the success message
        } catch (error) {
            console.error('Error Adding Task: ', error);
        } 
    };

    return (
        <div>
            <h1>Task Form Page</h1>
            <AddTaskForm onAddTask= { handleAddTask } />
            {successMessage && <p style={{ color: 'green'}}>{successMessage}</p>}
        </div>
    );
}

   


export default TaskFormPage;