import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

// Sample blog data
const blogDetails = [
  {
    id: 1,
    title: "My Freshman at University",
    image:
      "https://i.pinimg.com/736x/71/4b/df/714bdf978d5ba92ab2f8b92ac01be892.jpg",
    content:
      "Learn about computer fundamentals to understand and explore more about computer components. This blog will cover the basics of computer architecture, including CPU, memory, storage, and peripherals.",
    date: "August 28, 2024",
  },
  {
    id: 2,
    title: "My Sophomore at University",
    image:
      "https://i.pinimg.com/736x/6e/1c/2f/6e1c2fc36350fbbc3af973604e15d04d.jpg",
    content:
      "A deep dive into the differences between Front-End and Back-End, and when to use each. This blog will provide an overview of web development roles, technologies used in front-end and back-end development, and how they interact.",
    date: "August 25, 2024",
  },
  {
    id: 3,
    title: "My Seniors at University",
    image:
      "https://i.pinimg.com/736x/2e/a6/21/2ea62104aa00307afa6174e9624144f0.jpg",
    content:
      "Get started with UX/UI concepts and learn how to improve your code. This blog will discuss the principles of user experience and user interface design, including best practices and common pitfalls.",
    date: "August 20, 2024",
  },
  {
    id: 4,
    title: "My CSTAD Foundation Course",
    image:
      "https://i.pinimg.com/736x/8e/09/91/8e0991f86be92bfa58aff359bf4741b9.jpg",
    content: "CSTAD was giving me the opportunity to expore more about IT.",
    date: "August 20, 2024",
  },
];

const BlogsDetail = () => {
  const { id } = useParams();
  const blog = blogDetails.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center text-red-500">Blog not found!</p>;

  return (
    <section className="py-16   " data-aos="fade-left">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link
            to="/blogs"
            className="text-white hover:text-blue-800 flex items-center"
          >
            <HiOutlineArrowLeft className="text-2xl mr-2" />
          </Link>
        </div>

        {/* Blog Content */}
        <div className="flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-96 object-contain m-10 shadow-lg p-12"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.date}</p>
            <p className="text-gray-800 leading-relaxed">{blog.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetail;
