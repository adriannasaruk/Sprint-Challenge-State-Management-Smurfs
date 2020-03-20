import React from "react";
import {connect} from "react-redux"
import {getData} from "../actions/actions"

const GetData = (props) => {
    const handle = e => {
        e.preventDefault();
        props.getData();
    }
    return (
        <div>
        {props.isFetchingData ? (<div>This is the Village:</div>)
         : (<button onClick={handle}>Show me the smurfsvillage</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    }
}
export default connect(mapStateToProps, {getData})(GetData);