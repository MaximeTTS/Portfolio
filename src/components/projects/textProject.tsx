import React from "react";

interface Props {
  title: string;
  title2: string;
  title3: string;
  description: string;
  description2: string;
  points: string[];
}

function TextProject({ title, title2, title3, description, description2, points }: Props) {
  return (
    <div className="mt-4 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <h3 className="mt-6 text-lg font-bold">{title2}</h3>
      <p className="mt-2">{description2}</p>
      <h3 className="mt-6 text-lg font-bold">{title3}</h3>
      <ul className="custom-list-disc mb-3 mt-2 list-inside list-disc">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextProject;
