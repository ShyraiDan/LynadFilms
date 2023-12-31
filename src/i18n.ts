import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          header: {
            movies: 'Movies',
            celebrities: 'Celebrities',
            news: 'News',
            language: 'Language',
            theme: 'Theme',
            light: 'Light',
            dark: 'Dark',
            system: 'System',
            in: 'Log in',
            up: 'Sign up'
          },
          mainPage: {
            'follow us': 'Follow us:',
            films: 'Films',
            'view all': 'View all',
            popular: 'Popular',
            'coming soon': 'Coming soon',
            'top rated': 'Top Rated',
            'most reviewed': 'Most Reviewed',
            'spotlight celebrities': 'Spotlight Celebrities',
            serial: 'Serial',
            'see all celebrities': 'See All Celebrities',
            trailers: 'Trailers',
            'latest news': 'Latest News',
            show: 'TV Show',
            celebs: 'Celebs',
            'More news': 'More news on',
            'all news': 'See All Movies News'
          },
          footer: {
            address: '5th Avenue st, manhattan',
            'new york': 'New York',
            call: 'Call us:',
            resources: 'Resources',
            about: 'About Us',
            blockbuster: 'Blockbuster',
            contact: 'Contact Us',
            forums: 'Forums',
            blog: 'Blog',
            help: 'Help Center',
            legal: 'Legal',
            terms: 'Terms of Use',
            privacy: 'Privacy Policy',
            security: 'Security',
            account: 'Account',
            'my account': 'My Account',
            watchlist: 'Watchlist',
            collections: 'Collections',
            guide: 'User Guide',
            newsletter: 'Newsletter',
            bottomText: 'Subscribe to our newsletter system now to get latest news from us.',
            'enter email': 'Enter your email...',
            subscribe: 'Subscribe now'
          },
          sorting: {
            'movie name': 'Movie name',
            'celebrity name': 'Celebrity name',
            'enter keywords': 'Enter keywords',
            genres: 'Genres',
            comedies: 'Comedies',
            musicals: 'Musicals',
            adventures: 'Adventures',
            fiction: 'Fictions',
            sci: 'Sci-Fi',
            country: 'Country',
            'enter country': 'Enter country',
            submit: 'Submit',
            'news title': 'News title'
          },
          filters: {
            movies: 'movies',
            stars: 'stars',
            news: 'news',
            found: 'Found',
            total: 'in total',
            sort: 'Sort by:',
            rating: 'Rating',
            descending: 'descending',
            ascending: 'ascending',
            'release date': 'Release date'
          },
          time: {
            hours: 'hours',
            ago: 'ago',
            year: 'Year'
          },
          newsPage: {
            search: 'Search',
            categories: 'Categories',
            'most popular': 'Most popular'
          },
          singleFilm: {
            'watch trailer': 'Watch Trailer',
            'buy ticket': 'Buy Ticket',
            overview: 'Overview',
            reviews: 'Reviews',
            'cast and crew': 'Cast and Crew',
            media: 'Media',
            'related movies': 'Related movies',
            favorite: 'Add to Favorite',
            'rate this movie': 'Rate This Movie',
            share: 'Share',
            'videos and photos': 'Videos and Photos',
            'full cast and crew': 'Full Cast and Crew',
            cast: 'Cast',
            'more info': 'More Information',
            director: 'Director:',
            writer: 'Writer:',
            genres: 'Genres:',
            'release date': 'Release Date:',
            'run time': 'Run Time:',
            rating: 'Rating',
            'per page': 'per page',
            comments: 'comments',
            page: 'Page',
            of: 'of',
            to: 'To',
            of2: 'з',
            photos: 'Photos',
            videos: 'Videos'
          },
          singleStar: {
            overview: 'Overview',
            biography: 'Biography',
            media: 'Media',
            filmography: 'Filmography',
            'full name': 'Full name',
            birth: 'Date of Birth',
            country: 'Country',
            height: 'Height',
            'videos and photos': 'Videos and Photos',
            photos: 'Photos',
            videos: 'Videos',
            actors: 'Actors',
            directors: 'Directors'
          },
          singleNews: {
            'share it': 'Share it',
            tags: 'Tags',
            'leave comment': 'Leave a comment',
            'enter message': 'Enter Message',
            send: 'Send'
          },
          profilePage: {
            'change avatar': 'Change Avatar',
            'account details': 'Account Details',
            profile: 'Profile',
            'favorite movies': 'Favorite Movies',
            others: 'Others',
            out: 'Log out',
            'profile details': 'Profile Details',
            username: 'Username',
            email: 'Email Address',
            firstName: 'First Name',
            lastName: 'Last Name',
            country: 'Country',
            save: 'Save',
            'change password': 'Change Password',
            old: 'Old Password',
            new: 'new Password',
            confirm: 'Confirm New Password',
            'enter old': 'Enter old password',
            'enter new': 'Enter new password',
            'confirm new': 'Confirm new password',
            change: 'Change'
          }
        }
      },
      ua: {
        translation: {
          header: {
            movies: 'Фільми',
            celebrities: 'Зірки',
            news: 'Новини',
            language: 'Мова',
            theme: 'Тема',
            light: 'Світла',
            dark: 'Темна',
            system: 'Система',
            in: 'Увійти',
            up: 'Зареєструватися'
          },
          mainPage: {
            'follow us': 'Підпишись:',
            films: 'Фільми',
            'view all': 'Подивитись все',
            popular: 'Популярні',
            'coming soon': 'Незабаром',
            'top rated': 'Найрейтинговіші',
            'most reviewed': 'Найбільш переглянуті',
            'spotlight celebrities': 'Зірки у фокусі',
            serial: 'Серіали',
            'see all celebrities': 'Всі знаменитості',
            trailers: 'Трейлери',
            'latest news': 'Останні новини',
            show: 'TB Шоу',
            celebs: 'Зірки',
            'More news': 'Більше новин у',
            'all news': 'Всі кіноновини'
          },
          footer: {
            address: '5 Авеню, Манхеттен',
            'new york': 'Нью Йорк',
            call: 'Зателефонуйте:',
            resources: 'Джерела',
            about: 'Про нас',
            blockbuster: 'Блокбастер',
            contact: "Зв'язатися з нами",
            forums: 'Форуми',
            blog: 'Блог',
            help: 'Підтримка',
            legal: 'Легальність',
            terms: 'Умови використання',
            privacy: 'Політика приватності',
            security: 'Безпека',
            account: 'Акаунт',
            'my account': 'Мій акаунт',
            watchlist: 'Список спостереження',
            collections: 'Колекції',
            guide: 'Керівництво користувача',
            newsletter: 'Інформаційний бюлетень',
            bottomText: 'Підпишіться на нашу систему розсилки зараз, щоб отримувати останні новини від нас.',
            'enter email': 'Введіть електронну адресу',
            subscribe: 'Підпишись зараз'
          },
          sorting: {
            'movie name': 'Назва фільму',
            'celebrity name': "Ім'я зірки",
            'enter keywords': 'Введіть ключові слова',
            genres: 'Жанри',
            comedies: 'Комедія',
            musicals: 'Мюзикл',
            adventures: 'Пригоди',
            fiction: 'Вигадки',
            sci: 'Наукова фантастика',
            country: 'Країна',
            'enter country': 'Введіть країну',
            submit: 'Надіслати',
            'news title': 'Заголовок новини'
          },
          filters: {
            movies: 'фільми',
            stars: 'зірки',
            news: 'новин',
            found: 'Знайдено',
            total: 'загалом',
            sort: 'Сортування:',
            rating: 'Рейтинг',
            descending: 'зменшується',
            ascending: 'зростає',
            'release date': 'Дата виходу'
          },
          time: {
            hours: 'годин',
            ago: 'тому',
            year: 'Рік'
          },
          newsPage: {
            search: 'Пошук',
            categories: 'Категорії',
            'most popular': 'Найпопулярніші'
          },
          singleFilm: {
            'watch trailer': 'Переглянути Трейлер',
            'buy ticket': 'Купити Квиток',
            overview: 'Огляд',
            reviews: 'Відгуки',
            'cast and crew': 'Знімальна група',
            media: 'Медіа',
            'related movies': 'Схожі фільми',
            favorite: 'Додати до улюблених',
            'rate this movie': 'Оціни Цей Фільм',
            share: 'Поділитися',
            'videos and photos': 'Відео та Фото',
            'full cast and crew': 'Всі актори та знімальна група',
            cast: 'Знімальна група',
            'more info': 'Більше інформації',
            director: 'Режисер:',
            writer: 'Сценарист:',
            genres: 'Жанр:',
            'release date': 'Дата виходу:',
            'run time': 'Тривалість:',
            rating: 'Рейтинг',
            'per page': 'на сторінці',
            comments: 'коментарів',
            page: 'Сторінка',
            of: 'на',
            to: 'на',
            of2: 'з',
            photos: 'Фото',
            videos: 'Відео',
            actors: 'Актори',
            directors: 'Режисери'
          },
          singleStar: {
            overview: 'Огляд',
            biography: 'Біографія',
            media: 'Медіа',
            filmography: 'Фільмографія',
            'full name': "Повне ім'я",
            birth: 'Дата народження',
            country: 'Країна',
            height: 'Зріст',
            'videos and photos': 'Відео та Фото',
            photos: 'Фото',
            videos: 'Відео'
          },
          singleNews: {
            'share it': 'Поділитися',
            tags: 'Теги',
            'leave comment': 'Залишити коментар',
            'enter message': 'Введіть повідомлення',
            send: 'Відправити'
          },
          profilePage: {
            'change avatar': 'Змінити Аватар',
            'account details': 'Деталі Аккаунту',
            profile: 'Профіль',
            'favorite movies': 'Улюблені Фільми',
            others: 'Інше',
            'profile details': 'Деталі Профілю',
            username: "Ім'я користувача",
            email: 'Електронна адреса',
            firstName: "Ім'я",
            lastName: 'Прізвище',
            country: 'Країна',
            save: 'Зберегти',
            out: 'Вийти',
            'change password': 'Змінити пароль',
            old: 'Старий пароль',
            new: 'Новий пароль',
            confirm: 'Підтвердити новий пароль',
            'enter old': 'Введіть старий пароль',
            'enter new': 'Введіть новий пароль',
            'confirm new': 'Підтвердіть новий пароль',
            change: 'Змінити'
          }
        }
      }
    }
  })
