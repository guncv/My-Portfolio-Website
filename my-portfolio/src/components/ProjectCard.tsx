import { CSSProperties, useState, useEffect } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";
import { Project } from "../util/type";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useIconMap } from "../util/icon";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { isMobile, isTablet} = useMediaQuery();
    const Colors = useColors();
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const iconMap = useIconMap();

    const images = Array.isArray(project.imageSource) 
        ? project.imageSource 
        : [project.imageSource];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1 || !isHovered || isModalOpen) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length, isHovered, isModalOpen]);
    
    const cardStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        borderRadius: '16px',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `2px solid ${isHovered ? Colors.TEXT_PRIMARY : 'transparent'}`,
        boxShadow: isHovered 
            ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 3px ${Colors.TEXT_PRIMARY}20`
            : '0 8px 16px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: isMobile ? 'auto' : isTablet ? '280px' : '300px',
    };

    const imageContainerStyle: CSSProperties = {
        position: 'relative',
        width: isMobile ? '100%' : isTablet ? '45%' : '50%',
        height: isMobile ? '250px' : '100%',
        overflow: 'hidden',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        flexShrink: 0,
    };

    const imageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    };

    const overlayStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(${isMobile ? 'to bottom' : 'to right'}, transparent 0%, ${Colors.BACKGROUND_SECONDARY}30 100%)`,
        transition: 'all 0.4s ease',
    };

    const featuredBadgeStyle: CSSProperties = {
        position: 'absolute',
        top: '15px',
        left: '15px',
        backgroundColor: theme === 'dark' ? '#6366F1' : '#3B82F6',
        color: '#ffffff',
        padding: isMobile ? '5px 12px' : '6px 15px',
        borderRadius: '20px',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: 'bold',
        zIndex: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    };

    const imageNavigationStyle: CSSProperties = {
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 2,
    };

    const navigationDotStyle = (isActive: boolean): CSSProperties => ({
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: isActive 
            ? Colors.TEXT_PRIMARY 
            : `${Colors.TEXT_PRIMARY}50`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: `2px solid ${Colors.TEXT_PRIMARY}`,
        boxShadow: isActive ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none',
    });

    const navigationArrowStyle = (direction: 'left' | 'right'): CSSProperties => ({
        position: 'absolute',
        top: '50%',
        [direction]: '10px',
        transform: 'translateY(-50%)',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: `${Colors.TEXT_PRIMARY}90`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 2,
        transition: 'all 0.3s ease',
        fontSize: '18px',
        fontWeight: 'bold',
        color: Colors.BACKGROUND_SECONDARY,
    });

    const contentStyle: CSSProperties = {
        padding: isMobile ? '20px' : isTablet ? '20px' : '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        overflow: 'auto',
    };

    const titleStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '20px' : '22px',
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        color: Colors.TEXT_PRIMARY,
        transition: 'color 0.3s ease',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '13px' : '14px',
        lineHeight: '1.6',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.85,
        margin: '0 0 15px 0',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    };

    // Modal Styles
    const modalOverlayStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isMobile ? '20px' : '40px',
        backdropFilter: 'blur(5px)',
    };

    const modalContentStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: '20px',
        maxWidth: isMobile ? '100%' : isTablet ? '700px' : '900px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        border: `2px solid ${Colors.TEXT_PRIMARY}20`,
    };

    const modalCloseButtonStyle: CSSProperties = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        border: 'none',
        color: Colors.TEXT_PRIMARY,
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        transition: 'all 0.3s ease',
    };

    const modalImageContainerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: isMobile ? '250px' : isTablet ? '350px' : '450px',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        borderRadius: '20px 20px 0 0',
        overflow: 'hidden',
    };

    const modalImageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const modalBodyStyle: CSSProperties = {
        padding: isMobile ? '25px' : isTablet ? '35px' : '45px',
    };

    const modalTitleStyle: CSSProperties = {
        fontSize: isMobile ? '26px' : isTablet ? '32px' : '36px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 20px 0',
    };

    const modalDescriptionStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : '16px',
        lineHeight: '1.8',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.9,
        margin: '0 0 30px 0',
    };

    const modalSectionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 15px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    };

    const techContainerStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '15px',
    };

    const techBadgeStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        color: Colors.TEXT_PRIMARY,
        padding: isMobile ? '4px 10px' : '5px 12px',
        borderRadius: '20px',
        fontSize: isMobile ? '10px' : '11px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    };

    const linksContainerStyle: CSSProperties = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        flexWrap: 'wrap',
    };

    const linkButtonStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: isMobile ? '7px 14px' : isTablet ? '7px 14px' : '8px 16px',
        borderRadius: '8px',
        backgroundColor: 'transparent',
        border: `2px solid ${Colors.TEXT_PRIMARY}`,
        color: Colors.TEXT_PRIMARY,
        fontSize: isMobile ? '12px' : isTablet ? '12px' : '13px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const iconStyle: CSSProperties = {
        width: '16px',
        height: '16px',
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (e: React.MouseEvent, idx: number) => {
        e.stopPropagation();
        setCurrentImageIndex(idx);
    };

    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
        >
            <div style={imageContainerStyle}>
                {project.featured && (
                    <div style={featuredBadgeStyle}>Featured</div>
                )}
                
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        style={imageStyle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>
                
                <div style={overlayStyle} />

                {images.length > 1 && (
                    <>
                        <motion.div
                            style={navigationArrowStyle('left')}
                            onClick={handlePrevImage}
                        >
                            ‹
                        </motion.div>
                        <motion.div
                            style={navigationArrowStyle('right')}
                            onClick={handleNextImage}
                        >
                            ›
                        </motion.div>
                    </>
                )}

                {images.length > 1 && (
                    <div style={imageNavigationStyle}>
                        {images.map((_, idx) => (
                            <motion.div
                                key={idx}
                                style={navigationDotStyle(idx === currentImageIndex)}
                                onClick={(e) => handleDotClick(e, idx)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div style={contentStyle}>
                <div>
                    <h3 style={titleStyle}>{project.title}</h3>
                    <p style={descriptionStyle}>
                        {project.intro || project.description}
                    </p>

                    <div style={techContainerStyle}>
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                            <motion.span
                                key={idx}
                                style={techBadgeStyle}
                                whileHover={{
                                    backgroundColor: Colors.BACKGROUND_TERTIARY,
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span style={{...techBadgeStyle, opacity: 0.6}}>
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                <div style={linksContainerStyle}>
                    {project.githubLink && (
                        <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: Colors.BACKGROUND_TERTIARY,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={iconMap.github.icon} 
                                alt="GitHub" 
                                style={iconStyle}
                            />
                            Code
                        </motion.a>
                    )}
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: Colors.BACKGROUND_TERTIARY,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={theme === 'dark' ? iconMap.diagonalArrowLight.icon : iconMap.diagonalArrowDark.icon} 
                                alt="Live Demo" 
                                style={iconStyle}
                            />
                            Demo
                        </motion.a>
                    )}
                    {project.websiteLink && (
                        <motion.a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: Colors.BACKGROUND_TERTIARY,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={iconMap.website.icon} 
                                alt="Website" 
                                style={iconStyle}
                            />
                            Website
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>

        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    style={modalOverlayStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        style={modalContentStyle}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            style={modalCloseButtonStyle}
                            onClick={() => setIsModalOpen(false)}
                            whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: Colors.TEXT_PRIMARY,
                                color: Colors.BACKGROUND_SECONDARY 
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </motion.button>

                        <div style={modalImageContainerStyle}>
                            {project.featured && (
                                <div style={{...featuredBadgeStyle, top: '20px', left: '20px'}}>
                                    Featured
                                </div>
                            )}
                            
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    style={modalImageStyle}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <motion.div
                                        style={{...navigationArrowStyle('left'), width: '45px', height: '45px', fontSize: '22px'}}
                                        onClick={handlePrevImage}
                                        whileHover={{ scale: 1.1, backgroundColor: Colors.TEXT_PRIMARY }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        ‹
                                    </motion.div>
                                    <motion.div
                                        style={{...navigationArrowStyle('right'), width: '45px', height: '45px', fontSize: '22px'}}
                                        onClick={handleNextImage}
                                        whileHover={{ scale: 1.1, backgroundColor: Colors.TEXT_PRIMARY }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        ›
                                    </motion.div>
                                </>
                            )}

                            {images.length > 1 && (
                                <div style={{...imageNavigationStyle, bottom: '20px'}}>
                                    {images.map((_, idx) => (
                                        <motion.div
                                            key={idx}
                                            style={navigationDotStyle(idx === currentImageIndex)}
                                            onClick={(e) => handleDotClick(e, idx)}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div style={modalBodyStyle}>
                            <h2 style={modalTitleStyle}>{project.title}</h2>
                            
                            <p style={modalDescriptionStyle}>
                                {project.description}
                            </p>

                            <div style={{marginBottom: '30px'}}>
                                <h3 style={modalSectionTitleStyle}>Technologies Used</h3>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                                    {project.technologies.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            style={{
                                                ...techBadgeStyle,
                                                padding: '8px 16px',
                                                fontSize: '13px',
                                            }}
                                            whileHover={{
                                                backgroundColor: Colors.TEXT_PRIMARY,
                                                color: Colors.BACKGROUND_SECONDARY,
                                                scale: 1.05,
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 style={modalSectionTitleStyle}>Project Links</h3>
                                <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                ...linkButtonStyle,
                                                padding: '12px 24px',
                                                fontSize: '15px',
                                            }}
                                            whileHover={{
                                                backgroundColor: Colors.TEXT_PRIMARY,
                                                color: Colors.BACKGROUND_SECONDARY,
                                                scale: 1.05,
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img 
                                                src={iconMap.github.icon} 
                                                alt="GitHub" 
                                                style={{width: '20px', height: '20px'}}
                                            />
                                            View Source Code
                                        </motion.a>
                                    )}
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                ...linkButtonStyle,
                                                padding: '12px 24px',
                                                fontSize: '15px',
                                            }}
                                            whileHover={{
                                                backgroundColor: Colors.TEXT_PRIMARY,
                                                color: Colors.BACKGROUND_SECONDARY,
                                                scale: 1.05,
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img 
                                                src={theme === 'dark' ? iconMap.diagonalArrowLight.icon : iconMap.diagonalArrowDark.icon} 
                                                alt="Live Demo" 
                                                style={{width: '20px', height: '20px'}}
                                            />
                                            View Live Demo
                                        </motion.a>
                                    )}
                                    {project.websiteLink && (
                                        <motion.a
                                            href={project.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                ...linkButtonStyle,
                                                padding: '12px 24px',
                                                fontSize: '15px',
                                            }}
                                            whileHover={{
                                                backgroundColor: Colors.TEXT_PRIMARY,
                                                color: Colors.BACKGROUND_SECONDARY,
                                                scale: 1.05,
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img 
                                                src={iconMap.website.icon} 
                                                alt="Website" 
                                                style={{width: '20px', height: '20px'}}
                                            />
                                            Visit Website
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default ProjectCard;
