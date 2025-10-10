import { CSSProperties } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import ProjectCard from "./ProjectCard";
import { projectsConfig } from "../util/config";
import { motion } from "framer-motion";

const Projects = () => {
    const { isMobile, isTablet } = useMediaQuery();

    const projectsPageStyle: CSSProperties = PageStyle({ backgroundColorType: 2 });

    const projectsContentStyle: CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '30px' : isTablet ? '4vw' : '2.5vw',
        paddingBottom: isMobile ? '40px' : '3vw',
        padding: isMobile ? '30px 20px 40px' : isTablet ? '4vw 5vw 3vw' : '2.5vw 8vw 3vw',
    };

    const gridContainerStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile 
            ? '1fr' 
            : 'repeat(auto-fit, minmax(min(550px, 100%), 1fr))',
        gap: isMobile ? '30px' : isTablet ? '35px' : '40px',
        width: '100%',
        maxWidth: '1400px',
    };

    const decorativeElementStyle: CSSProperties = {
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
    };

    const topLeftDecorStyle: CSSProperties = {
        ...decorativeElementStyle,
        top: '10%',
        left: '-5%',
        background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    };

    const bottomRightDecorStyle: CSSProperties = {
        ...decorativeElementStyle,
        bottom: '10%',
        right: '-5%',
        background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    };

    return (
        <div id="projects" style={{ ...projectsPageStyle, position: 'relative', overflow: 'hidden' }}>
            <div style={topLeftDecorStyle} />
            <div style={bottomRightDecorStyle} />

            <TitleContentPage 
                title="Projects" 
                content={
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore my recent work and side projects showcasing various technologies and creative solutions.
                    </motion.span>
                }
            />

            <div style={projectsContentStyle}>
                <div style={gridContainerStyle}>
                    {projectsConfig.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

