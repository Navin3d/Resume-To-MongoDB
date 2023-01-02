import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilesList from "../Components/ProfilesList";
import UploadPage from "../Components/UploadPage";
import ProfilePage from "../Components/ProfilePage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UploadPage />} exact={true} />
      <Route path="/profiles" element={<ProfilesList/>} />
      <Route path="/userprofile" element={<ProfilePage />} />
     
    </Routes>
  </BrowserRouter>
);

export default AppRouter