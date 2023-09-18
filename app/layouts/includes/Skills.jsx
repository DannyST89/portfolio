'use client';
import { skillsData } from '@/lib/data';
const Skills = () => {
    return (
        <div id="skills" className="h-[400px]  mt-[100px] grid grid-cols-1">
            <div>
                <h2 className="text-[30px] flex justify-center content-center capitalize">
                    My Skills
                </h2>
            </div>

            <ul className="flex flex-wrap justify-center gap-2 h-[200px] grid-cols-5  m-5">
                {skillsData.map((item, index) => (
                    <li
                        key={index}
                        className=" bg-white border rounded-xl px-5 py-3"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
