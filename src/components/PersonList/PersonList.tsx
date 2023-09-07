import { FC } from 'react'

import { TCrew } from '../../data'

interface IPersonList {
  data: Array<TCrew>
}

export const PersonList: FC<IPersonList> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li className='flex items-center justify-between py-3'>
            <div className='flex items-center justify-center text-sm text-blue'>
              <img src={item.photo} alt='' className='rounded' />
              <a href='' className='ml-2 lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
                {item.name}
              </a>
            </div>
            <p className='text-sm'>{item.role}</p>
          </li>
        )
      })}
    </ul>
  )
}
