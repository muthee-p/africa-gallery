import React from 'react';
import { Link } from 'react-router-dom';
import MchechuOne from '../assets/mchechu.jpeg';
import MchechuTwo from '../assets/mchechu2.jpeg';
import MchechuThree from '../assets/mchechu3.jpeg';

const Mchechu = () => {
  return (
    <div className="content">
    <h2 className='mb-4 text-center'>MCHECHU </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={MchechuOne} className='w-[30%] rounded-2xl' alt="chui" />
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>
			
Born and raised in the heartlands of Africa, Mchechu is a visionary artist whose creations embody the soul-stirring essence of the continent. With a deep reverence for the natural beauty that surrounds them, Mchechu finds inspiration in the diverse landscapes, wildlife, and ancestral traditions of Africa. Their artistic repertoire spans across various mediums, including painting, sculpture, and installation, each piece meticulously crafted to reflect their profound connection to the land and its people.
		</p> <br />
		<p>
		Through their art, Mchechu seeks to evoke a sense of harmony and balance, inviting viewers to contemplate the intricate interplay between humanity and nature. Their works often showcase vibrant color palettes, dynamic forms, and intricate details that bring to life the diverse flora and fauna of Africa. Rooted in a deep cultural understanding, Mchechu incorporates elements of traditional symbolism and mythology into their art, weaving narratives that resonate with both local communities and global audiences.
	  </p> <br />
		<p> 
	  Having exhibited their art nationally and internationally, Mchechu has garnered recognition for their unique artistic vision and technical prowess. Their powerful creations have graced galleries, museums, and private collections, captivating viewers with their ability to transcend boundaries and touch the hearts of individuals from all walks of life. He continues to push artistic boundaries, using their talent as a catalyst for change and a testament to the boundless creativity that flows through Africa's artistic veins.
	  </p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/mchechu/mchechuslide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={ MchechuOne} alt='chui' />
			</Link>
			<h5>Agile</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/mchechu/mchechuslide'  className=' h-[36rem] flex justify-center mb-4'>
				<img src={MchechuTwo} alt='zebra' />
			</Link>
			<h5>Peace</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/mchechu/mchechuslide'  className=' h-[36rem] flex justify-center mb-4'>
				<img src={ MchechuThree} alt='lion'/>
			</Link>
		<h5>Might</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>
	</div>
	
    
    </div>
    )
}
export default Mchechu ;
