import axios from "axios"

export const getData = () => dispatch=> {
    dispatch({type: "GET_DATA"});
    axios.get("http://localhost:3333/smurfs")
    .then(res => {console.log(res)
    dispatch({type: "UPDATE_DATA", payload: res.data})
})
.catch(err => {console.log("error" ,err)
dispatch ({ type: "SET_ERROR", payload: "error fetching data"})})
}

export const addItem = (value,age,height) => dispatch=> {
    dispatch({type: "ADD_ITEM"});
    axios.post("http://localhost:3333/smurfs")
    .then(res => {console.log(res)
    dispatch({type: "UPDATE_DATA", payload: res.data})
})
.catch(err => {console.log("error" ,err)
dispatch ({ type: "SET_ERROR", payload: "error fetching data"})})
}

export default  addItem