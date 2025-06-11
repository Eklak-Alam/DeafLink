"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaLinkedin, FaMapPin, FaGlobe, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

export function TeamCards() {
  const teamMembers = [
    {
      name: "Hanu Shashwat",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years of industry experience",
      destiny: "San Francisco, CA",
      email: "hanu@example.com",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEoa6tbC-LEUA/profile-displayphoto-shrink_400_400/B4DZaiDIkjHwAg-/0/1746475453430?e=1755129600&v=beta&t=nLHr4WlK0bGssTGQtC3W-6Ovyxo7zNg5LOdoLmM6bfw",
      linkedin: "https://www.linkedin.com/in/hanushashwat/"
    },
    {
      name: "Abhijeet Singh",
      role: "CTO",
      description: "Tech innovator specializing in AI and cloud solutions",
      destiny: "New York, NY",
      email: "sarah@example.com",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEYdfLJ_kJjbA/profile-displayphoto-shrink_400_400/B56ZdI28FAHoAg-/0/1749274053652?e=1755129600&v=beta&t=tBKGJdUNqP0f4On4bS6cyhxOXk4Jq0B8sHzk6JWjjj4",
      linkedin: "https://www.linkedin.com/in/abhijeet-singh-5a0202302/"
    },
    {
      name: "Eklak Alam",
      role: "Web Developer and designer",
      description: "Full-stack wizard with a passion for clean code",
      destiny: "Austin, TX",
      email: "eklak420@gmail.com",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGSILeCwaGlmA/profile-displayphoto-shrink_400_400/B4DZVakq_gG8Ag-/0/1740981320114?e=1755129600&v=beta&t=CmOgQ9ELiSg5xbENGSFyJhCv7hfSjd7SK7Oe02FgL9w",
      linkedin: "https://www.linkedin.com/in/eklak-alam-40ba632b5/"
    }
  ];

  return (
    <div className="pb-16">
      {/* Title Section */}
      <div className="mb-16 max-w-4xl mx-auto px-4">
        <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-3xl p-8 border transition-all duration-300">
          <div className="text-center">
            <CardItem
              translateZ={60}
              className="text-3xl md:text-6xl font-extrabold mb-6 sm:mb-2 text-white drop-shadow-lg"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
                Our Dream Team
              </span>
            </CardItem>
            <CardItem
              as="p"
              translateZ={40}
              className="text-sm md:text-xl max-w-3xl mx-auto text-amber-100 font-medium italic opacity-90"
            >
              "The strength of the team is each individual member. The strength of each member is the team."
            </CardItem>
            <CardItem
              translateZ={30}
              className="w-24 h-1.5 bg-amber-300 mx-auto mt-8 rounded-full"
            />
          </div>
        </CardBody>
      </CardContainer>  
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 gap-8 px-4 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col">
              {/* Profile Image */}
              <CardItem translateZ="100" className="w-full">
                <img
                  src={member.image}
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={member.name}
                />
              </CardItem>

              {/* Profile Info */}
              <div className="flex-1 mt-4">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white text-center"
                >
                  {member.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-blue-600 text-lg text-center mt-2 dark:text-blue-400 font-medium"
                >
                  {member.role}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-neutral-500 text-sm text-center mt-3 dark:text-neutral-300"
                >
                  {member.description}
                </CardItem>

                {/* Destiny/Contact Info */}
                <div className="mt-4 space-y-2">
                  <CardItem translateZ="30" className="flex items-center justify-center gap-2">
                    <FaMapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{member.destiny}</span>
                  </CardItem>
                  <CardItem translateZ="30" className="flex items-center justify-center gap-2">
                    <FaMailBulk className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{member.email}</span>
                  </CardItem>
                </div>
              </div>

              {/* LinkedIn Button */}
              <div className="mt-6 flex justify-center">
                <CardItem translateZ={20}>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}