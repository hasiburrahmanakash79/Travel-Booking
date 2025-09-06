import groupImage from "../../../assets/images/groupImage.jpg";
import HotelBookingForm from "./HotelBookingForm";

const Hero = () => {
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

      <HotelBookingForm />
    </section>
  );
};

export default Hero;
