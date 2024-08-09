import React from "react";

interface VerticalListProps {
  children: React.ReactNode;
}

const VerticalList: React.FC<VerticalListProps> = ({ children }) => {
  return (
    <ul className="w-full sm:w-[97%] space-y-4 mt-9 overflow-y-auto pr-2">
      {children}
    </ul>
  );
};

export default VerticalList;
