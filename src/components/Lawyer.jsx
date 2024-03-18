import React from 'react';
import lawyerimg from '../assets/images/png/Lawter-img.png';

const Lawyer = () => {
    return (
        <div className='pt-[52px]'>
            <div className='container mx-auto px-3'>
                <div className='flex flex-row flex-wrap '>
                    <div className='w-[50%]'>
                        <img src={lawyerimg} alt="lawyerimg" className='w-full max-w-[559px]' />
                    </div>
                    <div className='w-[49%]'>
                        <h2 className='ff_HelveticaNeue text-[#000] uppercase font-normal  text-[27px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[129%]'>LAWYER <span className='text-[#F77B0B]'>&</span> DIVORCE COACH</h2>
                        <p className='text-[36.96px] text-[#000] font-normal ff_HelveticaNeue uppercase leading-[129%] mb-[30px]'><span className='text-[#F77B0B]'>M</span>arc <span className='text-[#F77B0B]'>J</span>achim <span className='text-[#F77B0B]'>H</span>ubrich</p>
                        <p className='text-[20px] text-[#000] font-normal ff_HelveticaNeue capitalize'>About the mindset agency coach</p>
                        <p className='text-[#000] opacity-[70%] ff_poppins text-[16px] font-normal max-w-[484px] mb-[35px] mt-[12px]'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lawyer
