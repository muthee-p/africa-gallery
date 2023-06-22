import React from 'react';
import { Link } from 'react-router-dom';
import KamyosoOne from '../assets/kamyoso1.jpeg';
import KamyosoTwo from '../assets/kamyoso2.jpeg';
import KamyosoThree from '../assets/kamyoso3.jpeg';

const Kamyoso = () => {
  return (
    <div >
    <h2 className='mb-4 text-center'>KAMYOSO</h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={KamyosoOne} className='w-[30%] rounded-2xl' alt='zebra drinking water' />
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>
			Born and raised in the heartlands of Africa, Kamyoso is a visionary artist whose creations embody the soul-stirring essence of the continent. With a deep reverence for the natural beauty that surrounds them, Kamyoso finds inspiration in the diverse landscapes, wildlife, and ancestral traditions of Africa. Their artistic repertoire spans across various mediums, including painting, sculpture, and installation, each piece meticulously crafted to reflect their profound connection to the land and its people.
		</p> <br />
		<p>
	  		Through their art, Kamyoso seeks to evoke a sense of harmony and balance, inviting viewers to contemplate the intricate interplay between humanity and nature. Their works often showcase vibrant color palettes, dynamic forms, and intricate details that bring to life the diverse flora and fauna of Africa. Rooted in a deep cultural understanding, Kamyoso incorporates elements of traditional symbolism and mythology into their art, weaving narratives that resonate with both local communities and global audiences.
		</p> <br />
		<p> As an ambassador of African creativity, Kanyoso has showcased their work in renowned galleries, exhibitions, and art festivals, both within Africa and internationally. Their profound artistic vision and technical skill have garnered recognition and accolades, yet their humble spirit remains deeply committed to uplifting African art and artists. By capturing the essence of Africa's enchanting spirit in their creations, Kamyoso continues to inspire and provoke dialogue, showcasing the rich artistic heritage of the continent to the world, and fostering a deeper appreciation for the boundless talent that Africa beholds.
	  </p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
		<Link to='/artwork/kamyoso/kamyososlide'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ KamyosoOne} alt='zebra drinking water'/>
			</div>
			</Link>
			<h5>Thirst</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/kamyoso/kamyososlide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={KamyosoTwo} alt='two elephants'/>
			</Link>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/kamyoso/kamyososlide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={ KamyosoThree} alt='two elephants'/>
			</Link>
		<h5>For Two</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>
    </div>
    
    </div>
    )
}
export default Kamyoso ;
