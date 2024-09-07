import React from 'react';
type Props = {
  project: {
    id: number;
    image: string;
    url: string;
  };
};
const ProjectCard = ({project}:Props) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
