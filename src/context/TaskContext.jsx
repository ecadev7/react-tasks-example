import React, { createContext, useEffect, useState } from 'react'
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            name: task.title,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => { setTasks(data) }, [])

    let x = 20
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

// export default TaskContext