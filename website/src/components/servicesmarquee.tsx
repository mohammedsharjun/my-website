"use client";
import { cn } from '../lib/utils';
import { Marquee } from './ui/marquee';


const reviews = [
    {
        img: "/images/goodui.jpg",
    },
    {
        img: "/images/saas.jpg",
    },
    {
        img: "/images/business.jpg",
    },
    {
        img: "/images/agency.jpeg",
    },
    {
        img: "/images/agency.jpg",
    },
    {
        img: "/images/finance.jpg",
    },
]
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
    return (
       <figure
       className={cn(
        "relative h-48 w-72 sm:h-56 sm:w-80 md:h-64 md:w-96 lg:h-80 lg:w-[28rem] cursor-pointer overflow-hidden rounded-xl border",
        // dark styles
        "border-gray-50/[.1] hover:opacity-80 transition-opacity"  
    )}
       >
        <img className="w-full h-full object-cover p-2 sm:p-2.5 md:p-3 rounded-2xl sm:rounded-3xl" alt="" src={img} />
       </figure>
    )
}

export default function ServicesMarquee() {
    return (
    <div className="relative flex w-full flex-col my-6 sm:my-8 md:my-10 mb-16 sm:mb-20 md:mb-24 1g:mb-30 items-center justify-center overflow-hidden px-4">
    <div className='flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4'>
    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#dac6ff] rounded-full"></div>
    <span className="text-[#dac6ff] font-medium text-xs sm:text-sm md:text-base">Founder's Shortcut to Power</span>
    </div>
    
    {/* Main Heading */}
    <h2 className="text-2x1 sm: text-3xl md:text-4xl 1g:text-5x1 x1:text-6xl text-center font-medium text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-4">
    Why Hustlers Choose Fitrova
    </h2>
    {/* Description */}
    <p className="text-sm sm:text-base md:text-1g 1g:text-xl text-white/50 text-center italic mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-1g 1g:max-w-2xl mx-auto leading-relaxed px-4">
    Quit the grind. Unlock fast results, real growth, and founder-level speed with Fitrova.
    </p>

    <Marquee pauseOnHover className="[ -- duration: 20s]">
      {firstRow.map((review) => (
       <ReviewCard { ... review} />
       ))}
       </Marquee>
    <Marquee reverse pauseOnHover className="[ -- duration:20s]">
       {secondRow.map((review) => (
        <ReviewCard { ... review} />
       ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#140c16] to-transparent"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-1 from-[#140c16] to-transparent"></div>
    </div>
    )
}


