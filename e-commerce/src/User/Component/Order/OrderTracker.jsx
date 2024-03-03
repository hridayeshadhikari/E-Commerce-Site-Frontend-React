import React from 'react'
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import { useLocation } from 'react-router-dom';
import Step from '@mui/material/Step';

const steps = ['Ordered', 'Confirmed', 'Shipped', 'Delivered'];

const OrderTracker = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    const step = querySearch.get("step")

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  return (
    <div className='w-full'>
        <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
      
    </div>
  )
}

export default OrderTracker
