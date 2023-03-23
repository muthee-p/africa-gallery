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
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/artwork/mchechu"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

	<div className='flex flex-col items-center md:flex-row p-8'>
		
		<div className='md:w-[45%] mb-6'>
		<h4 className='mb-4'>"MUSIC"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
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
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
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
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/artwork/kupoayo"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>
	
	<div className='flex flex-col items-center md:flex-row p-8'>
		
		<div className='md:w-1/2 mb-6'>
		<h4 className='mb-4'>"BEAUTIFUL TRADITION"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
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
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/artwork/mchechu"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

    </div>
    )
}
export default Artwork ;