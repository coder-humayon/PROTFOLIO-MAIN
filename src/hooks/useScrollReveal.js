import { useEffect, useRef, useState } from "react";

const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.25) { 
          setVisible(true);
        }; 
        if (entry.intersectionRatio === 0) {
          setVisible(false);
        }
      },
      {
        threshold: [0, 0.25],
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, visible];
};

export default useScrollReveal;