import { FC, useRef, useState } from 'react'
import './Burger.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SocialBlock } from '../../../../components/SocialBlock'
import { Language } from '../../../../components/Language'
import { Theme } from '../../../../components/Theme'
import { changeOverflow } from '../../../../helpers/helpers'

import logo from '../../../../i/logo1.png'

import { BsGeoAltFill, BsFillTelephoneFill } from 'react-icons/bs'

export const Burger: FC = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const burger = useRef<HTMLDivElement>(null)
  const burgerBtn = useRef<HTMLDivElement>(null)

  const burgerClick = () => {
    open === false ? setOpen(true) : setOpen(false)
    if (burgerBtn.current) {
      burgerBtn.current.classList.toggle('burger__active')
    }
    if (burger.current) {
      burger.current.classList.toggle('burger__active')
    }

    changeOverflow(open)
  }

  const links = [
    { link: '/films', text: t('header.movies') },
    { link: '/stars', text: t('header.celebrities') },
    { link: '/news', text: t('header.news') }
  ]

  return (
    <>
      <div onClick={burgerClick} ref={burgerBtn} className='flex flex-col w-9 h-9 p-2 lg:hidden cursor-pointer'>
        <span className={'burger__line'}></span>
        <span className={'burger__line burger__line_two'}></span>
        <span className={'burger__line burger__line_three'}></span>
      </div>

      <div className='burger flex flex-col px-3 bg-selects-bg fixed h-full' ref={burger}>
        <div className='flex justify-center '>
          <img src={logo} alt='logo' className='w-2/6 mb-10' />
        </div>
        <ul>
          {links.map((item) => {
            return (
              <li key={item.text} className='border-0 border-b border-solid border-grey pb-2 mb-3'>
                <Link to={item.link} className='text-white'>
                  {item.text}
                </Link>
              </li>
            )
          })}
          <li className='flex justify-between'>
            <div className='relative'>
              <Language textStyle={'text-white'} />
            </div>
            <div className='relative'>
              <Theme textStyle={'text-white'} burger={true} />
            </div>
          </li>
        </ul>

        <div className='text-white my-10'>
          <SocialBlock />
        </div>
        <ul>
          <li className='text-white flex pt-3'>
            <BsGeoAltFill className={'mr-2'} />
            {t('footer.address')} <br /> {t('footer.new york')}, NY 10001
          </li>
          <li className='text-white mt-3 flex'>
            <BsFillTelephoneFill className={' mr-2'} /> {t('footer.call')}{' '}
            <a href='tel:(+01) 202 342 6789'>(+01) 202 342 6789</a>
          </li>
        </ul>
      </div>
    </>
  )
}
