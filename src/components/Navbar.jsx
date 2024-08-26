import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { close, logotext, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite ${styles.color0} sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          {/* Logo or Text */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[100px] h-[100px] -ml-[-0.5rem] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-8 mt-2 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-PermanentMarker uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a target="_blank" href="https://github.com/AlfaroLeandro">
              <AiFillGithub size="3rem" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/1132553928?text=%C2%A1Hola!%20Estoy%20interesado%20en%20tu%20servicio%20como%20desarrollador!">
              <FaWhatsapp size="3rem" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/leandro-alfaro-547864233">
              <AiFillLinkedin size="3rem" />
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-full z-10`}>
              {/* Close Button */}
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="list-none flex flex-col gap-4 items-start mt-10 ml-6">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[24px] font-bold uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className="flex gap-5">

                  <a target="_blank" href="https://github.com/AlfaroLeandro">
                    <AiFillGithub size="3rem" />
                  </a>
                  <a target="_blank" href="https://wa.me/1132553928?text=%C2%A1Hola!%20Estoy%20interesado%20en%20tu%20servicio%20como%20desarrollador!">
                    <FaWhatsapp size="3rem" />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/leandro-alfaro-547864233">
                    <AiFillLinkedin size="3rem" />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
