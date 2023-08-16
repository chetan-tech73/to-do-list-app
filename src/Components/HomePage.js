import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

function HomePage() {
    const [dailyTasks, setDailyTasks] = useState([]);
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    useEffect(() => {
        //fetch daily tasks from firstore and set them in state
        const dailyTasksQuery = query(collection(db, 'tasks'), where ('type', '==', 'daily'));
        const dailyUnsubscribe = onSnapshot(dailyTasksQuery, (snapshot) => {
            const dailyTaskList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
            setDailyTasks(dailyTaskList);
        });

       //fetch daily tasks from firstore and set them in state
       const weeklyTasksQuery = query (collection(db, 'tasks'), where ('type', '==', 'weekly'));
       const  weeklyUnsubscribe = onSnapshot(weeklyTasksQuery, (snapshot) => {
        const weeklyTaskList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        setWeeklyTasks(weeklyTaskList);
       });
       return () => {
        dailyUnsubscribe();
        weeklyUnsubscribe();
       };
    }, []);

    const calculateProgress = (tasks) => {
        const completedTasks = tasks.filter((task) => task.completed);
        return (completedTasks.length / tasks.length) * 100;
    };

    return (
        <div>
            <h1>Homepage</h1>
            <h2>Daily Tasks</h2>
            <ul>
                {dailyTasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <p>Daily Task Progress: {calculateProgress(dailyTasks)}%</p>
            <h2>Weekly Tasks</h2>
            <ul>
                {weeklyTasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <p>weekly Task Progress: {calculateProgress(weeklyTasks)}%</p>
        </div>
    );
}

export default HomePage;