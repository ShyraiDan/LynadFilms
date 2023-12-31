import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { textAnimation } from '../../../../helpers/animations'

import { StarCardGrid } from '../../../../components/StarCardGrid'
import { StarCard } from '../../../../components/StarCard'

import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs'

import { crew } from '../../../../data/crew'

export const StarList: FC = () => {
  const [typeCard, setTypeCard] = useState('grid')
  const { t } = useTranslation()

  return (
    <motion.div custom={1} variants={textAnimation} className='pb-20'>
      <div className='pb-4'>
        <div className='border-0 border-y border-grey border-solid sm:flex items-center justify-between py-2'>
          <p className='text-grey text-sm mb-2 sm:mb-0'>
            {t('filters.found')} {crew.length} {t('filters.stars')} {t('filters.total')}
          </p>
          <div className='flex justify-between items-center'>
            <div className=' flex justify-between items-center wrap'>
              <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
                {t('filters.sort')}
              </label>
              <select name='filmSorting' id='' className='text-grey bg-selects-bg text-sm font-light py-1.5 px-3'>
                <option value=''>
                  {t('filters.rating')} {t('filters.descending')}
                </option>
                <option value=''>
                  {t('filters.rating')} {t('filters.ascending')}
                </option>
                <option value=''>
                  {t('filters.release date')} {t('filters.descending')}
                </option>
                <option value=''>
                  {t('filters.release date')} {t('filters.ascending')}
                </option>
              </select>
            </div>

            <div className='flex px-2'>
              <BsFillGrid3X3GapFill
                className='mr-2 text-grey lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                onClick={() => setTypeCard('grid')}
              />
              <BsListUl
                size={'18px'}
                className='text-grey lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                onClick={() => setTypeCard('list')}
              />
            </div>
          </div>
        </div>
      </div>

      {typeCard === 'list' &&
        crew.map((item, i) => {
          return <StarCard key={item.name} data={item} i={i} />
        })}

      {typeCard === 'grid' && (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {crew.map((item, i) => {
            return <StarCardGrid key={item.name} data={item} i={i} />
          })}
        </div>
      )}
    </motion.div>
  )
}
