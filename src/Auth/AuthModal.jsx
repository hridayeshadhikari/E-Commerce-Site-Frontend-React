import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useLocation } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            "@media (max-width: 1024px)": {
              width: "90%",
              height: "100%",
            },
          }}
        >
          {location.pathname === "/login" ? <Login /> : <Register />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
