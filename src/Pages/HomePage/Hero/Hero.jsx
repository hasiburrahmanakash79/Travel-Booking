import groupImage from "../../../assets/images/groupImage.jpg";
import HotelBookingForm from "./HotelBookingForm";

const Hero = () => {
  // const [destination, setDestination] = useState("");
  // const [centerRange, setCenterRange] = useState("2-3 mi");
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  // const [groupType, setGroupType] = useState("Birthday party group");
  // const [rooms, setRooms] = useState(9);
  // const [groupSize, setGroupSize] = useState(9);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ destination, centerRange, checkInDate, checkOutDate, groupType, rooms, groupSize });
  // };

  return (
    <section className="relative">
      <div className="p-10 bg-white shadow-md rounded-xl mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10">
          {/* Text Section */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-700">Hotels</span> for Every{" "}
              <span className="text-[#7ED957]">Group</span> at the{" "}
              <span className="text-[#7ED957]">Best</span>{" "}
              <span className="text-[#7ED957]">Price</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Book multiple rooms at your favorite hotels and get deals you
              won't find anywhere else.
            </p>
            <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center">
              Explore More <span className="ml-2">→</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="rounded-2xl">
            <img
              src={groupImage}
              alt="Group of friends"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      {/* <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <label className="block text-gray-600 text-sm mb-1">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="I want to go..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-gray-600 text-sm mb-1">Center Point range</label>
          <select
            value={centerRange}
            onChange={(e) => setCenterRange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
          >
            <option>2-3 mi</option>
            <option>4-5 mi</option>
          </select>
        </div>
        <div className="md:col-span-1">
          <label className="block text-gray-600 text-sm mb-1">Check-in date</label>
          <input
            type="text"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            placeholder="dd/mm/yr"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-gray-600 text-sm mb-1">Check-out date</label>
          <input
            type="text"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            placeholder="dd/mm/yr"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
          />
        </div>
        <div className="md:col-span-1 flex flex-col">
          <label className="block text-gray-600 text-sm mb-1">Group type</label>
          <select
            value={groupType}
            onChange={(e) => setGroupType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
          >
            <option>Birthday party group</option>
            <option>Family group</option>
          </select>
          <div className="flex space-x-2">
            <input
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              placeholder="Rooms"
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
            />
            <input
              type="number"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              placeholder="Group Size"
              className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="md:col-span-5 lg:col-span-1 bg-[#7ED957] text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          Check Hotels <span className="ml-2">→</span>
        </button>
      </form> */}

      <HotelBookingForm />
    </section>
  );
};

export default Hero;
