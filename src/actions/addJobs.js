export const ADD_JOB = 'ADD_JOB'

export const addJob = (job) => {
    return({type:ADD_JOB, payload:job})
}