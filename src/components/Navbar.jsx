import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'; //this is styles in the repo
import { navLinks } from '../constants';
import { logo, menu, close, web } from '../assets';
import aflogo from '../assets/andres-felipe-high-resolution-logo-white-on-transparent-background (1).png';
//``
const Navbar = () => {

  const [active, setActive] = useState("");


  return (
    <nav className={`${styles.paddingX} w-full flex-items-center py-5 fidex top-0 z-20 bg-primary` }>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link
            to="/"
            className="flex items-center gap-2"
            onClick={()=>{
              setActive("");
              window.scrollTo(0,0);
            }}
            >
              <img src={aflogo} alt="logo"  style={{ width: 150, height: 250 }} className="w-1 h-1 object-contain"/>

                {/* <p className="text-white text-[18px] font-bold cursor-pointer"> Andrés Felipe <span className="sm:block hidden">| Engineer</span> </p> */}
            </Link>
            <p className="text-blue-500"> Bringing solutions through code</p>
            <ul className="list-non hidden sm:flex flex-row gap-10">
              {navLinks.map((link)=>(
                <li key={link.id}
                    className={`${
                      active === link.title ? "text-white": "text-secondary"
                    } hover: text-white text-[18px] font-medium cursor-pointer`}
                >

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

            </ul>
        </div>
    </nav>
  )
}

export default Navbar