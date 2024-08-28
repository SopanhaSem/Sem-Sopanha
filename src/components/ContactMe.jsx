import React from "react";

function ContactMe() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          <h2 className="text-5xl font-bold text-white" data-aos="fade-up">
            Contact Me
          </h2>
          <div
            className="mt-4 border-t-2 border-blue-300 w-20 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>
        <p
          className="text-center text-white text-xl mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Feel free to reach out if you have any questions or if you'd like to
          work together!
        </p>
        <div
          className="mt-8 max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
                data-aos="fade-right"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
                data-aos="fade-right"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
                data-aos="fade-right"
                data-aos-delay="600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
                data-aos="fade-right"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                required
                data-aos="fade-right"
                data-aos-delay="700"
              ></textarea>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button
                type="submit"
                className="px-4 py-2  text-white text-2xl font-semibold rounded-md shadow "
              >
                Send Message
              </button>
              <div
                className=" border-t-2 border-blue-300 w-20 mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
