export const deleteJob = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/jobs/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
            .then(resp => resp.json())
            .then(jobId => {
                dispatch({ type: "DELETE_JOB", jobId })
                // console.log(idObject)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
