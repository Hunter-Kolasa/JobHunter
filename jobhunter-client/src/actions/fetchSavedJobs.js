export const fetchSavedJobs = () => {
    return dispatch => {
        dispatch({ type: "LOADING" })
        fetch('http://localhost:3001/jobs')
        .then(resp => resp.json())
        .then(savedJobs => dispatch({ type: "SET_SAVED_JOBS", savedJobs }))
    }
}