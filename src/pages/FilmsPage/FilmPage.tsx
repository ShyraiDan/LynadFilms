import { FC } from 'react'

import { FilmsFilter } from './components/FilmsFilter'
import { FilmsList } from './components/FilmsList'

export const FilmPage: FC = () => {
  return (
    <div className='pt-32 bg-main-bg'>
      <div className='container lg:flex mx-auto flex-row-reverse lg:justify-center'>
        <div className='px-4'>
          <FilmsFilter />
        </div>
        <div className='px-4'>
          <FilmsList />
        </div>
      </div>
    </div>
  )
}
