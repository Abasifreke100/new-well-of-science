import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 360,
  (x - window.innerWidth / 2) / 240,
  1.02,
];

const trans = (x, y) =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`;

const HoverCard = ({
  children,
  backgroundColor,
  direction,
  left,
  className,
}) => {
  const [hovered, setIsHovered] = useState(false);
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }));

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  const calcTranslate = (coordinate, containerSize, itemSize) =>
    (coordinate / containerSize) * (containerSize - itemSize);

  const translateX =
    typeof window !== "undefined"
      ? calcTranslate(cursorCoords.x, window.innerWidth, 600)
      : 0;
  const translateY =
    typeof window !== "undefined"
      ? calcTranslate(cursorCoords.y, window.innerHeight, 500)
      : 0;

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    set({ xys: calc(x, y) });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setIsHovered(false);
  };

  return (
    <animated.div
      className="  overflow-hidden  mb-3 md:mb-8 rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div
        className={`z-[1] relative ${
          className || "bg-[#273813] shadow-xl h-full"
        }   border-[#30363d1c] border-[0.5px] rounded-xl  md:flex ${direction} justify-between `}
      >
        {children}
        <div
          className={`absolute w-[500px] border-none  bottom-[50px] h-[1000px] z-[-1] back ${
            hovered ? "opacity-95" : "opacity-0"
          } `}
          style={{
            transform: `translateX(${translateX}px) translateY(${
              2 * translateY
            }px)`,
            background: backgroundColor,
            borderRadius: "100%",
            mixBlendMode: "soft-light",
            left: left,
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier",
          }}
        ></div>
      </div>
    </animated.div>
  );
};

export default HoverCard;
