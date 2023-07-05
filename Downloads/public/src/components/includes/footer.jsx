import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow">
            <div className="col">
              <div className="footerLogo">
                <NavLink href="index.php">
                  <img src="images/logo.png" alt="" />
                </NavLink>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto vitae veritatis accusamus, doloremque neque aperiam
                dolorem omnis, asperiores nam doloribus rem repudiandae nobis
                culpa eligendi perspiciatis eius illum odit aliquam!
              </p>
            </div>
            <div className="col">
              <h4>Get in touch</h4>
              <ul className="infoLst">
                <li>
                  <img src="images\icon-map-marker.svg" alt="" />
                  <NavLink href="">20, Somewhere in world</NavLink>
                </li>
                <li>
                  <img src="images\icon-envelope-fill.svg" alt="" />
                  <NavLink href="mailto:jetmeans@gmail.com">
                    abcinfo@gmail.com
                  </NavLink>
                </li>
                <li>
                  <img src="images\icon-phone.svg" alt="" />
                  <NavLink href="tel:(734) 219-2298">(734) 219-86796</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Usefull Links</h4>
              <ul className="fst">
                <li>
                  <NavLink href="index.php"> Home</NavLink>
                </li>
                <li>
                  <NavLink href="about.php">About us</NavLink>
                </li>
                <li>
                  <NavLink href="service.php">Catering</NavLink>
                </li>

                <li>
                  <NavLink href="contact.php">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Join our mailing list</h4>
              <form
                action="newsletter"
                method="post"
                autocomplete="off"
                className=""
              >
                <label for="email">
                  Stay up to date with the latest news and deals!
                </label>
                <div className="txtGrp relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="txtBox"
                    placeholder="@ your email address"
                  />
                  <button type="submit">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
              <h4>Follow Us</h4>
              <ul className="social flex">
                <li>
                  <NavLink href="?">
                    <img src="images/social-instagram.svg" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink href="?">
                    <img src="images/social-facebook.svg" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink href="?">
                    <img src="images/social-youtube.svg" alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink href="?">
                    <img src="images/social-twitter.svg" alt="" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © Froze zone</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
