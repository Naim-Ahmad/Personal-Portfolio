import React from 'react';

export default function SkillComp({ technology, color, successNum, techIcon }) {
  return (
    <div className="">
      <div className={`${technology} skills-category`}>
        <h3>{technology}</h3>
        <img src={techIcon} alt={`${technology} icon`} className="mb-3" />
        <div className="progress-counter d-flex justify-content-between mb-2">
          <div>{technology}</div>
          <span className="d-block display" data-counter={successNum}></span>
        </div>
        <div className="progress" style={{ height: '10px' }}>
          <div
            className="progress-bar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={successNum}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
}
