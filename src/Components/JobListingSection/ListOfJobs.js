import React from 'react'
import { connect } from 'react-redux'
import { 
    JobListingCollapsedContainer, 
    JobListingCollapsedH2, 
    JobListingCollapsedContainerChild,
    JobListingCollapsedCompanyInfo,
    JobListingcollapsedImageContainer,
    JobListingcollapsedImage
} from './JobListingCollapsedElement'

const ListOfJobs = props => {
    const {jobs} = props
    return (
        <>
            {jobs.map(job => {
                console.log(job)
                return (
                <JobListingCollapsedContainer key={job.companyName}>
                    <JobListingcollapsedImageContainer >
                            <JobListingcollapsedImage src={job.companyLogo} />
                        </JobListingcollapsedImageContainer>
                    <JobListingCollapsedContainerChild>
                        <JobListingCollapsedH2>{job.jobTitle}</JobListingCollapsedH2>
                        <JobListingCollapsedCompanyInfo>{job.companyName}</JobListingCollapsedCompanyInfo>
                        <JobListingCollapsedCompanyInfo>{job.minJobSalary}-{job.maxJobSalary}</JobListingCollapsedCompanyInfo>
                        <JobListingCollapsedCompanyInfo>{job.jobLocation}</JobListingCollapsedCompanyInfo>
                        {/* <div>Job Post Text: {job.jobPostText}</div> */}
                    </JobListingCollapsedContainerChild>
                    <JobListingCollapsedContainerChild >
                        {/* {job.skillTags.map(tag => {
                            return(
                                <h2>{tag}</h2>
                            )
                        })} */}
                        <h2>Full Stack | React | Engineer | Dev | Javascript | Front End</h2>
                    </JobListingCollapsedContainerChild>
                </JobListingCollapsedContainer>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs.jobs
    }
}

export default connect(mapStateToProps, {})(ListOfJobs);