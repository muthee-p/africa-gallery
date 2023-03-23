import React, {useState} from 'react';
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import Kamyoso from '../../assets/kamyoso1.jpeg';
import KamyosoTwo from '../../assets/kamyoso2.jpeg';
import KamyosoThree from '../../assets/kamyoso3.jpeg';


const KamyosoSlide = () => {
	const slide =[
	{
		imge: Kamyoso
	},
	{
		imge: KamyosoTwo
	},
	{
		imge: KamyosoThree
	}
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const prevSlide = () => {
		 const isFirst = currentIndex === 0;
		 const newIndex = isFirst ? slide.length - 1 : currentIndex - 1;
		 setCurrentIndex(newIndex);

	};
	const nextSlide = () =>{
		const isLast = currentIndex === slide.length -1;
		const newIndex = isLast ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

  return (
  	<div className='items-start relative'>
  		

  		{slide.map((slider, index) => {
  			return (
  				<div className={index === currentIndex ? 'duration-300 transition-opacity scale-75 flex justify-center' : 'duration-300 transition-opacity flex justify-center'} key={index} >
  				{index ===  currentIndex && (<img src={slider.imge} alt='Kamyosos Art' className='w-[50%] '/> )}
  			</div>
  			)
  		})}
  		
  		
  		<div className ='absolute top-[50%] -translate-x-0 translate-y-[-50% left-16 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
  			< MdArrowBackIos onClick={prevSlide} />
  		</div>
  		<div className ='absolute top-[50%] -translate-x-0 translate-y-[-50% right-16 text-2xl p-2 bg-black/20 text-white cursor-pointer'>
  		 	<MdArrowForwardIos onClick={nextSlide} />
  		 </div>
  	</div>
  	);
}
export default KamyosoSlide;