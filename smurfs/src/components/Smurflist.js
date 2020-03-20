import React from "react";
import {connect} from "react-redux"

const SmurfList = (props) => {
return(
    <div className = "main">
        <>{props.error ? (<div className= "error">props.error</div>) 
        : (props.smurfs.map(item => (
            <div className= "cards">
                <h4>Name: {item.name}</h4>
                <p>Age: {item.age}</p>
                <p>Height: {item.height}</p>
            </div>
        )))}</>
        </div>
)}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {})(SmurfList);
  