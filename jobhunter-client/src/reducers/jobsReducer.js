const initialState = {
    jobs: [],
    savedJobs: [],
    loading: true,
    loadingSaved: true,
    page: 1,
    search: ""
}

const jobsReducer = (state={initialState}, action) => {
    switch(action.type) {
        case "LOADING_JOBS":
            return {
                ...state,
                loading: true
            }
        case "LOADING_SAVED":
            return {
                ...state,
                loadingSaved: true
            }
        case "SET_JOBS":
            return {
                ...state,
                loading: false,
                jobs: action.jobs,
                page: action.page,
                search: action.search
            }
        case "SET_SAVED_JOBS":
            return {
                ...state,
                loadingSaved: false,
                savedJobs: action.savedJobs
            }
        case "ADD_JOB":
            // console.log(action.savedJob)
            return {
                ...state,
                savedJobs: [...state.savedJobs, action.savedJob]
            }
        case "DELETE_JOB":
            // findIndex(obj => obj.id == 3)
            let i = state.savedJobs.findIndex(job => job.id === action.jobId)
            return {
                ...state,
                savedJobs: [
                    ...state.savedJobs.slice(0,i),
                    ...state.savedJobs.slice(i+1)
                ]
            }
        // case "TEST_LOG":
        //         console.log("Made it")
        //     return {
        //         ...state
        //     }

        default:
            return state;
    }
}

export default jobsReducer;