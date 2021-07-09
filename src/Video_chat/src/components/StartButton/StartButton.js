import React from 'react';
import './StartButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <div>
      <h1 className="callHeading">CLICK THE BUTTON TO START THE MEETING</h1>
      <button
        className="start-button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        Start Meeting
      </button>
    </div>
  );
}
