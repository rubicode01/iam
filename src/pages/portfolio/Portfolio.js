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
        <a href={data.link} rel="noopener noreferrer" target={"_blank"}>
          <img src={data.img} alt="protfolio" />
        </a>
      </div>
    </div>
  ));

  // const brandProject = dataportfolio.portfolio.filter(
  //   (brands) => brands.tag === "brand"
  // );
  // const brandItems = brandProject.map((brand) => (
  //   <a href={brand.link} rel="noopener noreferrer" target={"_blank"}>
  //     <img src={brand.img} alt="brand" />
  //   </a>
  // ));

  const codeProject = dataportfolio.portfolio.filter(
    (codes) => codes.tag === "code"
  );
  const codeItems = codeProject.map((code) => (
    <div>
      <a href={code.link} rel="noopener noreferrer" target={"_blank"}>
        <img src={code.img} alt="code" />
      </a>
      <p className="imgheadline">{code.headline}</p>
      <p className="imgtext">
        {code.description}
        <br />
        {code.skills}
      </p>
    </div>
  ));

  const designProject = dataportfolio.portfolio.filter(
    (designs) => designs.tag === "design"
  );
  const designItems = designProject.map((design) => (
    <div>
      <img src={design.img} alt="design" />
      <p className="imgheadline">{design.headline}</p>
      <p className="imgtext">
        {design.description} <br />
        {design.skills}
      </p>
    </div>
  ));
  return (
    <div className="ip_section" id="portfolio">
      <div className="ip_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <span className="title">{dataportfolio.title}</span>
              <h2>{dataportfolio.description}</h2>
              <p>
                Es ist keine leichte Aufgabe, ein Portfolio über sich selbst zu
                erstellen, um das zu symbolisieren was man ist und was man kann.
                Dies ist nur ein kleiner Auszug meiner Arbeiten und der
                Kombination aus digitaler Kunst und Programmieren.
              </p>
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
                  {/* <li
                    className={`tabs ${getActiveClass(4, "active-tabs")}`}
                    onClick={() => toggleTab(4)}
                  >
                    Brand
                  </li> */}
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
                    {/* <div
                      className={`tab_content ${getActiveClass(
                        4,
                        "active-content"
                      )}`}
                    >
                      {brandItems}
                    </div> */}
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
