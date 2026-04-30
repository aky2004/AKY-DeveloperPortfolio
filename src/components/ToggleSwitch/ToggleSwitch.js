import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="sky-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="sky-slider">
        {/* Stars (visible in dark mode) */}
        <span className="sky-stars">
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
        </span>
        {/* Clouds (visible in light mode) */}
        <span className="sky-clouds">
          <span className="cloud cloud-1"></span>
          <span className="cloud cloud-2"></span>
        </span>
        {/* Sun / Moon knob */}
        <span className="sky-knob">
          <span className="moon-craters">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
          </span>
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
