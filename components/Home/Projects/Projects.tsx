import SectionHeading from '@/components/Helper/SectionHeading';
import { projectData } from '@/Data/data';
import React from 'react';
// import ProjectCard from './ProjectCard';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center mt-20 mx-auto w-4/5" id="projects">
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-blue-950 p-6  rounded-lg hover:scale-105 transition-all duration-300"
            >
              {/* <ProjectCard project={project} /> */}
              
              <Link href={project.url} target="_blank">
                <Image src={project.image} width={300} height={200} alt="project" className='w-full' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
