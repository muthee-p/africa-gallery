import React from 'react';
import { Link } from 'react-router-dom';

import KupoayoOne from '../assets/kupoayo.jpeg';
import KupoayoTwo from '../assets/kupoayo2.jpeg';
import KupoayoThree from '../assets/kupoayo3.jpeg';

const Kupoayo = () => {
  return (
    <div>
    <h2 className='mb-4 text-center'>KUPOAYO </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src='' className='w-[30%] rounded-2xl' alt="dp"/>
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>
			Hailing from the enchanting landscapes of Africa, Kupoayo is an extraordinary visionary who uses art as a medium to bridge cultures and ignite conversations. Rooted in their deep reverence for African traditions and the transformative power of art, [Artist's Name] channels their experiences and emotions into mesmerizing creations that evoke a profound sense of introspection and connection. Through their masterful brushstrokes, Kupoayo captures the essence of Africa's soul, celebrating its diverse heritage and shedding light on its nuanced narratives.
		</p> <br />
		<p>
	  		Drawing inspiration from the resilience and beauty of African communities, Kupoayo seamlessly weaves together elements of tradition and modernity in their art. Their use of bold colors, intricate patterns, and dynamic compositions reflects a deep connection to African aesthetics, while simultaneously challenging conventional norms and embracing new forms of expression. Through their work, Kupoayo aims to provoke dialogue, shed light on social issues, and celebrate the rich cultural diversity that defines Africa.
		</p> <br />
		<p> 
	  		As an ambassador of African creativity, Kupoayo has showcased their work in renowned galleries, exhibitions, and art festivals, both within Africa and internationally. Their profound artistic vision and technical skill have garnered recognition and accolades, yet their humble spirit remains deeply committed to uplifting African art and artists. By capturing the essence of Africa's enchanting spirit in their creations, Kupoayo continues to inspire and provoke dialogue, showcasing the rich artistic heritage of the continent to the world, and fostering a deeper appreciation for the boundless talent that Africa beholds.
	  	</p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/kupoayo/kupoayoslide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={ KupoayoOne} alt="woman" />
			</Link>
			
			<h5>Woman</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<Link to="/artwork/kupoayo/kupoayoslide" className=' h-[36rem] flex justify-center mb-4'>
				<img src={KupoayoTwo} alt="maasai"/>
			</Link>
			<h5>Maa'</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/kupoayo/kupoayoslide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={ KupoayoThree} alt="mountain" />
			</Link>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
		</div>
		</div>
    
    </div>
    )
}
export default Kupoayo ;
