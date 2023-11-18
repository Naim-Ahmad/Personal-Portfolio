import React from 'react';
import projectData from '../Utils/projectData';
import Project from './Project';

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-5">
      <div className="container">
        <div className="service-div m-auto text-center mb-4">
          <h2 className="mb-4 text-center my-work-txt commonBeforeTxt text-capitalize">
            My Latest Works
          </h2>
          <p className="fs-6" style={{ color: 'gray' }}>
            I love to Work with Passion and Dedication. Maintaining quality and
            client satisfaction is my main motto.
          </p>
        </div>

        <ul
          className="nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              className="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all-tab-pane"
              type="button"
              role="tab"
              aria-controls="all-tab-pane"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="nav-link"
              id="web-design"
              data-bs-toggle="tab"
              data-bs-target="#web-design-pane"
              type="button"
              role="tab"
              aria-controls="web-design-pane"
              aria-selected="false"
            >
              Web Design
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="nav-link"
              id="web-app"
              data-bs-toggle="tab"
              data-bs-target="#web-app-pane"
              type="button"
              role="tab"
              aria-controls="web-app-pane"
              aria-selected="false"
            >
              Web App
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="all-tab-pane"
            role="tabpanel"
            aria-labelledby="all-tab"
            tabIndex="0"
          >
            <div className="portfolio_container">
              {projectData.map((data) => (
                <Project key={data.id} {...data} />
              ))}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="web-design-pane"
            role="tabpanel"
            aria-labelledby="web-design"
            tabIndex="0"
          >
            <div className="portfolio_container">
              {projectData.map((data) => {
                if (data.category == 'webDesign') {
                  return <Project key={data.id} {...data} />;
                }
              })}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="web-app-pane"
            role="tabpanel"
            aria-labelledby="web-app"
            tabIndex="0"
          >
            <div className="portfolio_container">
              {projectData.map((data) => {
                if (data.category == 'webApp') {
                  return <Project key={data.id} {...data} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
