
// src/pages/About.jsx
import React from 'react';

const teamMembers = [
  { name: 'Naveen', role: 'Full Stack Developer', bio: 'Skilled in both frontend and backend technologies, ensuring seamless integration.' },
  { name: 'Kusuma', role: 'Full Stack Developer', bio: 'Passionate about delivering end-to-end solutions for web applications.' },
  { name: 'Muskan', role: 'UI/UX Designer', bio: 'Creative in designing user-friendly and visually appealing interfaces.' },
  { name: 'Srija', role: 'Frontend Developer', bio: 'Focuses on building responsive and dynamic web pages with attention to detail.' },
];

const About = () => {
  return (
    <div className="p-8  min-h-screen">
      {/* <h1 className="text-4xl font-bold text-center mb-8">About Our Team</h1> */}
      {/* <p className="text-center mb-12 text-gray-500"> */}
      {/*   Meet our talented team, each bringing unique skills to build a remarkable project. */}
      {/* </p> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {/*   {teamMembers.map((member, index) => ( */}
      {/*     <div key={index} className="p-6 bg-transparent border-gray-700  border rounded-lg shadow-lg text-center"> */}
      {/*       <h2 className="text-2xl font-semibold text-gray-100">{member.name}</h2> */}
      {/*       <p className="text-gray-300">{member.role}</p> */}
      {/*       <p className="mt-4 text-gray-400">{member.bio}</p> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
    </div>
  );
};

export default About;
