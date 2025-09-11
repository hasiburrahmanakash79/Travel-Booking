import { useState } from "react";

const Achievements = () => {
  const [isCurrentPage, setCurrentPage] = useState(1);
  const cardData = [
    {
      id: "1",
      image: "/Images/army.jpg",
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland",
    },
    {
      id: "2",
      image: "/Images/army.jpg",
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland",
    },
    {
      id: "3",
      image: "/Images/army.jpg",
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland",
    },
    {
      id: "4",
      image: "/Images/army.jpg",
      date: "27 August, 2025",
      time: "12 min",
      task: "read",
      heading: "Lodging for U.S Army in Baltimore",
      text: "Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland. Group Booking was awarded a contract to provide 325 room nights of double occupancy lodging in Baltimore, Maryland",
    },
  ];

  // Function for first words
  function getFirstWords(text, numberOfWords) {
    const words = text.trim().split(/\s+/);
    const firstWords = words.slice(0, numberOfWords);
    return firstWords.join(" ");
  }

  return (
    <div className=" my-28 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 space-y-10 ">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
          Our Achievements
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md transition-shadow duration-200 hover:shadow-lg rounded-xl overflow-hidden"
            >
              {/* Card Image */}
              <figure>
                <img
                  src={card.image}
                  alt="Army Image"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-4 sm:p-5 space-y-2">
                {/* Date */}
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <img
                    className="w-4 sm:w-5"
                    src="/Icons/calendar.png"
                    alt="Calendar Icon"
                  />
                  {card.date}
                </p>

                {/* Time */}
                <p className="flex items-center gap-2 text-xs sm:text-sm">
                  <img
                    className="w-4 sm:w-5"
                    src="/Icons/clock.png"
                    alt="Clock Icon"
                  />
                  {card.time} {card.task}
                </p>

                {/* Heading */}
                <h3 className="text-sm sm:text-base font-medium">
                  {card.heading}
                </h3>

                {/* Text */}
                <p className="text-[#4A4A4A] text-xs sm:text-sm">
                  {getFirstWords(card.text, 30)}...{" "}
                  <span className="text-[#00BF63] hover:text-green-400 cursor-pointer">
                    Read More
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="*:w-8 *:h-8 *:flex *:justify-center *:items-center *:border *:rounded-sm *:border-[#CACACA] w-full h-5 flex gap-2 justify-center items-center ">
          <button
            disabled={isCurrentPage <= 1 ? true : false}
            onClick={() => setCurrentPage(isCurrentPage - 1)}
            className=""
          >
            <img src="/Icons/left.png" alt="Left Icon" />
          </button>
          <button
            className={`text-[14px] ${
              isCurrentPage === 1 ? "!border-[#00BF63] text-[#00BF63]" : " "
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className={`text-[14px] ${
              isCurrentPage === 2 ? "!border-[#00BF63] text-[#00BF63]" : " "
            }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className={`text-[14px] ${
              isCurrentPage >= 4 && isCurrentPage <= 8
                ? "!border-[#00BF63] text-[#00BF63]"
                : " "
            }`}
          >
            ...
          </button>
          <button
            className={`text-[14px] ${
              isCurrentPage === 9 ? "!border-[#00BF63] text-[#00BF63]" : " "
            }`}
            onClick={() => setCurrentPage(9)}
          >
            9
          </button>
          <button
            className={`text-[14px] ${
              isCurrentPage === 10 ? "!border-[#00BF63] text-[#00BF63]" : " "
            }`}
            onClick={() => setCurrentPage(10)}
          >
            10
          </button>
          <button
            disabled={isCurrentPage >= 10 ? true : false}
            onClick={() => setCurrentPage(isCurrentPage + 1)}
            className=""
          >
            <img src="/Icons/right.png" alt="Right Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
