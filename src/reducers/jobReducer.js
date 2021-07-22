import { ADD_JOB } from '../actions/addJobs'
import allJobListingsData from '../AllJobsListingsData'

const initialState = {
    jobs: allJobListingsData
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }

        default:
            return state;
    }
}

export default reducer;