import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css';
import resume from '../../assets/CV_Developer.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { AiOutlineDownload } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Resume = () => {
		const downloadResume = () => {
			const a = document.createElement('a');
			a.href = resume; // URL of the PDF file
			a.download = 'yanchun_wang_cv.pdf'; 
			a.style.display = 'none';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		};

		const [width, setWidth] = useState(1200);

		useEffect(() => {
			setWidth(window.innerWidth);
		}, []);
	
		return (
			<div className='resume-container'>
				<button id='download' onClick={downloadResume}>
					<AiOutlineDownload />
					Download Resume
				</button>
				<Document file={resume} className="resume" >
					<Page pageNumber={1} className="page" scale={width > 786 ? 1.0 : 0.6} renderTextLayer={false} />
				</Document>
			</div>
	);
}

export default Resume