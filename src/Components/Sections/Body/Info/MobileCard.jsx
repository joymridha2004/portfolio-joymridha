import React from 'react';

const MobileCard = ({mobile}) => {
  return (
    <div
      className="relative flex justify-center items-center h-[300px] w-[160px] border border-4 border-black rounded-2xl bg-gray-50"
      style={{ boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)' }}
    >
      {/* Mobile Screen Content */}
      <img
        src={mobile} // Replace with the actual path to your image file
        alt="Mobile Content"
        className="h-full w-full rounded-2xl object-cover"
      />

      {/* Top Border */}
      <span className="absolute top-0 border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl" />
      {/* Side Buttons */}
      <span className="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md" />
      <span className="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md" />
    </div>
  );
};

export default MobileCard;
