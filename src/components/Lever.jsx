import React, { useEffect, useState } from "react";

const Lever = ({ onClick, isSpinning }) => {
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    if (isSpinning) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [isSpinning]);
  return (
    <div className="toggle-container">
      <input
        className="toggle-input"
        type="checkbox"
        onClick={onClick}
        disabled={isSpinning}
        checked={isToggled}
        readOnly
      />
      <div className="toggle-handle-wrapper">
        <div className="toggle-handle">
          <div className="toggle-handle-knob"></div>
          <div className="toggle-handle-bar-wrapper">
            <div className="toggle-handle-bar"></div>
          </div>
        </div>
      </div>
      <div className="toggle-base">
        <div className="toggle-base-inside"></div>
      </div>
    </div>
  );
};
export default Lever;
