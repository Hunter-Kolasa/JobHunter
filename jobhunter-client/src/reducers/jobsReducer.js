const initialState = {
    jobs: [],
    loading: true
}

const jobsReducer = (state={initialState}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default jobsReducer;