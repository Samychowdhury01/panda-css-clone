import Marquee from "react-fast-marquee";
import { BsDot } from "react-icons/bs";
import "../../styles/Marquee.css";

const MarqueeSection = () => {
  const marqueeTextArr: string[] = [
    "Style props",
    "Variants",
    "Just-in-Time",
    "Recipes",
    "Cascade Layers",
    "Utility Classes",
    "TypeScript based",
    "Design Tokens",
    "Cascade Layers",
  ];
  return (
    <>
      <Marquee className="py-5">
        {marqueeTextArr.map((item :  string, index: number) => (
         <p key={index} className="marquee-text">
         <span>{item}</span>
         <span>
           <BsDot className="mx-5" />
         </span>
       </p>
        ))}
      </Marquee>
    </>
  );
};

export default MarqueeSection;
