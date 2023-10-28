import brainpulse from '../../assets/brainpulse.png';
import kanbanBoard from '../../assets/kanban_board.png';
import planets from '../../assets/planets_system.png';
import dictionary from '../../assets/dictionary.png';
import portfolio from '../../assets/portfolio.png';
import brainPulseServer from '../../assets/brainPulseServer.png';
import './Projects.css';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
	return (
		<div className="project-container">
			<h1>My Recent <span>Projects</span></h1>
			<div className="project-section">
				<ProjectCard
					imgPath={brainpulse}
					title='BrainPulse'
					description='BrainPulse can auto-generate quizzes in different selected categories and difficulties to test your knowledge with a time-based scoring system.'
					techs={['React', 'Typescript', 'Redux', 'Vite', 'Axios']} 
					githubLink={'https://github.com/CalvinWang2023/BrainPulse'} 
					websiteLink={'https://brainpulse.netlify.app/'}				
				/>
				<ProjectCard
					imgPath={kanbanBoard}
					title='Kanban Tasks Manager'
					description='Kanban tasks manager serves as a useful instrument for overseeing tasks on an individual or group level. It provides a visual representation of work as it progresses through different phases of a workflow. This is achieved by using cards to symbolize individual tasks and columns to represent the various steps within the process.'
					techs={['React', 'Javascript', 'Redux', 'Vite']} 
					githubLink={'https://github.com/CalvinWang2023/Kanban-Task-Manager'} 
					websiteLink={'https://kanban-tasks-manager-app.netlify.app/'}				
				/>
				<ProjectCard
					imgPath={planets}
					title='Planets Fact Site'
					description="Planets Fact Site is a website dedicated to providing comprehensive information about all the planets within our solar system. This website offers concise overviews, detailed internal structures, and surface geology descriptions for each of the solar system's planets, accompanied by relevant images."
					techs={['React', 'React-Router', 'Javascript', 'Vite']} 
					githubLink={'https://github.com/CalvinWang2023/planet-fact-site'} 
					websiteLink={'https://solar-system-site.netlify.app/'}				
				/>
				<ProjectCard
					imgPath={brainPulseServer}
					title='BrainPulse Server'
					description='A BrainPulse Server, equipped with an API for seamless communication with the BrainPulse database, can be employed to establish a connection with the BrainPulse frontend on a localhost.'
					techs={['C#', 'ASP.NET', 'Relational Database', 'Object Relational Mapping']} 
					githubLink={'https://github.com/CalvinWang2023/BrainPulse-Server'} 			
				/>
				<ProjectCard
					imgPath={dictionary}
					title='Web Dictionary'
					description='Web Dictionary is a dictionary that people can search English words up to get relevant explanation and information about this English word.'
					techs={['React', 'Javascript']} 
					githubLink={'https://github.com/CalvinWang2023/dictionary-app'} 
					websiteLink={'https://dictionary-search-web-app.netlify.app/'}				
				/>
				<ProjectCard
					imgPath={portfolio}
					title='Personal Portfolio'
					description='Here is my personal portfolio, a platform where I demonstrate my proficiency and knowledge in the field of computer science.'
					techs={['React', 'React-Router', 'Typescript', 'Vite']} 
					githubLink={'https://github.com/CalvinWang2023/Portfolio'} 		
				/>
			</div>
		</div>
    );
}

export default Projects