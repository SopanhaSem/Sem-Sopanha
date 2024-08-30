import React from "react";

const activities = [
  {
    image:
      "https://i.pinimg.com/736x/18/65/71/186571d3134744f5e9bcc9a88fff75b0.jpg",
    title: "Coding",
    description: "I love solving problems and building applications.",
  },
  {
    image:
      "https://i.pinimg.com/736x/8c/02/4c/8c024c33e0d4d819fd53272b3545a094.jpg",
    title: "Research",
    description: "Exploring new topics and expanding my knowledge.",
  },
  {
    image:
      "https://i.pinimg.com/736x/01/42/48/0142486df4a74328344f82ccf7a45450.jpg",
    title: "Travel",
    description: "Traveling to new places and experiencing different cultures.",
  },
  {
    image:
      "https://i.pinimg.com/736x/2e/69/f4/2e69f44d769e65157323a29977c80fe7.jpg",
    title: "Study",
    description: "Continuous learning and growth through study.",
  },
  {
    image:
      "https://i.pinimg.com/736x/b0/42/83/b04283157505ebd2ab243a9446987a3c.jpg",
    title: "Football",
    description: "Playing football keeps me active and energized.",
  },
];

const FavoriteActivities = () => {
  return (
    <section className="my-16 py-12 " data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-white">Activites</h2>
      <div className="mt-4 border-t-2 border-white w-20 mx-auto mb-12"></div>
      <div className="container mx-auto px-4">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="min-w-[300px]  bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-60 object-cover"
                data-aos="fade-left"
              />
              <div className="p-4" data-aos="fade-left">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteActivities;
