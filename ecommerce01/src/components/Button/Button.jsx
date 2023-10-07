import classes from './Button.module.css'
const Button = (props) => {
    console.log (props)
    console.log (classes)
    return <button className={classes.color}>{props.label}</button>
}
export default Button