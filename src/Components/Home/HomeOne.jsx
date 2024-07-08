import React, { useEffect } from "react";
import Banner from "../Banner";
import CourseSection from "../HomeThreeComponents/CourseSection";
import Footer from "../Footer";
import Header from "../Header";
import Team from "../HomeThreeComponents/Team";
import Intro from "../Intro";
import BLogStandard from "../Pages/BLogStandard";
import HelmetWrapper from '../../HelmetWrapper';
import { Helmet } from 'react-helmet';

const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const title = "Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic";
  const description = "Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!";

  console.log("2", title, description);

  return (
    <>
      <HelmetWrapper
        title="Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic"
        description="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!"
      />
      {/* <Helmet>
        <title>Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic</title>
        <meta name="description" content="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!" />
      </Helmet> */}
      <Header />
      <Banner />
      <Intro />
      <CourseSection />
      <BLogStandard />
      <Team />
      <Footer />
    </>
  );
};

export default HomeOne;
