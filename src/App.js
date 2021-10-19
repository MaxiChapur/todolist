import './App.css'
import { useState, useRef } from 'react'
import TaskList from './components/TaskList'
import CompletedList from './components/CompletedList'
import { Grid } from '@material-ui/core'

const App = () => {
  const [task, setTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])
  const inputValue = useRef()

  const removeTask = (index) => {
    let newList = [...task]
    newList.splice(index, 1)
    setTask(newList)
  }

  const completeTask = (index) => {
    setCompletedTask((prevState) => {
      return [...prevState, task[index]]
    })
    removeTask(index)
  }

  return (
    <>
      <h1>To Do List!</h1>
      <form
        id="input"
        onSubmit={(event) => {
          event.preventDefault()
          setTask((prevState) => {
            return [...prevState, inputValue.current.value]
          })
        }}>
        <label>Add a task here</label>
        <input ref={inputValue} id="input-form" />
      </form>

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item xs={5} className="listTag">
          <h3>Things to do!</h3>
        </Grid>
        <Grid item xs={5} className="listTag">
          <h3>Things already done.</h3>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="space-evenly">
        <Grid item direction="column" xs={5}>
          <TaskList task={task} removeTask={removeTask} completeTask={completeTask} />
        </Grid>
        <Grid item direction="column" xs={5}>
          <CompletedList task={completedTask} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
