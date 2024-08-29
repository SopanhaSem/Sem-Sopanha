import React from "react";

const EducationSection = () => {
  return (
    <section className="py-16 " data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white">Education</h2>
        <div className="mt-4 border-t-2 border-white w-20 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* University Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyPOjxjl0l0xUIdDF8JbrVgPN8W4Wh79jpEy1YQYAtagSfZKVuwKkpJRQcFvNIiy36lgwMn56dN4oBdNqmsxHzKZzdXm630fkiNwnSzwpsds_uetpWB6jAsCGSuAqUEFooGPftVy387jM/s1600/rupp.jpg"
              alt="University"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 mb-4">RUPP University</p>
              <p className="text-gray-800">Expected Graduation: 2025</p>
              <p className="text-gray-600 mt-4">
                Studied core subjects including algorithms, data structures,
                software engineering, and web development.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="list-disc list-inside text-gray-800">
                <li>Programming Languages: JavaScript, Python, Java</li>
                <li>Web Technologies: React, HTML, CSS</li>
                <li>Database Management: MySQL, Postgres</li>
                <li>Version Control: Git, GitHub</li>
                <li>
                  Software Development: Agile methodologies, Test-Driven
                  Development
                </li>
              </ul>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <ul className="list-disc list-inside text-gray-800">
                <li>
                  <strong>Portfolio Builder:</strong> Developed a personal
                  portfolio website using React and Tailwind CSS.
                </li>
                <li>
                  <strong>Ecomerce App:</strong> Built an app for shopping with
                  Flutter and Firebase.
                </li>
                <li>
                  <strong>Bank Api:</strong> Created a real-time api using
                  Spring.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
