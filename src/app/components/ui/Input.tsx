import React, { useState } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClick: (value: string) => void;
  validate?: (value: string) => string | null;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onClick,
  validate,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBlur = () => {
    setIsFocused(false);
    if (validate) {
      setError(validate(value));
    }
  };

  const handleClick = () => {
    onClick(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick(); // Trigger handleClick when Enter is pressed
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className={`flex items-center px-4 py-3 rounded-full border-2 ${
          isFocused
            ? "border-purple-500"
            : error
            ? "border-red-500"
            : "border-gray-500"
        } bg-transparent w-[90%] md:w-1/2`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (error) setError(null);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-grow text-white text-lg placeholder-gray-400"
        />
        <button
          className="ml-4 text-gray-500 hover:text-purple-500"
          type="button"
          onClick={handleClick}
        >
          <svg
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="white"
                fillOpacity="0.6"
              />
              <path
                d="M10.75 14.5L16 9.25M16 9.25L21.25 14.5M16 9.25V22.75"
                stroke="white"
              />
            </g>
          </svg>
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default Input;
