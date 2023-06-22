import React from 'react';
import { Link } from 'react-router-dom';
import BonMwiruOne from '../assets/bonmwiru.jpeg';

const BonMwiru = () => {
  return (
    <div className="content">
    <h2 className='mb-4 text-center'>ATUS </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={BonMwiruOne} alt="woman playing music" className='w-[30%] rounded-2xl' />
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>

		
			Born and raised in the heart of Africa, Bon Mwiru is a remarkable artist whose creative journey is deeply rooted in the vibrant tapestry of the continent. With a profound passion for storytelling through art, Bon Mwiru channels the rich cultural heritage, spiritual traditions, and diverse landscapes of Africa into their captivating creations. Their artistic exploration spans various mediums, including painting, sculpture, and mixed media, resulting in a body of work that embodies both the raw essence and contemporary spirit of Africa.
		</p> <br />
		<p>
			Drawing inspiration from the resilience and beauty of African communities, Bon seamlessly weaves together elements of tradition and modernity in their art. Their use of bold colors, intricate patterns, and dynamic compositions reflects a deep connection to African aesthetics, while simultaneously challenging conventional norms and embracing new forms of expression. Through their work, Bon aims to provoke dialogue, shed light on social issues, and celebrate the rich cultural diversity that defines Africa.
	  	</p> <br />
		<p> 
	  		Having exhibited their art nationally and internationally, Bon has garnered recognition for their unique artistic vision and technical prowess. Their powerful creations have graced galleries, museums, and private collections, captivating viewers with their ability to transcend boundaries and touch the hearts of individuals from all walks of life. Bon continues to push artistic boundaries, using their talent as a catalyst for change and a testament to the boundless creativity that flows through Africa's artistic veins.
	  	</p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/bonmwiru/bonmwiruslide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={BonMwiruOne} alt="woman" />
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
export default BonMwiru ;
