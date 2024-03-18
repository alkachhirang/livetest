import React from 'react';
import { Loader } from './Iconimg';

const Preloader = () => {
    return (
            <div className='relative overflow-hidden'>
                <div className=" absolute left-[-5%] top-[-4%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
                <div className=" absolute right-[-5%] top-[25%] blur-[124px] opacity-[70%]  w-[274px] h-[274px] rounded-[50%] bg-[#0066FF] animate-pulse md:block hidden"></div>
                <div className='min-h-screen flex flex-col gap-[12px] justify-center items-center bg-[#000]'>
                    <h2 className='text-[48px] ff_neuro font-normal text-[#fff] '>Nex<span className='text-[#0066FF]'>Ai</span></h2>
                    <Loader />
                </div>

            </div>
    )
}

export default Preloader;
