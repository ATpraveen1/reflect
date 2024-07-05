import React from "react";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
// import HelmetWrapper from '../../HelmetWrapper'

const Courses = ({image, categoryData}) => {
  
  return (
    <>
      {/* <HelmetWrapper
        title={categoryData.title&"- Reflect Skin & Hair Clinic"}
        description="Discover our advanced skin treatments at Reflect Skin and Hair Clinic in Coimbatore. Our experienced dermatologists offer personalized solutions for various skin conditions, ensuring optimal skin health."
      /> */}
      <Header />
      <PageBanner image={image}  />
      <div className="nav-tab-wrapper tabs section-padding-bottom">
        <div className="container">
          <FilteredCourse
            classNameForTabTwo={
              "grid  grid-cols-1 gap-[30px]"
            }
            categoryData={categoryData}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
