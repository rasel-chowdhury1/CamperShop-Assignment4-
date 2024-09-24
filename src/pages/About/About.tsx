import  { useEffect, useState } from "react";
import {  Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { ava1, ava2, ava3, bannerImgOne } from "../../assets/images";



const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      bio: 'John leads the team with a passion for innovation and customer service.',
      photo: ava1, // Placeholder image path
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Jane is the brain behind all the technical solutions at our company.',
      photo: ava2,
    },
    {
      name: 'John Doe',
      position: 'CEO',
      bio: 'John leads the team with a passion for innovation and customer service.',
      photo: ava3, // Placeholder image path
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      {/* Contact Information */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-lg">Phone: +1 (234) 567-890</p>
          <p className="text-lg">Email: info@campersshop.com</p>
          <p className="text-lg">Address: 1234 Campers Road, Mountain View, CA</p>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508931!2d144.9537363153157!3d-37.81627917975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57750a2649b7b59!2sGoogle!5e0!3m2!1sen!2sus!4v1633058503065!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              title="Shop Location"
            ></iframe>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-8 h-8 fill-current text-blue-600 hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22.676 0H1.324C.594 0 0 .593 0 1.324v21.352C0 23.406.594 24 1.324 24h11.51v-9.294H9.605v-3.63h3.229V8.41c0-3.198 1.956-4.936 4.812-4.936 1.37 0 2.548.102 2.89.148v3.356h-1.984c-1.556 0-1.857.738-1.857 1.82v2.385h3.698l-.483 3.63h-3.215V24h6.302c.73 0 1.324-.594 1.324-1.324V1.324C24 .593 23.406 0 22.676 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-8 h-8 fill-current text-blue-400 hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* Twitter Icon */}
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.92 4.92 0 0 0 2.163-2.723 9.872 9.872 0 0 1-3.127 1.196A4.92 4.92 0 0 0 16.616 3c-2.723 0-4.92 2.197-4.92 4.92 0 .386.045.764.13 1.125-4.09-.206-7.719-2.165-10.141-5.14-.425.725-.668 1.565-.668 2.475 0 1.71.87 3.213 2.189 4.096a4.904 4.904 0 0 1-2.23-.616v.061c0 2.385 1.697 4.375 3.946 4.826a4.935 4.935 0 0 1-2.224.084c.627 1.956 2.445 3.377 4.597 3.418a9.87 9.87 0 0 1-6.102 2.104c-.397 0-.787-.023-1.175-.069a13.93 13.93 0 0 0 7.548 2.211c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.015-.637A9.93 9.93 0 0 0 24 4.59z" />
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            At Campers Shop, our mission is to provide the highest quality camping gear to outdoor enthusiasts while promoting sustainability and respect for nature.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8">Meet Our Team</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
                <p className="mt-2 text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
