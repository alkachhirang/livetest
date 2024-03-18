import React from 'react'

const About = () => {
    return (
        <div className='bg-Bgabout bg-cover lg:bg-bgsize h-[427px] sm:h-[470px] md:h-[517px]'>
            <div className='container mx-auto px-3 flex justify-center items-center'>
                <div className='bg-[#ffffff26] max-w-[778px] py-[35px] md:pt-[50px] md:pb-[42px] px-[40px] md:px-[75px] flex flex-col justify-center items-center mt-[60px] sm:mt-[99px] md:mt-[106px]'>
                    <h2 className='ff_HelveticaNeue text-center text-[#fff] font-normal  text-[27px] sm:text-[40px] md:text-[46px] lg:text-[52px] mb-[9px] leading-[120%]'>Are you over your EX?</h2>
                    <p className='ff_poppins font-normal text-[#fff] text-[14px] sm:text-[16px] text-center max-w-[585px] leading-[150%] sm:leading-[165%] mb-[10px] sm:mb-[20px] md:mb-[31px]'>Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do.</p>
                    <div>
                        <button className='bg-gradient-to-r from-[#0C5FD1] capitalize to-[#8703C5] rounded-[68px] text-nowrap ff_inter font-medium py-[14px] px-[32px] sm:py-[16px] sm:px-[36px] text-[#fff] text-[14px] sm:text-[16px]'>Let’s find it out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
