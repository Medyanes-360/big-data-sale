import Icons from '@/public/assets/icons/Icons';
import Image from 'next/image';

const TestimonialsHeader = ({ onPrevClick, onNextClick }) => {
  return (
    <div className='flex justify-between items-center mt-2'>
      <div className='leading-[54px] font-bold text-[32px] text-tertiary400 relative pe-11 pt-4'>
        Müşterilerimizin
         <br />
        <span className='text-white'>
          Başarı hikayeleri
        </span>
        <div className="absolute right-0 top-0 w-11 h-11 rounded-lg bg-white rotate-[24deg]">
        <Image src='/assets/images/msg.svg' alt="msg icon" fill />
        </div>
      </div>
      <div className='flex gap-4'>
        <button onClick={onPrevClick} className="cursor-pointer transition duration-150 text-manatee hover:text-tertiary400">
          <Icons.PrevArrow  />
        </button>
        <button onClick={onNextClick} className="cursor-pointer transition duration-150 text-manatee hover:text-tertiary400">
          <Icons.NextArrow  />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsHeader;
