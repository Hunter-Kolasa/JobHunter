export const fetchAllJobs = (params = "") => {
    return (dispatch) => {
        let searchParams;
        if (params) {
            searchParams = `?description=${params}`
        } else {
            searchParams = ``
        }
        // console.log(searchParams)
        // dispatch({ type: 'LOADING' });
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${searchParams}`)
            .then(response => response.json())
            .then(jobs => dispatch({ type: 'SET_JOBS', jobs }))

    }
}