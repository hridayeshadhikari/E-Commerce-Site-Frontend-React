import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; 
import { useLocation } from 'react-router-dom';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';

const steps = ['Checkout', 'Address Details', 'Order Summary', 'Payment'];

export default function Checkout() {
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
        <div className='px-10 lg:px-20 pt-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                
                <div className='pt-[5rem]'>
                    {step == 2 ? <DeliveryAddress handleNext={handleNext}/> : <OrderSummary />}
                </div>
            </Box>
        </div>
    );
}
