import React from "react";

interface WaveTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const WaveText: React.FC<WaveTextProps> = ({
  text,
  delay = 0.1,
  className,
}) => {
  return (
    <div className={`whitespace-nowrap ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="wave-animation"
          style={{ animationDelay: `${index * delay}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
