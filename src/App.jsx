import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { tasks as data } from "./data/tasks"
import { useEffect, useState } from "react"


function App() {

  // const [tasks, setTasks] = useState([])

  // useEffect(() => { setTasks(data) }, [])

  // function createTask(task) {
  //   setTasks([...tasks, {
  //     id: tasks.length + 1,
  //     name: task.title,
  //     description: task.description
  //   }])
  // }

  // function deleteTask(taskId) {
  //   setTasks(tasks.filter(task => task.id !== taskId))
  // }

  return (
    <main className="bg-zinc-400 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />

        {/* <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
      </div>
    </main>
  )
}

export default App