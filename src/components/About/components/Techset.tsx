import {
	BiLogoJavascript,
	BiLogoTypescript,
	BiLogoReact,
	BiLogoRedux,
} from 'react-icons/bi';
import { SiCsharp } from 'react-icons/si';

const Techset = () => {
	return (
		<div className="techset-container">
			<p className="title">The following are some <span>technologies</span> I use in my projects:</p>
			<div className="techset">
				<div className="tech">
					<BiLogoJavascript />
				</div>
				<div className="tech">
					<BiLogoTypescript />
				</div>
				<div className="tech">
					<BiLogoReact />
				</div>
				<div className="tech">
					<BiLogoRedux />
				</div>
				<div className="tech">
					<SiCsharp />
				</div>
			</div>
		</div>
	);
}

export default Techset