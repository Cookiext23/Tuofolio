import { useContext } from 'react';
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { ThemeContext } from '../../contexts/theme';
import image from './avatarIcon.svg'
import imageDark from './avatarIcon_dark.svg'

const Header = () => {
  const { homepage, title } = header
  const [{ themeName }] = useContext(ThemeContext);
  const imageSrc = themeName === 'dark' ? imageDark : image;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage}className='link link--icon'>
            <img src={imageSrc} alt={title} className='image' />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
