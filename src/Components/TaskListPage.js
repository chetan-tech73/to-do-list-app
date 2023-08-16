import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function TaskListPage() {
    const [tasks, setTasks] = useState ([]);

   
   //fetch tasks from firestore and set them in state

    useEffect(() => {
        const unsubscribe = onSnapshot (query(collection(db, 'tasks')), (snapshot) => {
            const tasklist = snapshot.docs.map((doc) =>( { id: doc.id, ...doc.data()}));
            setTasks (tasklist);
        });

        return () => unsubscribe();
    }, []);

    const handleToggleComplete = async (taskId) => {
        try {
            const taskRef = doc (db, 'tasks', taskId);
            await updateDoc(taskRef, {completed: true});
            setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? {...task, completed: true} : task))
            );
        } catch (error){

        }
    };

    return(
        <div>
            <h2>Task List</h2>
            <ul>
                { tasks.map(( task) =>(
                    <li key={task.id}>
                        <input
                        type='checkbox'
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task.id)}
                        />
                        <h3>{task.title}</h3>
                        <p>Description: {task.description}</p>
                        <p>Due Date: {task.dueDate}</p>
                        {task.completed ? ( <p>Completed: Yes</p>
                        ) : (
                            <button onClick={ () => handleToggleComplete (task.id)}>Mark as Completed</button>

                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskListPage;