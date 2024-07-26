import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex
        flex-col justify-center w-full h-full ">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
             border-gray-500">
            About
            </p>
            </div>
            <p className="text-xl mt-20">
            Passionate and driven Computer Science Engineering student with a keen interest in
            technologies and their practical applications. Throughout my academic journey, I have cultivated a
            strong foundation in Computer Science principles and problem-solving skills.
            </p>
            <br />
            <p className="text-xl">
            Seeking job opportunities to apply my skills and knowledge in computer science, including proficiency in C, C++,
            Python, and expertise in front-end web development, Machine Learning, Data Structures and Algorithms
            and SQL. Excited to show my skills in ever-evolving tech industry. 
            </p>
        </div>
    </div>
  )
}

export default About