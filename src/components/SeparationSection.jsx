import React from 'react';
import Slider from "react-slick";
import bookbtnimg from '../assets/images/png/book-btn-img.png';
import leftarrow from '../assets/images/png/left-arrow.png';
import left2 from '../assets/images/png/left2-arrow.png';
import rightarrow from '../assets/images/png/right-arrow.png';
import layer from '../assets/images/png/separate-slider-right-img.png';

const SeparationSection = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        Arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='lg:pb-[186px] pb-[40px] sm:pb-[50px]'>
            <div className='container mx-auto px-3 '>
                <div className='flex flex-row flex-wrap'>
                    <div className='lg:w-[49%]'>
                        <h2 className='text-[#000] font-normal text-[20px] sm:text-[29.38px] leading-[130%] ff_HelveticaNeue  '>THE FOUR PHASES OF</h2>
                        <p className='ff_HelveticaNeue font-normal text-[#000] leading-[120%] text-[27px] sm:text-[40px] md:text-[46px] lg:text-[52px] mb-[10px] md:mb-[19px]'>SEPARATION
                            <span className='text-[#F77B0B] lg:block'>MINDSET</span></p>
                        <p className='ff_poppins font-normal text-[14px] sm:text-[16px] text-[#000] mb-[15px] sm:mb-[25px] md:mb-[36.5px] leading-[150%] sm:leading-[163%]'>There are 4 typical separation phases. The 4 phases are not <span className='lg:block'>always clearly separated from each other and can overlap.</span></p>
                        <div>
                            <button className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] p-[2px] hover:shadow-[0_3px_20px_rgba(135,_3,_197,_1)] capitalize text-nowrap transition-all ease-linear duration-500 rounded-[63px] ">
                                <div className=' bg-[#fff] rounded-[63px] flex items-center gap-[4px] py-[9px] sm:py-[2.7px] pl-[5px] pr-[10px] md:pl-[9px] md:pr-[48px]'>
                                    <img src={bookbtnimg} alt="bookbtnimg" className='sm:max-w-[50px] max-w-[25px] w-full' />
                                    <span className='bg-gradient-to-br from-[#0C5FD1] to-[#8703C5] bg-clip-text text-transparent inline-block ff_inter font-medium text-[14px] md:text-[16px] capitalize  '> Book a non-binding initial consultation now</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-[49%] w-full relative mt-[30px] lg:mt-0'>
                        <button className='absolute bottom-[70px] lg:bottom-[22px] left-[46%] lg:left-[-6%] z-10' onClick={() => slider?.current?.slickNext()}>
                            <img src={leftarrow} alt="leftarrow" className=' max-w-[18px] hidden lg:block' />
                            <img src={left2} alt="left2" className=' max-w-[18px] lg:hidden block' />
                        </button>
                        <button className='absolute bottom-[70px] lg:bottom-[22px] left-[54%] sm:left-[51%] lg:left-[4%] z-10' onClick={() => slider?.current?.slickPrev()}>
                            <img src={rightarrow} alt="rightarrow" className=' max-w-[18px]' />
                        </button>
                        <Slider ref={slider} {...settings}>
                            <div>
                                <div className='bg-[#003E92] flex justify-center items-center flex-col pt-[70px] sm:pt-[133px] pb-[145px] sm:pb-[183px] relative'>
                                    <img src={layer} alt="layer" className='absolute right-0 bottom-0' />
                                    <p className='text-center text-[#fff] ff_poppins font-medium text-[18px] md:text-[20px] mb-[15px] leading-[160%] max-w-[316px]'>1st phase "The not-wanting-to-be-true"</p>
                                    <p className='ff_poppins font-normal text-[14px] md:text-[16px] leading-[163%] max-w-[364px] text-[#fff] text-center'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#003E92] flex justify-center items-center flex-col pt-[70px] sm:pt-[133px] pb-[145px] sm:pb-[183px] relative'>
                                    <img src={layer} alt="layer" className='absolute right-0 bottom-0' />
                                    <p className='text-center text-[#fff] ff_poppins font-medium text-[18px] md:text-[20px] mb-[15px] leading-[160%] max-w-[316px]'>1st phase "The not-wanting-to-be-true"</p>
                                    <p className='ff_poppins font-normal text-[14px] md:text-[16px] leading-[163%] max-w-[364px] text-[#fff] text-center'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#003E92] flex justify-center items-center flex-col pt-[70px] sm:pt-[133px] pb-[145px] sm:pb-[183px] relative'>
                                    <img src={layer} alt="layer" className='absolute right-0 bottom-0' />
                                    <p className='text-center text-[#fff] ff_poppins font-medium text-[18px] md:text-[20px] mb-[15px] leading-[160%] max-w-[316px]'>1st phase "The not-wanting-to-be-true"</p>
                                    <p className='ff_poppins font-normal text-[14px] md:text-[16px] leading-[163%] max-w-[364px] text-[#fff] text-center'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                            <div>
                                <div className='bg-[#003E92] flex justify-center items-center flex-col pt-[70px] sm:pt-[133px] pb-[145px] sm:pb-[183px] relative'>
                                    <img src={layer} alt="layer" className='absolute right-0 bottom-0' />
                                    <p className='text-center text-[#fff] ff_poppins font-medium text-[18px] md:text-[20px] mb-[15px] leading-[160%] max-w-[316px]'>1st phase "The not-wanting-to-be-true"</p>
                                    <p className='ff_poppins font-normal text-[14px] md:text-[16px] leading-[163%] max-w-[364px] text-[#fff] text-center'>This phase is characterized by denial and ignoring the final separation.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeparationSection
