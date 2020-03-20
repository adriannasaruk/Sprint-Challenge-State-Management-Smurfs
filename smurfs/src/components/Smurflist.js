import React from "react";
import {connect} from "react-redux"

const SmurfList = (props) => {
return(
        <>{props.error ? (<div className= "error">props.error</div>) 
        : (props.smurfs.map(item => (
            <div>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <p>{item.height}</p>
            </div>
        )))}</>
)}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {})(SmurfList);
  