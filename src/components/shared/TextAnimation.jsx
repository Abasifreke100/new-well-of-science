import { useEffect, useRef, useState } from "react";

const TextAnimation = ({
    text1,
    text2,
    letterAnimationDuration,
    scaleAnimationDelay,
  }) => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const [isText1Animated, setIsText1Animated] = useState(false);
  
    useEffect(() => {
      const wrapLetters = (textElement) => {
        if (textElement.current) {
          const letters = textElement.current.innerText.split("");
          textElement.current.innerHTML = letters
            .map((letter) => {
              if (letter === " ") {
                return "&nbsp;"; // Preserve spaces
              }
              return `<span class="letter">${letter}</span>`;
            })
            .join("");
  
          const letterElements = textElement.current.querySelectorAll(".letter");
          letterElements.forEach((letter, index) => {
            letter.style.animation = `letterDrop ${letterAnimationDuration}s ease forwards`;
            letter.style.animationDelay = `${index * 0.1}s`; // Adjust timing as needed
          });
  
          // Set state to trigger the scale animation after the letter animations finish
          setTimeout(() => {
            setIsText1Animated(true);
          }, letterElements.length * 0.1 * letterAnimationDuration * 1000); // Convert to milliseconds
        }
      };
  
      wrapLetters(textRef1);
    }, [text1, letterAnimationDuration]);
  
    useEffect(() => {
      if (isText1Animated && textRef2.current) {
        textRef2.current.style.opacity = 1;
        textRef2.current.style.transform = "scale(1)";
      }
    }, [isText1Animated]);
  
    return (
      <div className="text-container font-gen_sans  z-30 text-[27px] md:text-5xl flex flex-col w-fit font-medium">
        <h1 ref={textRef1} className="animated-text ">
          {text1}
        </h1>
        <h2
          ref={textRef2}
          className="school-text leading-relaxed"
          style={{ transitionDelay: `${scaleAnimationDelay}s` }}
        >
          {text2}
        </h2>
      </div>
    );
  };
  

  export default TextAnimation;