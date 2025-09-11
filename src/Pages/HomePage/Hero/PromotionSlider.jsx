// import diamond from "../../../assets/icons/Diamond.svg";
// const PromotionSlider = () => {
//   return (
//     <div className="bg-[#001056] text-white p-6 px-0 mb-8 overflow-hidden">
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .marquee-wrapper {
//             display: flex;
//             width: 200%; /* duplicate contents er jonno */
//             animation: marquee 20s linear infinite;

//           }
//           .marquee-wrapper:hover {
//             animation-play-state: paused;
//           }
//           .marquee-content {
//             display: flex;
//             width: 50%; /* half width holo actual content */
//             justify-content: space-around;
//           }
//           @media (max-width: 640px) {
//             .marquee-wrapper {
//               animation-duration: 15s;
//               gap:5px;
//             }
//             .marquee-content p {
//               font-size: 0.875rem;
//               margin: 0 2px;
//             }
//           }
//         `}
//       </style>
//       <div className="overflow-hidden whitespace-nowrap">
//         <div className="marquee-wrapper">
//           <div className="marquee-content">
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Quick Response
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               10 years of experience
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Support 7 days a week
//             </span>
//           </div>
//           <div className="marquee-content">
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Quick Response
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               10 years of experience
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Support 7 days a week
//             </span>
//           </div>
//           <div className="marquee-content">
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Quick Response
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               10 years of experience
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Support 7 days a week
//             </span>
//           </div>
//           <div className="marquee-content">
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Quick Response
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               10 years of experience
//             </span>
//             <span className="mx-4 flex items-center">
//               <img
//                 src={diamond}
//                 alt="Diamond Icon"
//                 className="inline h-8 w-8 mr-2"
//               />
//               Support 7 days a week
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromotionSlider;

import Marquee from "react-fast-marquee";

const PromotionSlider = () => {
  const content = [
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
    "Quick Responce",
    "10 years of experience",
    "Support 7 days a week",
  ];
  return (
    <div className="bg-[#001056] py-6">
      <Marquee pauseOnHover={true}>
        {content?.map((item, index) => (
          <div
            className="flex justify-center items-center gap-2 text-white mx-5 py-1"
            key={index}
          >
            <img className="w-[22px]" src="/Icons/marqueeIcon.png" alt="Icon" />
            <p className="text-[20px]">{item}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PromotionSlider;
