import styled from 'styled-components'

export const CreateJobListingFormContainer = styled.div`
    margin: 10rem auto;
    width: 80vw;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 100vh;
    display: flex;
    color: #fff;
   
`

export const CreateJobListingFormLeft = styled.div`
    background: linear-gradient(
        90deg,
        rgb(39, 176, 255) 0%,
        rgb(0, 232, 236) 100%
    );
    border-radius: 10px 0 0 10px;
    position: relative;
    width: 50%;
`
export const CreateJobListingFormRight = styled.div`
    border-radius: 0 10px 10px 0;
    position: relative;
    background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
    width: 100%;
`

export const CreateJobListingForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2rem;
`

export const FormButton = styled.button`
    width: 80%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: linear-gradient(
      90deg,
      rgb(39, 176, 255) 0%,
      rgb(0, 232, 236) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
        background: linear-gradient(
          90deg,
          rgb(39, 143, 255) 0%,
          rgb(12, 99, 250) 100%
        );
        transition: all 0.2s ease-out;
      }
`

export const FormInputs = styled.input`
    margin-bottom: 0.5rem;
    width: 95%;
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    border: none;
    
`
export const FormLabel = styled.label`
    
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #fff;
`

export const ImageInput = styled.input`
      padding: 0;
      align-item: start;

`
  
//   .close-btn {
//     position: absolute;
//     top: 2%;
//     right: 3%;
//     font-size: 1.5rem;
//     z-index: 1;
//     color: #fff;
//     cursor: pointer;
//   }
  
  
//   .form-img {
//     width: 80%;
//     height: 80%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
  
//   .form-img-2 {
//     width: 60%;
//     height: 60%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
  
//   .form-success {
//     text-align: center;
//     font-size: 24px;
//     margin-top: 80px;
//     color: #fff;
//   }
  
//   .form h1 {
//     font-size: 1rem;
//     text-align: start;
//     width: 80%;
//     margin-bottom: 1rem;
//     color: #fff;
//   }
  
//   .form-inputs p {
//     font-size: 0.8rem;
//     margin-top: 0.5rem;
//     color: #f00e0e;
//   }
  
//   .form-label {
//     display: inline-block;
//     font-size: 0.8rem;
//     margin-bottom: 6px;
//     color: #fff;
//   }
  
//   .form-input::placeholder {
//     color: #595959;
//     font-size: 12px;
//   }
  
  
//   .form-input-login {
//     font-size: 0.8rem;
//     margin-top: 10px;
//     color: #fff;
//     width: 80%;
//     text-align: center;
//   }
  
//   .form-input-login a {
//     text-decoration: none;
//     color: #27cdff;
//     font-weight: 600;
//   }