export type TCrew = {
  name: string
  role: string
  photo: string
  country: string
  bio: string
  videos: Array<string>
  photos: Array<string>
  birth: string
  height: number
  movies: Array<TFilmFake>
}

export type TFilmFake = {
  name: string
  role: string
  year: number
  image: string
}

export type TUser = {
  userPhoto: string
  userName: string
}

export type TComment = {
  date: string
  user: TUser
  rating: number
  text: string
  title: string
}

export type TFilmSmall = {
  rating: number
  title: string
  image: string
}

export type TFilms = {
  name: string
  rating: number
  tags: Array<string>
  duration: string
  director: Array<TCrew>
  stars: Array<TCrew>
  desc: string
  date: string
  mmpa: string
  img: string
  link: string
  photos: Array<string>
  writer: Array<TCrew>
  country: string
  filmCrew: Array<TCrew>
  comments: Array<TComment>
  similarFilms: Array<TFilmSmall>
}

// release date, duration, mmpa, desc check

import Interstellar from './i/slider1.jpg'
import IntoTheWild from './i/slider2.jpg'
import BladeRunner from './i/slider3.jpg'
import MulhollandPride from './i/slider4.jpg'
import SkyFall from './i/slider5.jpg'

import photo1 from './i/image11.jpg'
import photo2 from './i/image21.jpg'
import photo3 from './i/image31.jpg'
import photo4 from './i/image41.jpg'
import photo5 from './i/image51.jpg'
import photo6 from './i/image61.jpg'
import photo7 from './i/image71.jpg'
import photo8 from './i/image81.jpg'

import cast1 from './i/cast1.jpg'

import userAva from './i/userava1.jpg'

export const films: TFilms[] = [
  {
    name: 'Interstellar',
    rating: 8.1,
    tags: ['Sci-Fi'],
    duration: '2:21',
    director: [
      {
        name: 'Joss Whedon',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    stars: [
      {
        name: 'Robert Downey Jr.',
        role: 'Robert Downey Jr.',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers/ Captain America',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
    date: '1 May 2012',
    mmpa: 'PG-13',
    img: Interstellar,
    link: '',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    writer: [
      {
        name: 'Writer',
        photo: cast1,
        role: 'writer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    country: 'USA',
    filmCrew: [
      {
        name: 'Victoria Alonso',
        photo: cast1,
        role: 'executive producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Mitchel Bell',
        photo: cast1,
        role: 'co-producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Jamie Christopher',
        photo: cast1,
        role: 'associate producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    comments: [
      {
        title: 'Best Marvel movie in my opinion',
        rating: 9,
        date: '17 December 2016',
        user: {
          userName: 'hawaiipierson',
          userPhoto: userAva
        },

        text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
      }
    ],
    similarFilms: [
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner },
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner },
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner }
    ]
  },

  {
    name: 'Into the wild',
    rating: 7.8,
    tags: [],
    desc: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...',
    duration: '2:21',
    director: [
      {
        name: 'Joe Russo',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Anthony Russo',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    stars: [
      {
        name: 'Robert Downey Jr.',
        role: 'Robert Downey Jr.',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers/ Captain America',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    date: '1 May 2014',
    mmpa: 'PG-13',
    img: IntoTheWild,
    link: '',
    photos: [photo1, photo2, photo3],
    writer: [
      {
        name: 'Writer',
        photo: cast1,
        role: 'writer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    country: 'USA',
    filmCrew: [
      {
        name: 'Victoria Alonso',
        photo: cast1,
        role: 'executive producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Mitchel Bell',
        photo: cast1,
        role: 'co-producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Jamie Christopher',
        photo: cast1,
        role: 'associate producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    comments: [
      {
        title: 'Best Marvel movie in my opinion',
        rating: 9,
        date: '17 December 2016',
        user: {
          userName: 'hawaiipierson',
          userPhoto: userAva
        },
        text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
      }
    ],
    similarFilms: [
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner }
    ]
  },
  {
    name: 'Blade runner',
    rating: 7.3,
    tags: [],
    desc: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...',
    duration: '2:21',
    director: [
      {
        name: 'Peyton Reed',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    stars: [
      {
        name: 'Robert Downey Jr.',
        role: 'Robert Downey Jr.',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers/ Captain America',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    date: '1 May 2015',
    mmpa: 'PG-13',
    img: BladeRunner,
    link: '',
    photos: [photo1, photo2, photo3],
    writer: [
      {
        name: 'Writer',
        photo: cast1,
        role: 'writer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    country: 'USA',
    filmCrew: [
      {
        name: 'Victoria Alonso',
        photo: cast1,
        role: 'executive producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Mitchel Bell',
        photo: cast1,
        role: 'co-producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Jamie Christopher',
        photo: cast1,
        role: 'associate producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    comments: [
      {
        title: 'Best Marvel movie in my opinion',
        rating: 9,
        date: '17 December 2016',
        user: {
          userName: 'hawaiipierson',
          userPhoto: userAva
        },
        text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
      }
    ],
    similarFilms: [
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner }
    ]
  },
  {
    name: 'Mulholland pride',
    rating: 7.2,
    tags: [],
    desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    duration: '2:21',
    director: [
      {
        name: 'Shane Black',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    stars: [
      {
        name: 'Robert Downey Jr.',
        role: 'Robert Downey Jr.',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers/ Captain America',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    date: '1 May 2013',
    mmpa: 'PG-13',
    img: MulhollandPride,
    link: '',
    photos: [photo1, photo2, photo3],
    writer: [
      {
        name: 'Writer',
        photo: cast1,
        role: 'writer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    country: 'USA',
    filmCrew: [
      {
        name: 'Victoria Alonso',
        photo: cast1,
        role: 'executive producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Mitchel Bell',
        photo: cast1,
        role: 'co-producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Jamie Christopher',
        photo: cast1,
        role: 'associate producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    comments: [
      {
        title: 'Best Marvel movie in my opinion',
        rating: 9,
        date: '17 December 2016',
        user: {
          userName: 'hawaiipierson',
          userPhoto: userAva
        },
        text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
      }
    ],
    similarFilms: [
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner }
    ]
  },
  {
    name: 'Skyfall: Evil of boss',
    rating: 7.0,
    tags: [],
    desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    duration: '2:21',
    director: [
      {
        name: 'Alan Taylor',
        role: 'Director',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    stars: [
      {
        name: 'Robert Downey Jr.',
        role: 'Robert Downey Jr.',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Evans',
        role: 'Steve Rogers/ Captain America',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Chris Hemsworth',
        role: 'Thor',
        photo: cast1,
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    date: '1 May 2013',
    mmpa: 'PG-13',
    img: SkyFall,
    link: '',
    photos: [photo1, photo2, photo3],
    writer: [
      {
        name: 'Writer',
        photo: cast1,
        role: 'writer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    country: 'USA',
    filmCrew: [
      {
        name: 'Victoria Alonso',
        photo: cast1,
        role: 'executive producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Mitchel Bell',
        photo: cast1,
        role: 'co-producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      },
      {
        name: 'Jamie Christopher',
        photo: cast1,
        role: 'associate producer',
        country: 'USA',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
        photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
        birth: 'June 24, 1982',
        height: 186,
        movies: [
          {
            name: 'X-Men: Apocalypse',
            role: 'Logan',
            year: 2016,
            image: Interstellar
          }
        ]
      }
    ],
    comments: [
      {
        title: 'Best Marvel movie in my opinion',
        rating: 9,
        date: '17 December 2016',
        user: {
          userName: 'hawaiipierson',
          userPhoto: userAva
        },
        text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
      }
    ],
    similarFilms: [
      { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
      { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
      { rating: 7.3, title: 'Blade runner', image: BladeRunner }
    ]
  }

  // {
  // 	name: 'The Revenant',
  // 	rating: 7.4,
  // 	tags: ['Action'],
  // },
  // {
  // 	name: 'The Walk',
  // 	rating: 7.4,
  // 	tags: ['Sci-fi', 'Advanture'],
  // },
  // {
  // 	name: 'Die Hard',
  // 	rating: 7.4,
  // 	tags: ['Comedy'],
  // },
]

export const actors: TCrew[] = [
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  },
  {
    name: 'Jamie Christopher',
    photo: cast1,
    role: 'associate producer',
    country: 'USA',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
    photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
    birth: 'June 24, 1982',
    height: 186,
    movies: [
      {
        name: 'X-Men: Apocalypse',
        role: 'Logan',
        year: 2016,
        image: Interstellar
      }
    ]
  }
]
