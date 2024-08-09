import { Button } from "@/components/ui/button";
import { DoorOpenIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const generateInitials = (name: string) => {
  const names = name.split(" ");
  const initials = names.map((n) => n.charAt(0)).join("");
  return initials.toUpperCase();
};

interface UserContentProps {
  isOpen: boolean;
}

const UserContent: React.FC<UserContentProps> = ({ isOpen }) => {
  const session = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  };

  const initials = generateInitials(session?.user?.name);

  return (
    <div className="w-full bottom-10 absolute max-w-[250px]  font-poppins center">
      <div className="center w-full space-x-2">
        <Avatar className="h-12 w-12 !rounded-[8px]">
          <AvatarFallback className="!rounded-[8px] font-poppins_black text-[17px]">
            {initials}
          </AvatarFallback>
        </Avatar>
        {isOpen && (
          <div className="w-full">
            <p className="text-[14px] font-[400] text-accent">
              {session?.user?.name.substring(0, 13)}...
            </p>
            <p className="text-[12px] font-poppins_light font-[100] text-accent opacity-85">
              {session?.user?.email.substring(0, 13)}...
            </p>
          </div>
        )}
      </div>
      {isOpen && (
        <Button
          variant="ghost"
          className="h-10 w-15 border-gray-700 border-solid border-[1px] text-gray-500 hover:bg-transparent hover:text-accent"
          onClick={() => alert("Logging out")}
        >
          <DoorOpenIcon size={25} strokeWidth={1} />
        </Button>
      )}
    </div>
  );
};

export default UserContent;
