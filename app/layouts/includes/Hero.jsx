import { profileImage } from '@/src/assets/images';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineDownload } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <div
            id="hero"
            className="grid grid-cols-1 h-[500px] mt-20 mx-5 mb-[30px]"
        >
            <div className="flex justify-center items-center h-full mb-10">
                <div className=" h-[100px]">
                    <Image
                        src={profileImage}
                        alt="Profile image"
                        height={150}
                        width={150}
                        className="rounded-full border-8 border-white"
                    />
                </div>
            </div>
            <div className="sm:mx-[200px] flexjustify-center content-center mt-5">
                <div>
                    <h1 className="text-2xl text-[24px] sm:text-4xl !leading-[1.5] font-medium  ">
                        <span className="font-semibold">
                            Hello, I&apos;m Danny.
                        </span>{' '}
                        I&apos;m a{' '}
                        <span className="font-semibold">Junior Developer</span>{' '}
                        with strong skills in JavaScript,
                        <span className="text-blue-900 italic">
                            {' '}
                            React js
                        </span>{' '}
                        and
                        <span className="text-blue-900 italic"> Next js.</span>
                    </h1>
                </div>
            </div>
            <div className=" grid grid-cols-1 h-[120px] sm:grid-cols-3">
                <div className="flex h-[60px] justify-center content-center ">
                    <button className=" rounded-full justify-center content-center tracking-wide bg-[#0f172a] font-bold text-white h-[50px] w-[250px]">
                        <div className="flex ">
                            <h2 className="w-[80%] justify-center content-center">
                                Get in touch
                            </h2>
                            <span className="w-[20%]  flex justify-center content-center">
                                <AiOutlineArrowRight size={24} />
                            </span>
                        </div>
                    </button>
                </div>
                <div className="flex h-[60px] justify-center content-center ">
                    <button className=" justify-center content-center border rounded-full h-[50px] w-[200px] font-medium">
                        <div className="flex">
                            <h2 className="w-[80%]">Download CV</h2>
                            <span className="w-[20%]">
                                <AiOutlineDownload size={24} />
                            </span>
                        </div>
                    </button>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2  h-[150px] w-full ">
                    <div className="flex justify-center content-center ">
                        <BsLinkedin className="rounded-full border w-[50px] h-[50px] ease-in-out duration-300 p-3 text-gray-500" />
                    </div>

                    <div className="flex justify-center content-center w-full ">
                        <FaGithubSquare className="rounded-full border w-[50px] h-[50px] p-3 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
