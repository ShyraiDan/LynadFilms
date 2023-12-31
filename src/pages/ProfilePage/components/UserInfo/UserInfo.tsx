import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { textAnimation } from '../../../../helpers/animations'

import img from '../../../../i/crew1-1.jpg'

interface IUserInfo {
  page: number
  changePage: (page: number) => void
}

export const UserInfo: FC<IUserInfo> = ({ page, changePage }) => {
  const { t } = useTranslation()

  const buttons = [t('profilePage.profile'), t('profilePage.favorite movies')]

  return (
    <motion.div custom={1} variants={textAnimation} className='px-3 lg:pl-0'>
      <div className='border-3 border-solid border-header-border bg-transparent mb-10 text-white'>
        <div className='p-6 flex items-center flex-col border-0 border-solid border-b-2 border-header-border'>
          <img src={img} alt='' className='w-28 h-28 rounded-full mb-4' />
          <button className='rounded-md text-[#fff] bg-red font-bold py-3.5 px-6 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer '>
            {t('profilePage.change avatar')}
          </button>
        </div>
        <div className='py-6 px-4 border-0 border-solid border-b-2 border-header-border'>
          <h3 className='mb-3'>{t('profilePage.account details')}</h3>

          <ul>
            {buttons.map((item, i) => {
              return (
                <li
                  key={item}
                  onClick={() => changePage(i)}
                  className={`text-sm uppercase mb-4 font-bold dark:lg:hover:text-yellow lg:hover:text-[purple] ease-out duration-300 cursor-pointer ${
                    page === i && 'text-[purple] dark:text-yellow'
                  }  `}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='py-6 px-4'>
          <h3 className='mb-3'>{t('profilePage.others')}</h3>

          <Link
            to='/'
            className='text-sm uppercase mb-4 font-bold dark:lg:hover:text-yellow lg:hover:text-[purple] ease-out duration-300'
          >
            {t('profilePage.out')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
