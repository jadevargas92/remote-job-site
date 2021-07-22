import styled from 'styled-components'

export const JobListingCollapsedContainer = styled.div`
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin: .5rem auto;
    height: 8rem;
    position: relative;
    z-index: 1;
    width: 60vw;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d6d6d6;
    }
`

export const JobListingCollapsedH2 = styled.h2`
    color: #27b0ff;
    font-size: 1.4rem;
    text-align: center;
    z-index: 3;
    

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({primary}) => (primary ? '#20b0e6' : '#0c85b3')};
        text-decoration: underline;
    }
`

export const JobListingCollapsedContainerChild = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 40%;
    align-items: flex-start;
    justify-content: center;
    height: 90%;
`

export const JobListingCollapsedCompanyInfo = styled.h3`
    font-size: 1rem;
    font-color: #FFF;
    padding: .2rem 0;
`

export const JobListingcollapsedImageContainer = styled.div`
    display: flex;
    width: 10%;
    height: 90%;

    margin-right: 2%;
    justify-content: center;
    align-items: center;
`
export const JobListingcollapsedImage = styled.img`
    width: 90%;
    height: 90%;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    -o-object-fit: cover;
    object-fit: cover;
`