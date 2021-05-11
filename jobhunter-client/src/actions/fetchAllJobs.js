export const fetchAllJobs = (search = "", location = "", fullTime = "", page = 1) => {
    // console.log(`Searching for: ${search} in location: ${location} with a fullTime value of: ${fullTime}`)
    return (dispatch) => {
        dispatch({ type: "LOADING_JOBS" })
        let searchParams = ``;
        if ( search ) {
            searchParams += `&search=${search}`
        }
        if ( location ) {
            searchParams += `&location=${location}`
            
        }
        if ( fullTime === "true" ) {
            searchParams += `&full_time=${fullTime}`
            console.log(fullTime)
        }
        
        // console.log(`https://shrouded-cliffs-19232.herokuapp.com/https://jobs.github.com/positions.json?page=${page}${searchParams}`)
        fetch(`https://shrouded-cliffs-19232.herokuapp.com/https://jobs.github.com/positions.json?page=${page}${searchParams}`)
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