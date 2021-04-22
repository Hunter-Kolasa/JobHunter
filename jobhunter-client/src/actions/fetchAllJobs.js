export const fetchAllJobs = (search = "", page = 1) => {
    console.log(page)
    return (dispatch) => {
        dispatch({ type: "LOADING_JOBS" })
        let searchParams;
        if (search) {
            searchParams = `&search=${search}`
        } else {
            searchParams = ``
        }
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}${searchParams}`)
            .then(response => response.json())
            .then(jobs => dispatch({ type: 'SET_JOBS', jobs, page, search })
        )

    }
}

// export const fetchAllJobs = (params = "") => {
//     return (dispatch) => {
//         let searchParams;
//         if (params) {
//             searchParams = `?description=${params}`
//         } else {
//             searchParams = ``
//         }
//         // console.log(searchParams)
//         // dispatch({ type: 'LOADING' });
//         fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${searchParams}`)
//             .then(response => response.json())
//             .then(jobs => dispatch({ type: 'SET_JOBS', jobs }))

//     }
// }