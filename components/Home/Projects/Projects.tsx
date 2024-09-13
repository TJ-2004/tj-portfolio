import SectionHeading from '@/components/Helper/SectionHeading';
import { projectData } from '@/Data/data';
import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import ProjectCard from './ProjectCard';
import { ThreeDCardDemo } from './ThreeDCardDemo';

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      {/* Section Heading */}
      <SectionHeading>Projects</SectionHeading>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30  items-center mt-20 mx-auto w-4/5"
        id="projects"
      >
        {projectData.map((project) => {
          return (
            <div
              // data-aos="fade-up"
              // data-aos-delay={`${i * 150}`}
              // data-aos-anchor-placement="top-center"
              key={project.id}
              className="rounded-lg"
            >
              {/* <ProjectCard project={project} /> */}
              <ThreeDCardDemo project={project} />

              {/* <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  width={300}
                  height={200}
                  alt="project"
                  className="w-full"
                />
              </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
