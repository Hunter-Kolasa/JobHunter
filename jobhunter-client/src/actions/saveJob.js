export const saveJob = (job) => {
    // console.log("saveJob: ", job)
    return (dispatch) => {
        fetch('http://localhost:3001/jobs', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ job })
        })
            .then(resp => resp.json())
            .then(savedJob => {
                dispatch({ type: "ADD_JOB", savedJob })
                // console.log(savedJob)
            })
            .catch(error => {
                console.log(error)
            })
    }
}