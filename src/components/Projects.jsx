import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import notebridgeImg from "../assets/notebridge.png";
import mlImg from "../assets/ml.jpg";
import dataImg from "../assets/data-analysis.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 md:pr-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#3b3c45]">Projects</h1>
      <p className="text-center text-xl py-8 text-[#3b3c45]">
        A collection of highlighted projects showcasing diverse skills and technologies.
      </p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProjectItem
          link="https://github.com/anlsen/Election_Sentiment_and_Popularity_Analysis_In_Turkiye"
          img={notebridgeImg}
          title="NoteBridge Web Application"
        />
        <ProjectItem
          link="https://github.com/anlsen/NoteBridge-Web-App"
          img={dataImg}
          title="Data Sentiment Analysis on Elections 2023"
        />
        <ProjectItem
          link="https://github.com/anlsen/CS412-MachineLearning-TermProject"
          img={mlImg}
          title="Homework Score Predictor Model"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
