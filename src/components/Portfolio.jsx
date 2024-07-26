import React from 'react';
import toDoList from "../assets/Portfolio/toDoList.png";
import ageCalculator from "../assets/Portfolio/ageCalculator.png";
import gridImage from "../assets/Portfolio/gridImage.png";
import realEstate from "../assets/Portfolio/realEstate.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: toDoList,
            demo: 'https://rajeshdesetti.github.io/To-Do-List/',
            code: 'https://github.com/RajeshDesetti/To-Do-List'
        },
        {
            id: 2,
            src: ageCalculator,
            demo: 'https://rajeshdesetti.github.io/Age-calculator/',
            code: 'https://github.com/RajeshDesetti/Age-calculator'
        },
       {
        id:3,
        src:gridImage,
        demo:'https://rajeshdesetti.github.io/grid/',
        code:'https://github.com/RajeshDesetti/grid'
       },
       {
        id:4,
        src:realEstate,
        demo:'https://github.com/RajeshDesetti/Real-Estate-Price-Prediction',
        code:'https://github.com/RajeshDesetti/Real-Estate-Price-Prediction'
       }
    ];

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">
                        Check out some of my work
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 hover:scale-105" />
                            <div className="flex items-center justify-center">
                                {demo && (
                                    <button
                                        onClick={() => handleClick(demo)}
                                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                                    >
                                        Demo
                                    </button>
                                )}
                                {code && (
                                    <button
                                        onClick={() => handleClick(code)}
                                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                                    >
                                        Code
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;


// const Portfolio = () => {
//     const portfolios=[
//         {
            
//         }
//     ]
//   return (
//     <div name="portfolio" className="bg-gradient-to-b from-black 
//     to-gray-800 w-full text-white md:h-screen ">
//     <div className="max-w-screen-lg p-4 mx-auto flex flex-col
//      justify-center w-full h-full">
//         <div className="pb-8">
//             <p className="text-4xl font-bold inline border-b-4 
//             border-gray-500">
//             Portfolio
//             </p>
//             <p className="py-6">
//             Checkout some of my work
//             </p>
//         </div>
       
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
//          px-12 sm:px-0">
//           {
//             portfolios.map(({id,src})=>(
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//                 <img src={src} alt="" 
//                     className="rounded-md duration-200 hover:scale-105"
//                 />
//                 <div className="flex items-center justify-center">
//                     <button className="w-1/2 px-6 py-3 m-4 
//                     duration-200 hover:scale-105" >Demo</button>
//                     <button className="w-1/2 px-6 py-3 m-4 
//                     duration-200 hover:scale-105"
//                     >Code</button>
//                 </div>
//             </div>  
//             ))
//         }

//         </div>
//     </div>

//     </div>
//   )
// }

// export default Portfolio