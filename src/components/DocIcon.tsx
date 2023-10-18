import React from "react";

interface DocIconProps {
  width?: number;
  height?: number;
  additionalClasses?: string;
}

const DocIcon = ({
  width = 10,
  height = 10,
  additionalClasses,
}: DocIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#2096F3"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#fff"
      // There is a bug here
      // The icon on the login page is not respecting the width and height passed in and growing to be way too big
      // Initially, the height and width is correct but after time, the icon blows up in size
      // No idea why
      // Placed max-h and max-w values to see if that solves the problem
      className={`w-${width} h-${height} max-h-48 max-w-48 ${additionalClasses}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
};

export default DocIcon;
