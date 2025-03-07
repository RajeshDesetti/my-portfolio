import React from 'react';
import {FaGithub,FaLinkedin} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href:'https://www.linkedin.com/in/rajesh-desetti-8b982a279/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    GitHub<FaGithub size={30} />
                </>
            ),
            href:'https://github.com/RajeshDesetti'
        },
        {
            id:3,
            child:(
                <>
                    LeetCode<SiLeetcode size={30}/>
                </>
            ),
            href:'https://leetcode.com/u/Rajesh_Desetti/'
        },
        {
            id:4,
            child:(
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            download:true
        }
        
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 
            ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style ? style : ''}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks