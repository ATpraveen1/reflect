import React, { useEffect } from "react";
import Banner from "../Banner";
import CourseSection from "../HomeThreeComponents/CourseSection";
import Footer from "../Footer";
import Header from "../Header";
import Team from "../HomeThreeComponents/Team";
import Intro from "../Intro";
import BLogStandard from "../Pages/BLogStandard";
import HelmetWrapper from '../../HelmetWrapper';

const HomeOne = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <HelmetWrapper
        title="Home | Reflect Clinic "
        description="Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!"
      />
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
