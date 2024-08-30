import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Static array of blog data
const blogs = [
  {
    id: 1,
    title: "My Freshman Year at University",
    image:
      "https://i.pinimg.com/736x/71/4b/df/714bdf978d5ba92ab2f8b92ac01be892.jpg",
    excerpt:
      "Learn about computer fundamentals to understand and explore more about computer components.",
    date: "August 28, 2024",
  },
  {
    id: 2,
    title: "My Sophomore Year at University",
    image:
      "https://i.pinimg.com/736x/6e/1c/2f/6e1c2fc36350fbbc3af973604e15d04d.jpg",
    excerpt:
      "A deep dive into the differences between Front-End and Back-End development, and when to use each.",
    date: "August 25, 2024",
  },
  {
    id: 3,
    title: "My Senior Year at University",
    image:
      "https://i.pinimg.com/736x/2e/a6/21/2ea62104aa00307afa6174e9624144f0.jpg",
    excerpt:
      "Get started with UX/UI concepts and learn how to improve your design and coding skills.",
    date: "August 20, 2024",
  },
  {
    id: 4,
    title: "My CSTAD Foundation Course",
    image:
      "https://i.pinimg.com/736x/8e/09/91/8e0991f86be92bfa58aff359bf4741b9.jpg",
    excerpt: "CSTAD was giving me the opportunity to expore more about IT.",
    date: "August 20, 2024",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-blue-500 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
              <div className="bg-blue-500 text-white text-sm p-4 text-right">
                {blog.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
