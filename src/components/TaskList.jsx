import Card from './Card'

const TaskList = ({ task, removeTask, completeTask }) => {
  return (
    <div>
      {task.map((elem, index) => {
        return (
          <Card key={index} removeTask={removeTask} completeTask={completeTask} index={index}>
            <h3>{elem}</h3>
          </Card>
        )
      })}
    </div>
  )
}
export default TaskList
