import React from "react";
import "./Rectangle.css";

interface RectangleProps
{
  imageSrc: string;
}

const Rectangle: React.FC<RectangleProps> = ({ imageSrc }) => {
  return (
    <div className="rectangle">
      <img src={imageSrc} alt="Rectangle" className="rectangle-image" />
    </div>
  );
};

export default Rectangle;