import React from "react";
import { ReactComponent as BuildingLocation } from "../../assets/building_location.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { HashLink } from "react-router-hash-link";
import { NAV_BAR_ITEMS } from "../../constants/navBarItem";
import { RiChat1Line } from "react-icons/ri";

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
		<div className="footer pagePadding " id="contact">
			<ul className="top-section flex items-center  ">
				<li className="about w-full lg:w-1/3 place-contents-cente r">
					<div className="ulHeadings">
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
						<li className="address flex flex-row ">
							<div className="inputGroup w-full" >
								<input type="text" placeholder='Email or Phone' />
								<button style={{ width: "fit-content", fontSize: "25px" }}  >  <RiChat1Line /> </button>
							</div>
						</li>
					</ul>
				</li>
				<li className="information w-full lg:w-1/3">
					<div className="ulHeadings">
						<Info />
						<p>Information</p>
					</div>
					<ul>
						{getNavItems()}
					</ul>
				</li>
				<li className="instagram hidden xs:block lg:block xl:block w-1/3">
					<div className="ulHeadings">
						<Instagram />
						<p>Instagram</p>
					</div>
					<div className="footerImageGrid">
						<div className="img1"> <img src="./Logo Mockup with 3D Logo.png" alt="" /> </div>
						<div className="img2"> <img src="./Logo Mockup with 3D Logo.png" alt="" /> </div>
						<div className="img3"> <img src="./Logo Mockup with 3D Logo.png" alt="" /> </div>
						<div className="img4"> <img src="./Logo Mockup with 3D Logo.png" alt="" /> </div>
						<div className="img5"> <img src="./Logo Mockup with 3D Logo.png" alt="" /> </div>
						<div className="img6"> <img src="./egg.png" alt="" /> </div>
					</div>
				</li>
			</ul>
			<div className="bottom-section"></div>
		</div>
	);
}

export default Footer;
