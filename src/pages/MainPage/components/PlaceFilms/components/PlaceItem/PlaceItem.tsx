import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './PlaceItem.scss'

import { ViewAll } from '../../../../../../components/ViewAll'

import { TFilms } from '../../../../../../data'

interface IPlaceItem {
	data: {
		title: string
		link: string
		items: TFilms[]
	}
}

export const PlaceItem: FC<IPlaceItem> = ({ data }) => {
	return (
		<div className='mb-10'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-white text-2xl uppercase font-bold'>
					{data.title}
				</h2>
				<ViewAll link={data.link} text={'View All'} />
			</div>
			<ul className='md:flex'>
				<li className='text-grey uppercase mb-4 text-sm font-bold md:mr-2'>
					#Popular
				</li>
				<li className='text-grey uppercase mb-4 text-sm font-bold md:mr-2'>
					#Coming soon
				</li>
				<li className='text-grey uppercase mb-4 text-sm font-bold md:mr-2'>
					#Top rated
				</li>
				<li className='text-grey uppercase mb-4 text-sm font-bold'>
					#Most reviewed
				</li>
			</ul>

			<Swiper
				pagination={{
					clickable: true,
				}}
				loop={true}
				slidesPerView={1}
				breakpoints={{
					600: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					},
				}}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}

				spaceBetween={10}
				modules={[Pagination, Autoplay]}
				className='mySwiper'>
				{data.items.map((item: TFilms) => {
					return (
						<SwiperSlide>
							<div className='flex item-center justify-center mt-7'>
								<img
									src={item.img}
									alt=''
									className='rounded mainPage__img placeItem__img'
								/>
							</div>
						</SwiperSlide>
					)
				})}{' '}
			</Swiper>
		</div>
	)
}