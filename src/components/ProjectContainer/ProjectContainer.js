import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project projects-bg'>
    <h3 className='project-title'>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='prj-link prj-link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='prj-link prj-link--icon'
      >
        <OpenInBrowserIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
