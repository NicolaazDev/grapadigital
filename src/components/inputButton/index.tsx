"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InputButtonProps {
  className?: string;
  icon?: React.ReactNode;
  textButton?: string;
  placeholder?: string;
  value: string;
  onClick: (value: string) => void;
}

const InputWithButton: React.FC<InputButtonProps> = ({
  className,
  icon,
  textButton,
  placeholder,
  value,
  onClick,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      onClick(inputRef.current.value);
    }
  };

  return (
    <div className={`${className} center h-[50px]`}>
      <Input
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        className="focus-visible:ring-transparent h-full border-r-0 rounded-br-none rounded-tr-none"
      />
      <Button
        variant={"outline"}
        onClick={handleClick}
        className="rounded-bl-none h-full rounded-tl-none"
      >
        {icon ? icon : textButton}
        {textButton}
      </Button>
    </div>
  );
};

export default InputWithButton;
