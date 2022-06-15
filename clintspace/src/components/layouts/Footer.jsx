import React from "react";
import { ReactComponent as BuildingLocation } from "../../assets/building_location.svg"


function Footer() {
  return (
    <div className="footer footer_background" id="contact">

      <ul className="top-section">
        <li className="about">
          <ul>
            <li className="address bg-yellow-400">
                <BuildingLocation />
              <p>12E Alpine Suites, Ernakulam, Kerala 683511 India</p>
            </li>
            <li>

            </li>
          </ul>
        </li>
        <li className="information"></li>
        <li className="instagram"></li>
      </ul>
      <div className="bottom-section"></div>
    </div>
  );
}

export default Footer;
