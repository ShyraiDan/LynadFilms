import { FC } from 'react'
import { motion } from 'framer-motion'

import { textAnimation } from '../../helpers/animations'

import { StarList } from './components/StarList'
import { StarFilter } from './components/StarFilter'

export const StarPage: FC = () => {
  return (
    <div className='pt-32 bg-main-bg'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={textAnimation}
        className='container lg:flex mx-auto flex-row-reverse lg:justify-center'
      >
        <div className='px-4'>
          <StarFilter />
        </div>
        <div className='px-4'>
          <StarList />
        </div>
      </motion.div>
    </div>
  )
}
