import React from 'react';
import Projectcontent from "../sub/Projectcontent";

const Project = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className='absolute inset-0 z-[-10]'>
        <video
          className='w-full h-full object-cover'
          preload='auto'
          playsInline
          loop
          muted
          autoPlay
          src="/encryption.webm"
        />
      </div>

      <section id="projects" className="relative z-10">
        <div className='flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
            My Projects
          </h1>
          <div className='w-full flex flex-col md:flex-row gap-12'>
            <Projectcontent
              src="/cve-website.png"
              layout="responsive"
              objectFit="cover"
              title="CVE Table Website"
              description="CVE Explorer is a web application that allows users to explore and visualize Common Vulnerabilities and Exposures (CVE) data retrieved from the National Vulnerability Database (NVD). Users can filter CVEs based on various parameters and view them in a user-friendly interface."
            />
            <Projectcontent
              src="/SpaceWebsite1.png"
              title="Emotion Detector With CNN"
              description="A CNN-powered emotion detector for real-time emotion recognition. This project implements an Emotion Detection system using Convolutional Neural Networks (CNNs) to recognize facial expressions in real-time. The model is trained on a dataset of facial expressions encompassing seven basic emotions."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
