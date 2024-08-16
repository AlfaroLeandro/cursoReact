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
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite ${styles.color0} sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          {/* <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          /> */}

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[100px] h-[100px] -ml-[-0.5rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8 mt-2 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
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

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
