import React, {useState} from "react";
import addItem from "../actions/actions"
import {connect} from "react-redux"


const SmurfForm = (props) => {

const [value, setValue] = useState("")
const [age, setAge] = useState()
const [height, setHeight] = useState()

const handleChanges = e => {
    setValue(e.target.value)
}
const handleAge = e => {
    setAge(e.target.value)
}
const handleHeight = e => {
    setHeight(e.target.value)
}
const addit = (value,age,height) => {
    return{
        name: {value},
        age: {age},
        height: {height}
    }
       
}

return(
<div>
    <h2>New Smurf:</h2>
    <form>
        <input
        type = "text"
        name = "name"
        placeholder = "Name"
        value= {value}
        onChange= {handleChanges}
        />
         <input
        type = "num"
        name = "name"
        placeholder = "Age"
        value= {age}
        onChange= {handleAge}
        />
         <input
        type = "num"
        name = "name"
        placeholder = "Height"
        value= {height}
        onChange= {handleHeight}
        />
    </form>
    <button onClick={addit} >Add Smurf</button>
</div>
)
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetchingData: state.isFetchingData,
        error: state.error
    }
}
export default connect(mapStateToProps, {addItem})(SmurfForm);


