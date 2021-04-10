const initialState = {
    jobs: [],
    loading: true
}

const jobsReducer = (state={initialState}, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_JOBS":
            return {
                ...state,
                loading: false,
                jobs: action.jobs
            }
        default:
            return state;
    }
}

export default jobsReducer;