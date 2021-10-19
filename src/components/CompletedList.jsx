import './CompletedList.css'

const CompletedList = ({ task }) => {
  return (
    <div>
      {task.map((elem, index) => {
        return (
          <div key={index} className="completedTask">
            <h3>{elem}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default CompletedList
