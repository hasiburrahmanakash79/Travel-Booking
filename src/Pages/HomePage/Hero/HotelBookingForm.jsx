import { useState } from 'react';
import { MapPin, Users, Calendar, Bed, ChevronDown } from 'lucide-react';

export default function HotelBookingForm() {
  const [destination, setDestination] = useState('');
  const [centerPointRange, setCenterPointRange] = useState('2-3 mi');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [groupType, setGroupType] = useState('Birthday party group');
  const [rooms, setRooms] = useState(9);
  const [groupSize, setGroupSize] = useState(9);

  return (
    <div className="p-10 bg-white shadow-md rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Destination */}
        <div className="lg:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="I want to go..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Center Point Range */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Center Point range
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="h-5 w-5 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <select
              value={centerPointRange}
              onChange={(e) => setCenterPointRange(e.target.value)}
              className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none appearance-none bg-white"
            >
              <option value="1-2 mi">1-2 mi</option>
              <option value="2-3 mi">2-3 mi</option>
              <option value="3-5 mi">3-5 mi</option>
              <option value="5+ mi">5+ mi</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

       <div className="lg:col-span-5 grid grid-cols-2 gap-4">
         {/* Check-in Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="dd / mm / yr"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="dd / mm / yr"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none placeholder-gray-400"
            />
          </div>
        </div>
       </div>

        
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
        
        {/* Group Type */}
        <div className="lg:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group type
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={groupType}
              onChange={(e) => setGroupType(e.target.value)}
              className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none appearance-none bg-white"
            >
              <option value="Birthday party group">Birthday party group</option>
              <option value="Wedding party">Wedding party</option>
              <option value="Corporate group">Corporate group</option>
              <option value="Family reunion">Family reunion</option>
              <option value="Friends getaway">Friends getaway</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Rooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rooms
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Bed className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
          </div>
        </div>

        {/* Group Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Size
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={groupSize}
              onChange={(e) => setGroupSize(parseInt(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
          </div>
        </div>
        </div>


            {/* Check Hotels Button */}
        <div className="lg:col-span-3 ">
          <button className=" w-full h-full bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors ">
            Check Hotels
          </button>
        </div>
      </div>
    </div>
  );
}