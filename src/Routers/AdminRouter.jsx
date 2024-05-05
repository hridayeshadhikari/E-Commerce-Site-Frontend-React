import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default AdminRouter;
