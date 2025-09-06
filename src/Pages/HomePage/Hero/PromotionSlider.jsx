import diamond from "../../../assets/icons/Diamond.svg";
const PromotionSlider = () => {
  return (
    <div className="bg-[#001056] text-white p-6 mb-8 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-wrapper {
            display: flex;
            width: 200%; /* duplicate contents er jonno */
            animation: marquee 20s linear infinite;
          }
          .marquee-wrapper:hover {
            animation-play-state: paused;
          }
          .marquee-content {
            display: flex;
            width: 50%; /* half width holo actual content */
            justify-content: space-around;
          }
          @media (max-width: 640px) {
            .marquee-wrapper {
              animation-duration: 15s;
            }
            .marquee-content p {
              font-size: 0.875rem;
              margin: 0 2px;
            }
          }
        `}
      </style>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Quick Response
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              10 years of experience
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Support 7 days a week
            </span>
          </div>
          <div className="marquee-content">
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Quick Response
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              10 years of experience
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Support 7 days a week
            </span>
          </div>
          <div className="marquee-content">
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Quick Response
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              10 years of experience
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Support 7 days a week
            </span>
          </div>
          <div className="marquee-content">
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Quick Response
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              10 years of experience
            </span>
            <span className="mx-4 flex items-center">
              <img
                src={diamond}
                alt="Diamond Icon"
                className="inline h-8 w-8 mr-2"
              />
              Support 7 days a week
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSlider;
