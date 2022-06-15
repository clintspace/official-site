import React from "react";
import { ReactComponent as BuildingLocation } from "../../assets/building_location.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

function Footer() {
	return (
		<div className="footer " id="contact">
			<ul className="top-section flex flex-row">
				<li className="about">
					<div>
						<About />
						<p>About</p>
					</div>
					<ul className="flex flex-column	">
						<li className="address bg-yellow-400">
							<BuildingLocation />
							<p>12E Alpine Suites, Ernakulam, Kerala 683511 India</p>
						</li>
						<li></li>
					</ul>
				</li>
				<li className="information">
					<div>
						<Info />
						<p>Information</p>
					</div>
				</li>
				<li className="instagram">
					<div>
						<Instagram />
						<p>Instagram</p>
					</div>
				</li>
			</ul>
			<div className="bottom-section"></div>
		</div>
	);
}

export default Footer;
