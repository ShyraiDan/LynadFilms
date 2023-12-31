import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PersonList } from '../../../../components/PersonList'
import { MoreInfoItem } from './components/MoreInfoItem'

import { FaChevronDown } from 'react-icons/fa'

import { TFilms } from '../../../../data/types'

interface IOverview {
  data: TFilms
}

export const Overview: FC<IOverview> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <p className='mb-3'>
        Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile,
        The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes
        must come together once again to protect the world from global extinction.
      </p>
      <div className='my-10'>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
          <h4 className='text-white uppercase font-bold text-sm'>{t('singleFilm.videos and photos')}</h4>
          <a
            href=''
            className='text-blue text-xs flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
          >
            {t('mainPage.view all')} <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
          </a>
        </div>
        <div className='mt-5 lg:max-w-slider-lg xl:max-w-slider-2xl'>
          <Swiper
            pagination={{
              clickable: true
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              600: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 4
              }
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {data.photos.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={item} alt='' />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className='mb-4'>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
          <h4 className='text-white uppercase font-bold text-sm'>{t('singleFilm.actors')}</h4>
          <a
            href=''
            className='text-blue text-xs flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
          >
            {t('singleFilm.full cast and crew')}
            <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
          </a>
        </div>
        <PersonList data={data.stars} />
      </div>
      <div className='pb-4'>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
          <h4 className='text-white uppercase font-bold text-sm'>{t('singleFilm.more info')}</h4>
        </div>
        <ul className='pl-4'>
          <MoreInfoItem text={t('singleFilm.director')} data={data.director} />
          <MoreInfoItem text={t('singleFilm.writer')} data={data.writer} />
          <li className='flex justify-between font-bold text-sm py-3'>
            {t('singleFilm.genres')}
            <div className='text-blue font-normal'>
              {data.tags.map((item, i, arr) => {
                return (
                  <Link key={item} to={``} className='lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
                    {arr.length - 1 === i ? item : item + ' '}
                  </Link>
                )
              })}
            </div>
          </li>
          <li className='flex justify-between font-bold text-sm py-3'>
            {t('singleFilm.release date')}
            <span className='font-normal'>
              {data.date} ({data.country})
            </span>
          </li>
          <li className='flex justify-between font-bold text-sm py-3'>
            {t('singleFilm.run time')} <span className='font-normal'>{data.duration}</span>
          </li>
          <li className='flex justify-between font-bold text-sm py-3'>
            MMPA {t('singleFilm.rating')}: <span className='font-normal'>{data.mmpa}</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
