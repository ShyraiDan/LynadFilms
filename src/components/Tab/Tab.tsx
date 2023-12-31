import { FC, useState, ReactNode } from 'react'

interface ITab {
  buttons: Array<string>
  components: Array<ReactNode>
}

export const Tab: FC<ITab> = ({ buttons, components }) => {
  const [page, setPage] = useState(0)
  return (
    <div>
      <div className='flex flex-col items-start mb-3 md:flex-row'>
        {buttons.map((item, i) => {
          return (
            <button
              onClick={() => setPage(i)}
              key={item}
              className={`text-lg border-0 border-solid border-b-2 mb-2 font-bold border-transparent md:mr-5 md:pb-2 dark:lg:hover:text-yellow lg:hover:text-[purple] ease-out duration-300 cursor-pointer ${
                page === i && 'border-[purple] text-[purple] dark:border-yellow dark:text-yellow'
              }  `}
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>{components[page]}</div>
    </div>
  )
}
