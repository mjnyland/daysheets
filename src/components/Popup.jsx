import React, {useState} from 'react'
import styles from "../styles";
import { avatar } from "../assets";
import { useForm } from "react-hook-form";


import FormCalendly from './FormCalendly';


const Popup = () => {


    const [formStep, setFormStep] = useState(0);

    const emailValidation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const completeFormStep = () => {
        if ( formStep === 0 ) {

            const email = document.getElementById('Email').value;

            if ( emailValidation(email) ) {
                setFormStep(cur => cur + 1);
            } else {
                alert('Please enter a valid email address');
            }
            

        } else {
            setFormStep(cur => cur + 1);
        }
    };



    const jumpToSuccess = () => {
        // Retrieve the email input value
        const emailInput = document.getElementById('Email');
        const email = emailInput.value;
      
        // Submit the email to HubSpot
        submitToHubSpot(email);
      
        // Move to the success step
        setFormStep(3);
      };




    function submitToHubSpot(email) {
        const hubspotFormId = '53535f36-e385-46e5-b61c-7473bb78cb07';
        const hubspotPortalId = '40185524';
      
        const formValues = [
          {
            name: 'email',
            value: email,
          },
          // Add other form fields as needed
        ];
      
        fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: formValues,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Form submitted successfully:', data);
            // Handle successful form submission here if needed
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
            // Handle form submission error here if needed
          });
      }






  return (
    <div className='h-[100vh] w-[100vw] top-0 bottom-0 bg-dimBlack absolute z-30 flex items-center'>

        <div className="flex flex-col md:flex-row mx-auto">
            

                
                <div className=' flex flex-row gap-[16px]'>
                    
                    <form id="getStarted">

                        
                        {formStep === 0 && (
                        <section className={`${styles.contentBox}`}>

                            <div className='flex flex-col px-[16px] lg:flex-row'>
                                <div className='flex flex-col justify-center bg-blue px-[32px] py-[32px] max-w-[400px]'>
                                
                                    <p className='text-white py-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                
                                    <div className='flex flex-row items-center gap-[8px]'>
                                
                                        <img src={avatar} alt="" className='h-[64px] w-[64px]'/>
                                
                                        <div>
                                            <p>Tour Manager</p>
                                            <p>Beyonce</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='bg-white px-[32px] py-[32px] max-w-[400px]'>
                                    <h3 className={`${styles.h3} text-darkBlue`}>Get started with Daysheets</h3>
                                    <p className='text-darkBlue pb-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="flex flex-col">
                                            <label className={`${styles.body}`}>Email:</label>
                                            <input type="text" className='h-[32px] rounded-md pl-[12px] bg-gray text-darkBlue' id="Email" name="Email"/>
                                        </div>
                                        <button className={`${styles.button}`} onClick={completeFormStep}>Next</button>
                                    </div>
                                </div>
                            </div>

                        </section>
                        )}

                        {formStep === 1 && (
                        <section className={`${styles.contentBox}`}>
                            <div className='flex flex-col px-[16px] lg:flex-row'>
                                <div className='flex flex-col justify-center bg-blue px-[32px] py-[32px] max-w-[400px]'>
                                
                                    <p className='text-white py-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                
                                    <div className='flex flex-row items-center gap-[8px]'>
                                
                                        <img src={avatar} alt="" className='h-[64px] w-[64px]'/>
                                
                                        <div>
                                            <p>Tour Manager</p>
                                            <p>Beyonce</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className='bg-white px-[32px] py-[32px] max-w-[400px]'>
                                    <h3 className={`${styles.h3} text-darkBlue`}>Get started with Daysheets</h3>
                                    <p className='text-darkBlue pb-[64px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                
                                    <div className="flex flex-col gap-[8px]">
                                        <button className={`${styles.button}`} onClick={jumpToSuccess}>Download Daysheets</button>
                                        <button className={`${styles.button} bg-darkBlue`} onClick={completeFormStep}>Schedule a demo</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        )}

                        {formStep === 2 && (
                        <section className={`${styles.contentBox}`}>
                            

                            <FormCalendly />




                        </section>
                        )}

                        {formStep === 3 && (
                        <section className={`${styles.contentBox} w-full`}>
                            <h3 className={`${styles.h3} text-darkBlue bg-white`}>Success!</h3>
                            <div className="flex flex-col">
                            </div>
                        </section>
                        )}

                    </form>
                    
                </div>

            
        </div>

    </div>
  )
}

export default Popup

/*
Hubspot Form
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "40185524",
    formId: "53535f36-e385-46e5-b61c-7473bb78cb07"
  });
</script>
*/