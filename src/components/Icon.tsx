interface IconProps {
    path: string; // SVG path data
    alt: string; // Alt text for accessibility
    className?: string; // Additional CSS classes
}
  
const Icon: React.FC<IconProps> = ({ path, alt, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} height="98" width="98" aria-label={alt}>
        <path d={path} />
    </svg>
);
  
export default Icon;