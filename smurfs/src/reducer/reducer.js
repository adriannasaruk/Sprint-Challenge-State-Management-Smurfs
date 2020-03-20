const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
        return {
            ...state,
            isFetchingData: true,
            
            }
        case "UPDATE_DATA":
            return {
                ...state,
                isFetchingData:true,
                smurfs: action.payload,
               
            }
            case "ADD_ITEM":
            return {
                ...state,
                
               
            }
        case "SET_ERROR":
            return {
                ...state,
              
            }
        default:
            return state
    }
}
export default reducer