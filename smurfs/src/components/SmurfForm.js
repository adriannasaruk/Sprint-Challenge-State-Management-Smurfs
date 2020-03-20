import React, {useState} from "react";
import {addItem} from "../actions/actions"
import {connect} from "react-redux"


const SmurfForm = (props) => {
    console.log(props)

    const [smurf, setSmurf] = useState ({
        name: " ",
        age: " ",
        height: " "
    })

const handleChanges = e => {
    setSmurf({...smurf,[e.target.name]:e.target.value})
}
const submitForm = e => {
    e.preventDefault()
    props.addItem(smurf)
    console.log(smurf)
    setSmurf({
        name: " ",
        age: " ",
        height: " " })
}


return(
<div>
    <h2>New Smurf:</h2>
    
    <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name:</label>
            <input name = "name" type = "text" onChange = {handleChanges} />
            <label htmlFor = "age">Age:</label>
            <input name = "age" type = "text" onChange = {handleChanges} />
            <label htmlFor = "height">Height:</label>
            <input name = "height" type = "text" onChange = {handleChanges} />
            <button type = "submit">Add Smurf</button>
    </form>

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


