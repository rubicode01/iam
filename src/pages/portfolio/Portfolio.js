import React, { useState } from "react";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { dataportfolio } from "../../ipcontent";
import "./Portfolio.css";

const Portfolio = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  const allItems = dataportfolio.portfolio.map((data, i) => (
    <div key={i}>
      <div>
        <img src={data.img} alt="" />
      </div>
    </div>
  ));

  const brandProject = dataportfolio.portfolio.filter(
    (brands) => brands.tag === "brand"
  );
  const brandItems = brandProject.map((brand) => <p>{brand.tag}</p>);

  const codeProject = dataportfolio.portfolio.filter(
    (codes) => codes.tag === "code"
  );
  const codeItems = codeProject.map((code) => <p>{code.description}</p>);

  const designProject = dataportfolio.portfolio.filter(
    (designs) => designs.tag === "design"
  );
  const designItems = designProject.map((design) => <p>{design.tag}</p>);
  return (
    <div className="ip_section" id="portfolio">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title">portfolio</span>
              <h2>{dataportfolio.title}</h2>
              <p className="marker-white">{dataportfolio.description}</p>
            </div>
            <div className="right">
              <div className="tab">
                <ul className="tab-list">
                  <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                  >
                    All
                  </li>
                  <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}
                  >
                    Design
                  </li>
                  <li
                    className={`tabs ${getActiveClass(3, "active-tabs")}`}
                    onClick={() => toggleTab(3)}
                  >
                    Code
                  </li>
                  <li
                    className={`tabs ${getActiveClass(4, "active-tabs")}`}
                    onClick={() => toggleTab(4)}
                  >
                    Brand
                  </li>
                </ul>
                <div className="content-tab-container">
                  <div>
                    <div
                      className={`tab_content ${getActiveClass(
                        1,
                        "active-content"
                      )}`}
                    >
                      {allItems}
                    </div>
                    <div
                      className={`tab_content ${getActiveClass(
                        2,
                        "active-content"
                      )}`}
                    >
                      {designItems}
                    </div>
                    <div
                      className={`tab_content ${getActiveClass(
                        3,
                        "active-content"
                      )}`}
                    >
                      {codeItems}
                    </div>
                    <div
                      className={`tab_content ${getActiveClass(
                        4,
                        "active-content"
                      )}`}
                    >
                      {brandItems}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="po_item_ho">
                {dataportfolio.portfolio.map((data, i) => {
                  return (
                    <div key={i}>
                      <img src={data.img} alt="" />
                      <p>{data.experience}</p>
                      <p>{data.title}</p>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
