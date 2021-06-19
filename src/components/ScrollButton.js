import React, { useEffect, useState } from 'react';
import { BsShiftFill } from 'react-icons/bs';

const ScrollButton = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scoll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {visibility
      && (
      <button type="button">
        <BsShiftFill onClick={returnToTop} />
      </button>
      )}
    </div>
  );
};

export default ScrollButton;
