import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { TProfileEdit } from '../../../../redux/types'

export const Profile: FC = () => {
  const { register, handleSubmit } = useForm<TProfileEdit>()
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='px-3'>
      <div className='border-3 border-solid border-header-border bg-filters-bg mb-10 text-white'>
        <div className='p-7 border-0 border-solid border-b-2 border-header-border'>
          <h3 className='mb-7 uppercase text-white font-bold text-sm'>{t('profilePage.profile details')}</h3>
          <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
            <div className='lg:grid grid-cols-2 gap-4 lg:mb-7'>
              <div className='flex flex-col'>
                <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='userName'>
                  {t('profilePage.username')}
                </label>
                <input
                  placeholder={'edwardkennedy'}
                  className='mb-4 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded lg:mb-0'
                  type='text'
                  id='userName'
                  {...register('userName')}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='email'>
                  {t('profilePage.email')}
                </label>
                <input
                  placeholder={'edward@kennedy.com'}
                  className='mb-4 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded lg:mb-0'
                  type='email'
                  id='email'
                  {...register('email')}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='firstName'>
                  {t('profilePage.firstName')}
                </label>
                <input
                  placeholder={'Edward'}
                  className='mb-4 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded lg:mb-0'
                  type='text'
                  id='firstName'
                  {...register('firstName')}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='userName'>
                  {t('profilePage.lastName')}
                </label>
                <input
                  placeholder={'Kennedy'}
                  className='mb-4 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded lg:mb-0'
                  type='text'
                  id='lastName'
                  {...register('lastName')}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='country'>
                  {t('profilePage.country')}
                </label>
                <input
                  placeholder={'Country'}
                  className='mb-7 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded lg:mb-0'
                  type='text'
                  id='country'
                  {...register('country')}
                />
              </div>
            </div>
            <button
              className='rounded-3xl text-[#fff] bg-red font-bold py-2.5 px-9 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer'
              type='submit'
            >
              {t('profilePage.save')}
            </button>
          </form>
        </div>
        <div className='p-7'>
          <h3 className='mb-7 uppercase text-white font-bold text-sm'>{t('profilePage.change password')}</h3>

          <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
            <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='oldPassword'>
              {t('profilePage.old')}
            </label>
            <input
              placeholder={t('profilePage.enter old')}
              className='mb-7 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded'
              type='password'
              id='oldPassword'
              {...register('oldPassword')}
            />
            <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='newPassword'>
              {t('profilePage.new')}
            </label>
            <input
              placeholder={t('profilePage.enter new')}
              className='mb-7 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded'
              type='password'
              id='newPassword'
              {...register('newPassword')}
            />
            <label className='mb-2.5 font-bold text-sm text-grey' htmlFor='confirmNewPassword'>
              {t('profilePage.confirm')}
            </label>
            <input
              placeholder={t('profilePage.confirm new')}
              className='mb-7 bg-selects-bg py-1.5 px-3 h-10 text-sm rounded'
              type='password'
              id='confirmNewPassword'
              {...register('confirmNewPassword')}
            />

            <button
              className='rounded-3xl text-[#fff] bg-red font-bold py-2.5 px-9 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer'
              type='submit'
            >
              {t('profilePage.change')}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
