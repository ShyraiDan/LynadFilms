import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { changeTheme } from '../../redux/slices/theme'

import { FaChevronDown, FaDesktop, FaSun, FaCloud } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../redux/hook'

interface ITheme {
  textStyle: string
  burger?: boolean
}

export const Theme: FC<ITheme> = ({ textStyle, burger }) => {
  const [openTheme, setOpenTheme] = useState(false)
  const dispatch = useAppDispatch()
  const currTheme = useAppSelector(({ theme }) => theme.theme)
  const { t } = useTranslation()

  const options = [
    { icon: <FaSun className='mr-2' />, text: t('header.light') },
    { icon: <FaCloud className='mr-2' />, text: t('header.dark') },
    { icon: <FaDesktop className='mr-2 mt-0.5' />, text: t('header.system') }
  ]

  return (
    <>
      <div className={`select-none cursor-pointer ${textStyle}`} onClick={() => setOpenTheme((state) => !state)}>
        <span className='flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'>
          {t('header.theme')} <FaChevronDown className={`ml-1 ${openTheme && 'rotate-180'}`} />
        </span>
      </div>
      {openTheme && (
        <ul className={`w-28 top-6 ${burger && 'right-0'} text-white absolute bg-dark-blue p-2.5 rounded`}>
          {options.map((item) => {
            return (
              <li
                key={item.text}
                className={`flex mb-1 select-none items-center cursor-pointer capitalize lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 ${
                  currTheme === item.text && 'text-[purple] dark:text-yellow'
                }`}
                onClick={() => dispatch(changeTheme(item.text))}
              >
                {item.icon}
                {item.text}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
