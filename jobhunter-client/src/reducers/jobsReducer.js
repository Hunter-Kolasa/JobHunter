const initialState = {
    jobs: [],
    savedJobs: [],
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
        case "SET_SAVED_JOBS":
            return {
                ...state,
                loading: false,
                savedJobs: action.savedJobs
            }
        case "ADD_JOB":
            return {
                ...state,
                savedJobs: [...state.savedJobs, action.savedJob]
            }
        default:
            return state;
    }
}

export default jobsReducer;