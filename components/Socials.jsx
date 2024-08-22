"use client";

import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
  RiDiscordFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/ayaabidghozy13",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/aya-abid-ba4139285/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://x.com/ayaabidghozy13",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.instagram.com/ayaabid7?igsh=MXQxdzJxNXN5aWxzcg== ",
    name: <RiInstagramFill />,
  },

  {
    path: "https://discord.com/users/:.baskouta",
    name: <RiDiscordFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            key={index}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
