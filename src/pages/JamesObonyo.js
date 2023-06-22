import React from 'react';
import { Link } from 'react-router-dom';
import AtusArt from '../assets/Atus.jpeg';

const JamesObonyo = () => {
  return (
    <div className="content">
    <h2 className='mb-4 text-center'>ATUS </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={AtusArt} alt="woman" className='w-[30%] rounded-2xl' />
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>
			Hailing from the enchanting landscapes of Africa, James Obonyo is an extraordinary visionary who uses art as a medium to bridge cultures and ignite conversations. Rooted in their deep reverence for African traditions and the transformative power of art, James channels their experiences and emotions into mesmerizing creations that evoke a profound sense of introspection and connection. Through their masterful brushstrokes, [Artist's Name] captures the essence of Africa's soul, celebrating its diverse heritage and shedding light on its nuanced narratives.
	  </p> <br />
		<p>
			With an intuitive understanding of color, texture, and composition, James crafts captivating artworks that are as visually stunning as they are thought-provoking. Their pieces often feature symbolic imagery, intertwining elements of nature, spirituality, and human experiences. Drawing inspiration from the resilience of African communities, James infuses their work with themes of identity, social justice, and the preservation of cultural legacy, using art as a catalyst for change and a vehicle for storytelling.
		</p> <br />
		<p>
	  		Recognized for their artistic contributions, James has exhibited their work in prestigious galleries and art institutions across the globe. Their art has captivated audiences with its profound depth and ability to evoke emotions, encouraging viewers to contemplate the complexities of the African experience. As James continues to evolve and push boundaries, their unwavering dedication to African artistry and their commitment to creating a dialogue between cultures ensures that their unique voice will resonate for generations to come, leaving an indelible mark on the global art scene.
	  	</p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<Link to='/artwork/jamesobonyo/jamesobonyoslide' className=' h-[36rem] flex justify-center mb-4'>
				<img src={AtusArt} alt="woman" />
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
export default JamesObonyo ;
