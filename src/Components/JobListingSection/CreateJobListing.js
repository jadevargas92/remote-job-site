import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { addJob } from '../../actions/addJobs'
import { Link, useHistory } from 'react-router-dom';
import { CreateJobListingForm, CreateJobListingFormContainer, CreateJobListingFormLeft, CreateJobListingFormRight, FormButton, FormInputs, FormLabel, ImageInput} from './CreateJobListingElements';
// import allJobListingsData from '../AllJobsListingsData'
import Navbar from '../Navbar'

const CreateJobListing = (props) => {
    const { push } = useHistory();

    const initialState = {
        id:props.jobs.length,
        companyName: '',
        jobTitle: '',
        jobPostText: '',
        minJobSalary: '',
        jobLocation: '',
        companyLogo: ''
    }

    const [job, setJob] = useState(initialState)
    // const {allJobs, setAllJobs} = props
    // const [companyName, setCompanyName, handleCompanyName] = useInput('')
    // const [jobTitle, setJobTitle, handleJobTitle] = useInput('')
    // const [jobPostText, setJobPostText, handleJobPostText] = useInput('')
    // const [allJobs, setAllJobs] = useState([allJobListingsData])
    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e) => {
        setJob({
            ...job,
            companyLogo: URL.createObjectURL(e.target.files[0])
        })
    } 

    const submitHandler = e => {
        e.preventDefault();
        props.addJob(job)
        setJob(initialState)
        push('/')
        // setAllJobs([...allJobs, {
        //     id: Date.now(), 
        //     companyName: companyName,
        //     jobTitle: jobTitle,
        //     jobPostText: jobPostText
        // }])
        // setCompanyName('')
        // setJobTitle('')
        // setJobPostText('')
    }
    const {companyName, jobTitle, jobPostText, jobSalary, jobLocation} = job
    return (
        // <JobListingContainer isOpen={isOpen}>
        <>
        <Navbar />
            <CreateJobListingFormContainer>
                <CreateJobListingFormLeft>
                    <h2>Test</h2>
                </CreateJobListingFormLeft>
                <CreateJobListingFormRight>
                <CreateJobListingForm onSubmit={submitHandler}>
                    <FormLabel htmlFor='companyName'>Enter Your Company Name</FormLabel>
                    <FormInputs
                        className='companyName'
                        id='companyName'
                        name='companyName'
                        onChange={handleChange}
                        placeholder='Company Name'
                        type='text'
                        value={companyName}
                    />
                    <br />
                    <FormLabel htmlFor='jobTitle'>Enter The Job Title</FormLabel>
                    <FormInputs
                        className='jobTitle'
                        id='jobTitle'
                        name='jobTitle'
                        onChange={handleChange}
                        placeholder='Job Title'
                        type='text'
                        value={jobTitle}
                    />
                    <br />
                    <FormLabel htmlFor='minJobSalary'>Enter a Minimum Job Salary:</FormLabel>
                    <select id="minJobSalary" name="minJobSalary" onChange={handleChange}>
                        <option value="--Select--">--Select--</option>
                        <option value="$0">$0</option>
                        <option value="$10k">$10,000</option>
                        <option value="$20k">$20,000</option>
                        <option value="$30k">$30,000</option>
                        <option value="$40k">$40,000</option>
                        <option value="$50k">$50,000</option>
                        <option value="$60k">$60,000</option>
                        <option value="$70k">$70,000</option>
                        <option value="$80k">$80,000</option>
                        <option value="$90k">$90,000</option>
                        <option value="$100k">$100,000</option>
                        <option value="$110k">$110,000</option>
                        <option value="$120k">$120,000</option>
                        <option value="$130k">$130,000</option>
                        <option value="$140k">$140,000</option>
                        <option value="$150k">$150,000</option>
                        <option value="$160k">$160,000</option>
                        <option value="$170k">$170,000</option>
                        <option value="$180k">$180,000</option>
                        <option value="$190k">$190,000</option>
                        <option value="$200k +">$200,000 +</option>
                    </select>
                    <br />
                    <FormLabel htmlFor='maxJobSalary'>Enter a Maximum Job Salary:</FormLabel>
                    <select id="maxJobSalary" name="maxJobSalary" onChange={handleChange}>
                        <option value="--Select--">--Select--</option>
                        <option value="$0">$0</option>
                        <option value="$10k">$10,000</option>
                        <option value="$20k">$20,000</option>
                        <option value="$30k">$30,000</option>
                        <option value="$40k">$40,000</option>
                        <option value="$50k">$50,000</option>
                        <option value="$60k">$60,000</option>
                        <option value="$70k">$70,000</option>
                        <option value="$80k">$80,000</option>
                        <option value="$90k">$90,000</option>
                        <option value="$100k">$100,000</option>
                        <option value="$110k">$110,000</option>
                        <option value="$120k">$120,000</option>
                        <option value="$130k">$130,000</option>
                        <option value="$140k">$140,000</option>
                        <option value="$150k">$150,000</option>
                        <option value="$160k">$160,000</option>
                        <option value="$170k">$170,000</option>
                        <option value="$180k">$180,000</option>
                        <option value="$190k">$190,000</option>
                        <option value="$200k +">$200,000 +</option>
                    </select>
                    {/* <input
                        className='jobSalary'
                        id='jobSalary'
                        name='jobSalary'
                        onChange={handleChange}
                        placeholder='Job Salary'
                        type='text'
                        value={jobSalary}
                    /> */}
                    <br />
                    <FormLabel htmlFor='jobLocation'>Enter a Job Location</FormLabel>
                    <FormInputs
                        className='jobLocation'
                        id='jobLocation'
                        name='jobLocation'
                        onChange={handleChange}
                        placeholder='Job Location'
                        type='text'
                        value={jobLocation}
                    />
                    <br />
                    <FormLabel for="companyLogo">Add A Company Logo:</FormLabel>
                    <ImageInput type="file"
                        id="companyLogo" name="companyLogo"
                        accept="image/png, image/jpeg" onChange={handleImageChange} />
                    <br />
                    <FormLabel htmlFor='jobPostText'>Enter a Job Description</FormLabel>
                    <textarea
                        className='jobPostText'
                        id='jobPostText'
                        name='jobPostText'
                        onChange={handleChange}
                        placeholder='Job Post Description'
                        value={jobPostText}
                    />
                    <br />
                    <FormButton type='submit'>Submit</FormButton>
                    <br />
                </CreateJobListingForm>
                </CreateJobListingFormRight>
            </CreateJobListingFormContainer>
        </>
    )
}

const mapStateTopProps = state => {
    return {
        jobs: state.jobs.jobs
    }
}

export default connect(mapStateTopProps, {addJob})(CreateJobListing);