import { useEffect } from "react";
import React = require("react");

type Props = {
  ref: React.MutableRefObject<HTMLElement | null>;
};

export const useAnimationOnScroll = (props: Props) => {
  useEffect(() => {
    if(!props.ref.current) return;
    props.ref.current.classList.remove("animate__fadeIn");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!props.ref.current) return;
        console.log(entry);
        if (entry.isIntersecting) {
          props.ref.current.classList.add("animate__fadeIn");
          props.ref.current.classList.add("animate__delay-1s")
        } 
      });
    });
    observer.observe(props.ref.current);
  }, [props.ref]);
};
