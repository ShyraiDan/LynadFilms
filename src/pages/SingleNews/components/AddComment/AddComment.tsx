import { FC } from 'react'

export const AddComment: FC = () => {
  return (
    <>
      <h4 className='text-white font-bold text-lg mb-7'>Leave a comment</h4>

      <form action=''>
        <textarea
          name='message'
          placeholder='Enter message'
          id='message'
          className='border border-solid border-header-border rounded-sm text-grey bg-transparent p-4 mb-7 resize-none w-full h-28'
          // cols={30}
          // rows={10}
        ></textarea>
        <button
          type='submit'
          className='rounded-3xl text-[#fff] bg-red font-bold py-3.5 px-9 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer'
        >
          Send
        </button>
      </form>
    </>
  )
}
