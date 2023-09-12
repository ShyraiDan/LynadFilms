import { FC, useState } from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'

import logo from '../../i/logo1.png'

import { FaSearch } from 'react-icons/fa'
import { Modal } from '../../components/Modal'
import { SignInModal } from '../SignInModal'
import { SignUpModal } from '../SignUpModal'
import { Burger } from './components/Burger'
import { Language } from '../../components/Language'

export const Header: FC = () => {
  const [signInModal, setSignInModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)

  return (
    <header className='header bg-[#0f2133] absolute w-full lg:bg-transparent'>
      <div className='container px-4 mx-auto'>
        <nav className='py-3 flex justify-between md:py-5'>
          <div className='flex items-center'>
            <div className='header_img-container'>
              <Link to={'/'}>
                <img src={logo} alt='logo' className='mt-1 header__logo' />
              </Link>
            </div>
            <ul className='hidden lg:flex'>
              <li className='ml-3 text-grey font-bold uppercase text-sm'>
                <Link to={'/films'} className='lg:hover:text-yellow ease-out duration-300'>
                  Movies
                </Link>
              </li>
              <li className='ml-3 text-grey font-bold uppercase text-sm'>
                <Link to={'/stars'} className='lg:hover:text-yellow ease-out duration-300'>
                  Celebrities
                </Link>
              </li>
              <li className='ml-3 text-grey font-bold uppercase text-sm'>
                <Link to={'/news'} className='lg:hover:text-yellow ease-out duration-300'>
                  News
                </Link>
              </li>
              <li className='ml-2 block flex items-center relative'>
                <Language textStyle='text-grey font-bold mr-2 uppercase text-sm' />
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-center'>
            <Burger />

            <ul className='hidden lg:flex items-center '>
              <li
                className='ml-3 text-grey font-bold uppercase text-sm lg:hover:text-yellow lg:hover:text-yellow ease-out duration-300'
                onClick={() => setSignInModal((state) => !state)}
              >
                Log in
              </li>
              <li
                className='ml-3 text-white font-bold uppercase text-sm rounded-3xl bg-red py-3 px-5 lg:hover:bg-yellow lg:hover:text-black ease-out duration-300 cursor-pointer'
                onClick={() => setSignUpModal((state) => !state)}
              >
                Sign up
              </li>
            </ul>
          </div>
        </nav>

        {/* added hidden for films page */}
        <div className=' hidden border-solid border-black border-4 md:block md:hidden'>
          <form action='' className='flex '>
            <input
              type='text'
              placeholder='Search for a movie, TV Show or celebrity that you are looking for'
              className='w-full bg-dark-blue text-grey py-1.5 px-3 h-10'
            />
            <button className='py-1.5 px-3 bg-dark-blue text-grey border-0 border-solid border-l-2 border-black flex items-center font-bold'>
              <FaSearch className='mr-2' /> Find
            </button>
          </form>
        </div>
      </div>

      {signInModal && <Modal children={<SignInModal />} handleClick={() => setSignInModal((state) => !state)} />}
      {signUpModal && <Modal children={<SignUpModal />} handleClick={() => setSignUpModal((state) => !state)} />}
    </header>
  )
}
