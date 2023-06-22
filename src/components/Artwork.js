import React from 'react';
import { Link } from 'react-router-dom';
import Atus from '../assets/Atus.jpeg';
import MchechuThree from '../assets/mchechu3.jpeg';
import Mchechu from '../assets/mchechu.jpeg';
import BonMwiru from '../assets/bonmwiru.jpeg';
import KamyosoTwo from '../assets/kamyoso2.jpeg';
import Kupoayo from '../assets/kupoayo.jpeg';


const Artwork = () => {
  return (
    <div className='mt-32 pl-8'>

    <h2 className='text-center'>FEATURED ART</h2>
	<div className='flex flex-col items-center md:flex-row p-8'>
		<div className='md:w-1/2 flex justify-center' >
			<img src={MchechuThree} alt='lion' className='md:w-1/2'/>
			</div>
		<div className='md:w-[45%] '>
		<h4 className='mb-4'>"BOLD"</h4>
		<p>
			In the captivating black and white painting of a lion, monochromatic strokes create a mesmerizing contrast, emphasizing the raw power and majestic presence of the regal beast. The artist skillfully captures the intricate details of the lion's fur, each stroke revealing the play of light and shadow, while the absence of color heightens the intensity and focus on the lion's piercing gaze. 
		</p>
		<Link to="/artwork/mchechu"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

	<div className='flex flex-col items-center md:flex-row p-8'>
		
		<div className='md:w-[45%] mb-6'>
		<h4 className='mb-4'>"MUSIC"</h4>
		<p>
			African woman emerges as a radiant muse, skillfully captivating the essence of music through her poised form and the melodic notes that dance from her instrument. As her fingers effortlessly glide across the strings or keys, her face reflects a symphony of emotions, from serenity to ecstasy, as she becomes one with the soul-stirring melodies that echo through the canvas. The vibrant colors and intricate details evoke a sense of rhythm and harmony, paying homage to the rich musical traditions of Africa.
		</p>
		<Link to="/artwork/bonmwiru"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='md:w-1/2 flex justify-center'  >
			<img src={BonMwiru} alt='woman playing instrument' className='md:w-1/2'/>
		</div>
	</div>

	<div className='flex flex-col items-center md:flex-row p-8'>
		
		<div className='md:w-[45%] mb-6 '>
		<h4 className='mb-4'>"MOTHER & SON"</h4>
		<p>
			The majestic mother stands tall, her ivory tusks glistening in the sunlight, while the adorable calf exudes an innocent charm as it playfully nudges its mother's massive legs. Their trunks intertwine in a graceful display of affection, symbolizing the unbreakable bond between generations. The artist skillfully captures the raw beauty of these magnificent creatures, transporting viewers to a moment of pure joy and harmony in the natural world.
		</p>
		<Link to="/artwork/kamyoso"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='md:w-1/2 flex justify-center'  >
			<img src={KamyosoTwo} alt='elephant and calf'  className='md:w-1/2'/>
			</div>
	</div>

	<div className='flex flex-col items-center md:flex-row p-8'>
		<div className='md:w-1/2 flex justify-center'  >
			<img src={Kupoayo} alt='woman' className='md:w-1/2'/>
			</div>
		<div className='md:w-[45%] '>
		<h4 className='mb-4'>"WOMAN"</h4>
		<p>
			The painting emanates a sense of strength, resilience, and unapologetic self-expression as the intricate strands of her hair seem to burst with life and vitality. Her confident gaze, filled with wisdom and a hint of mischief, invites us to explore the depths of her captivating personality and the stories woven within her remarkable heritage. 
		</p>
		<Link to="/artwork/kupoayo"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>
	
	<div className='flex flex-col items-center md:flex-row p-8'>
		
		<div className='md:w-1/2 mb-6'>
		<h4 className='mb-4'>"BEAUTIFUL TRADITION"</h4>
		<p>
			Her eyes sparkle with joy, reflecting a lifetime of rich experiences and wisdom. Adorned in colorful traditional garments, her presence is captivating, exuding a sense of pride in her cultural heritage. The artist skillfully captures the intricate details of her beaded jewelry and the graceful lines of her facial features, showcasing the beauty and strength of this remarkable Maasai woman. 
		</p>
		<Link to="/artwork/atus"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='md:w-1/2flex justify-center'  >
		<Link to="/artwork/jamesobonyo"><img src={Atus} alt="Maasai woman" className='md:w-1/2'/></Link>
		</div>
	</div>
	
	<div className='flex flex-col items-center md:flex-row p-8'>
		<div className='md:w-1/2 flex justify-center'  >
			<img src={Mchechu} alt="cheetar" className='md:w-1/2'/>
			</div>
		<div className='md:w-1/2 '>
		<h4 className='mb-4'>"AGILITY"</h4>
		<p>
			The intense gaze of a leopard takes center stage, captivating viewers with its piercing eyes and graceful presence. The artist skillfully captures the sleekness of the leopard's fur, dappled with intricate patterns that mirror the untamed wilderness it inhabits. Against a backdrop of lush green foliage, the leopard's focused expression exudes both power and elegance, symbolizing the raw beauty and untamed spirit of Africa's majestic wildlife.
		</p>
		<Link to="/artwork/mchechu"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

    </div>
    )
}
export default Artwork ;
