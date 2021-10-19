import { Grid } from '@material-ui/core'
import './Card.css'

const Card = ({ children, removeTask, completeTask, index }) => {
  return (
    <Grid container direction="column" className="Card" alignItems="stretch">
      <Grid item>{children}</Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={6}>
            <div onClick={() => completeTask(index)} className="completeButton-Card">
              Complete!
            </div>
          </Grid>
          <Grid item xs={6}>
            <div onClick={() => removeTask(index)} className="RemoveButton-Card">
              Remove!
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Card
