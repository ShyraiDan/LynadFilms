import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './MainPageSlider.scss'

import { SocialBlock } from '../../../../components/SocialBlock'

import { FaStar } from 'react-icons/fa'

import { films } from '../../../../data'

export const MainPageSlider: FC = () => {
	return (
		<div className='pt-36 bg-slider pb-10'>
			<div className='mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
				<div className='flex justify-end items-center font-bold text-sm text-white'>
					Follow us: <SocialBlock />
				</div>
				<div className='flex items-center justify-center mt-7'>
					<Swiper
						pagination={{
							clickable: true,
						}}
						loop={true}
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							600: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							992: {
								slidesPerView: 4,
							},
						}}
						// autoplay={{
						// 	delay: 2500,
						// 	disableOnInteraction: false,
						// }}

						modules={[Pagination, Autoplay]}
						className='mySwiper'>
						{films.map((item) => {
							return (
								<SwiperSlide>
									<div className='flex justify-center'>
										<div className='relative top-0 left-0'>
											{' '}
											<a href={item.link}>
												<img
													src={item.img}
													alt=''
													className='rounded mainPage__img'
												/>
											</a>
											<div className='absolute bottom-3 left-3'>
												<div className='flex mb-2'>
													{item.tags.map((item) => {
														return (
															<div className=' uppercase rounded bg-blue text-white text-xs p-1 font-bold'>
																{item}
															</div>
														)
													})}
												</div>
												<a href='' className='uppercase text-white font-bold'>
													{item.name}
												</a>
												<p className='flex text-xs items-end text-white leading-4'>
													<FaStar fill='#f5b50a' className='mr-0.5 text-lg' />{' '}
													<span className='text-lg leading-4 mr-1'>
														{item.rating}
													</span>
												</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</div>
	)
}