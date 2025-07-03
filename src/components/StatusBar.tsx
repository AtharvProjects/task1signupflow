
import React from 'react';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <span className="time">9:41</span>
      <div className="indicators">
        <div className="indicator active"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
      <div className="battery-icons">
        <span>📶</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
};

export default StatusBar;
