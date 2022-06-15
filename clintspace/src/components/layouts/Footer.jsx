import React from "react";
import { ReactComponent as BuildingLocation } from "../../assets/building_location.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { HashLink } from "react-router-hash-link";
import { NAV_BAR_ITEMS } from "../../constants/navBarItem";

function Footer() {


	// this function will render our all nav items;
	const getNavItems = () =>
    NAV_BAR_ITEMS.map((item) => (
      <>
        <li key={item.componentId}>
          
          <HashLink
            to={item.componentId}
          >
            
            {item.icon} {item.componentName}
          </HashLink>
        </li>
      </>
    ));

	return (
		<div className="footer " id="contact">
			<ul className="top-section flex items-center">
				<li className="about w-full lg:w-1/3 place-contents-center">
					<div>
						<About />
						<p>About</p>
					</div>
					<ul className="flex flex-col space-y-4">
						<li className="address flex flex-row">
							<BuildingLocation />
							<p>12E Alpine Suites, Ernakulam, Kerala 683511 India</p>
						</li>
						<li className="address flex flex-row ">
							<Phone />
							<p>+91 920 704 1999</p>
						</li>
						<li className="address flex flex-row ">
							<Email />
							<p>info@clintspace.com</p>
						</li>
					</ul>
				</li>
				<li className="information w-full lg:w-1/3">
					<div>
						<Info />
						<p>Information</p>
					</div>
					<ul>
						{getNavItems()}
					</ul>
				</li>
				<li className="instagram hidden xs:block lg:block xl:block w-1/3">
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
