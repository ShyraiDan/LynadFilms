import { FC } from 'react'
import './Filmlist.scss'

import { TFilmFake } from '../../../../data'

interface IFilmlist {
	data: TFilmFake[]
}

export const Filmlist: FC<IFilmlist> = ({ data }) => {
	return (
		<ul>
			{data.map((item) => {
				return (
					<li className='flex items-center py-3'>
						<img src={item.image} alt='' className='rounded filmList__photo' />
						<div className='ml-4'>
							<h3 className='text-blue'>
								<a href=''>{item.name}</a>{' '}
								<span className='text-grey'>({item.year})</span>
							</h3>
							<p>{item.role}</p>
						</div>
					</li>
				)
			})}
		</ul>
	)
}