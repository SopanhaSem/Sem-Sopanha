import React from "react";
import CardEducation from "../components/EducationSection";
import LearningSpringSection from "../components/LearningSpringSection";
import FavoriteActivities from "../components/FavoriteActivities";

const Education = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="container">
        <LearningSpringSection />
        <FavoriteActivities />
        <CardEducation />
      </div>
    </div>
  );
};

export default Education;
