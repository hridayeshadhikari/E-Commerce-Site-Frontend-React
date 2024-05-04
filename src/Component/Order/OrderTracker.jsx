import React from "react";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import { Box } from "@mui/material";

const steps = ["Order Placed", "Confirmed", "Shipped", "Delivered"];

export default function OrderTraker({ activeStep }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{ color: "#9155FD", fontSize: "44px" }}
              className={``}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
