export const fetchAllJobs= () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING' });
        fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
            .then(response => response.json())
            .then(jobs => dispatch({ type: 'SET_JOBS', jobs }))

    }
}