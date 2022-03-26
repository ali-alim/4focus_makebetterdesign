import {makeStyles} from './styles' 
function App() {
    const classes = makeStyles();
  return (
    <div className={classes.appBar}>
      Hello, this is manually built App
    </div>
  )
}

export default App
