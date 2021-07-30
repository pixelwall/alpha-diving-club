import Image from 'next/image'

const Gallery = ({ props }) => (
	<div className='my-12 mx-auto px-8 container'>
		<h4 className='mb-6 text-3xl'>{props.title}</h4>
		<div className='grid grid-cols-4 gap-7'>
			{props.pictures.map((p) => (
				<Image
					src={p}
					alt=''
					width={541}
					height={641}
					objectFit='cover'
					layout='intrinsic'
					className='hover:cursor-pointer'
				/>
			))}
		</div>
	</div>
)

export default Gallery
