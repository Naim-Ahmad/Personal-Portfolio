import React from 'react';

export default function Project({
  imgUrl,
  altText,
  projectTitle,
  projectDesc,
  projectLink,
}) {
  return (
    <div className="portfolio_item item">
      <img className="img-fluid" src={imgUrl} alt={altText} />
      <div className="hover-div">
        <div>
          <h4>{projectTitle}</h4>
          <p>
            {projectDesc}
            <a target="_blank" href={projectLink}>
              here.
            </a>
          </p>
          <div className="glass text-center">
            <a className="text-white" href={projectLink} target="_blank">
              <i className="fa-solid fa-magnifying-glass fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
