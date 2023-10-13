import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from 'react-icons/cg';

interface CardProps {
    imgPath: string;
    title: string;
    description: string;
    techs: string[];
    githubLink: string;
    websiteLink?: string;
}

const ProjectCard: React.FC<CardProps> = ({ imgPath, title, description, techs, githubLink, websiteLink }) => {
    return (
        <section className="project">
            <img src={imgPath} alt="card img" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="techs">
                {techs.map((tech, index) => {
                    return (
                        <p key={index}>{tech}</p>
                    );
                })}
            </div>
            <div className="buttons">
                <a href={githubLink} target="_blank" className="github">
                    <AiFillGithub />
                    <p>Github</p>
                </a>
                {websiteLink && (
                    <a href={websiteLink} target="_blank" className="demo">
                        <CgWebsite />
                        <p>Demo</p>
                    </a>
                )}
            </div>
        </section>
    );
}

export default ProjectCard