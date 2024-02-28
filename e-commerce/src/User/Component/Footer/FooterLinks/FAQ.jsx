import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,


  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',

  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',

}));

export default function FAQ() {
  const faqRef = React.createRef();
  useEffect(() => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [faqRef]);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Navbar />
      <div ref={faqRef} className='p-10'>
        <div><h1 className='font-bold mb-3'>Frequently Asked Questions</h1>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept major credit and debit cards, including Visa, MasterCard, American Express,
                and Discover. We also offer PayPal as a payment option for added convenience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>How can I track my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can easily track your order by logging into your account and navigating to the "Order History" section.
                There, you'll find real-time updates on the status of your shipment.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography> What is your return policy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our return policy allows you to return items within 30 days of the delivery date.
                Please make sure the product is unused, in its original packaging, and accompanied by a receipt or proof of purchase.
                You can initiate a return through your account or by contacting our customer support team.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>How long does it take for my order to arrive?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Shipping times can vary based on your location and the product's availability.
                We aim to process and ship orders within 1-2 business days.
                You can check estimated delivery times at the checkout before completing your purchase.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography>Can I change or cancel my order after it's placed?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We understand that plans can change. You can request order changes or cancellations within 24 hours of
                placing your order by contacting our customer support team.
                After that, we'll do our best to accommodate your request, but it may not always be possible.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography>Are my personal and payment details secure on your website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we take the security of your information seriously.
                Our website uses SSL encryption to protect your personal and payment details.
                Additionally, we adhere to strict data protection and privacy policies to ensure your information is safe.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography>What should I do if I receive a damaged or defective product?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We apologize for any inconvenience. Please contact our customer support team within 7 days of
                receiving the damaged or defective item, and we will arrange for a replacement or refund, as appropriate.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
              <Typography>How can I contact your customer support team?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can reach our customer support team through our "Contact Us" page on the website
                . We provide email and phone support during our business hours, and we strive to respond to inquiries promptly.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>
      <Footer />
    </div>

  );

}
