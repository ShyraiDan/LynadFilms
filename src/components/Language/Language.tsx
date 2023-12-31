import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ua from '../../i/ua.svg'
import usa from '../../i/usa.svg'
import { FaChevronDown } from 'react-icons/fa'

interface ILanguage {
  textStyle: string
}

export const Language: FC<ILanguage> = ({ textStyle }) => {
  const [openLang, setOpenLang] = useState(false)
  const { i18n, t } = useTranslation()
  return (
    <>
      <div className={`select-none cursor-pointer ${textStyle}`} onClick={() => setOpenLang((state) => !state)}>
        <span className='flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'>
          {t('header.language')} <FaChevronDown className={`ml-1 ${openLang && 'rotate-180'}`} />
        </span>
      </div>
      {openLang && (
        <ul className='w-24 top-6 text-white absolute bg-dark-blue p-2.5 rounded'>
          <li
            className='flex mb-2 select-none cursor-pointer lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
            onClick={() => i18n.changeLanguage('ua')}
          >
            {' '}
            <img src={ua} alt='' className='w-5 mr-2' />
            UA
          </li>
          <li
            className='flex select-none cursor-pointer lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
            onClick={() => i18n.changeLanguage('en')}
          >
            <img src={usa} alt='' className='w-5 mr-2' />
            USA
          </li>
        </ul>
      )}
    </>
  )
}
