import { FC } from 'react'

import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaYoutube,
} from 'react-icons/fa'

const data = [
	{ icon: <FaFacebookF className='h-4' />, url: 'https://www.facebook.com/' },
	{ icon: <FaTwitter className='h-4' />, url: 'https://www.facebook.com/' },
	{
		icon: <FaGooglePlusG className='h-4' />,
		url: 'https://myaccount.google.com/',
	},
	{ icon: <FaYoutube className='h-4' />, url: 'https://www.youtube.com/' },
]

export const SocialBlock: FC = () => {
	return (
		<ul className='flex flex-row ml-2'>
			{data.map((item) => {
				return (
					<li className='mr-2'>
						<a href={item.url}>{item.icon}</a>
					</li>
				)
			})}
		</ul>
	)
}