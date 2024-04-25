import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';
import avatar from './avatar.svg'; 

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className='about-container'>
      <div className='about-avatar'>
        <img src={avatar} alt='Avatar' className='avatar-img' />
      </div>

      <div className='about-details'>
        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact'>
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
