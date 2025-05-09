// components/TeamSection.js
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "Praveen Somani",
    title: "Managing Director",
    image: "/assets/images/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif",
  },
  {
    name: "Raj Shomani",
    title: "Director",
    image: "/assets/images/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif",

  },
  {
    name: "Himanshu Shukla",
    title: "Co-founder and COO",
    image: "/assets/images/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif",

  },
  {
    name: "Abhishek Chandak",
    title: "Chief Revenue Officer",
    image: "/assets/images/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.avif",

  },
];

export default function TeamSection() {
  return (
    <div className="bg-[#f8f9fa] text-gray-800 py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-6/12">
          <h2 className="text-5xl font-bold text-[#28ad18] mb-6">
            Meet The Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-10">
            Discover the driving forces behind our commitment to sustainability. Meet our leadership team, spearheading our mission to revolutionize transportation for a greener future.
          </p>
          <button className="bg-[#28ad18] hover:bg-[#a21c27] text-white px-6 py-2 rounded transition duration-300 mb-12">
            Call to Action
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-center gap-5 hover:shadow-lg transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={54} // You can adjust width & height or use layout="intrinsic"
                height={40} // Adjust height based on your original image
                className="w-26"
              />
              <div>
                <h4 className="text-xl font-semibold text-[#4189c2]">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.title}</p>
                <FaLinkedinIn className="text-[#bd2330] mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
