import React from 'react';
import { FloatingDock } from './floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandBlogger,
} from '@tabler/icons-react';

export function FloatingDockDemo() {
  const links = [
    {
      title: 'Linked In',
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.linkedin.com/in/tanishq-j-913152288/',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://github.com/TJ-2004',
    },
    {
      title: 'Twitter',
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://twitter.com/tanishqjais9756',
    },
    {
      title: 'Instagram',
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://www.instagram.com/tanishq6638/',
    },

    {
      title: 'Blog',
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: 'https://my-blog-wm7g.onrender.com/',
    },
  ];
  return (
    <div className="flex items-center justify-center h-[7rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
