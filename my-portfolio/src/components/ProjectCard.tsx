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
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

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
        borderRadius: '20px',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
        boxShadow: isHovered 
            ? theme === 'dark'
                ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.3)'
                : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.3)'
            : theme === 'dark'
                ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                : '0 4px 20px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: isMobile ? 'auto' : isTablet ? '300px' : '320px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    };

    const imageContainerStyle: CSSProperties = {
        position: 'relative',
        width: isMobile ? '100%' : isTablet ? '45%' : '50%',
        height: isMobile ? '280px' : '100%',
        overflow: 'hidden',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        flexShrink: 0,
    };

    const imageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    };

    const overlayStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(${isMobile ? 'to bottom' : 'to right'}, transparent 0%, ${Colors.BACKGROUND_SECONDARY}40 100%)`,
        transition: 'all 0.4s ease',
        opacity: isHovered ? 0.6 : 0.3,
    };

    const featuredBadgeStyle: CSSProperties = {
        position: 'absolute',
        top: '18px',
        left: '18px',
        background: theme === 'dark' 
            ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
            : 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        color: '#ffffff',
        padding: isMobile ? '6px 14px' : '7px 18px',
        borderRadius: '24px',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '700',
        letterSpacing: '0.5px',
        zIndex: 2,
        boxShadow: theme === 'dark'
            ? '0 4px 16px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 4px 16px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        textTransform: 'uppercase',
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
        width: isActive ? '12px' : '10px',
        height: isActive ? '12px' : '10px',
        borderRadius: '50%',
        backgroundColor: isActive 
            ? (theme === 'dark' ? '#ffffff' : '#000000')
            : (theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: `2px solid ${isActive 
            ? (theme === 'dark' ? '#ffffff' : '#000000')
            : (theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)')}`,
        boxShadow: isActive 
            ? (theme === 'dark'
                ? '0 0 12px rgba(255, 255, 255, 0.6)'
                : '0 0 12px rgba(0, 0, 0, 0.3)')
            : 'none',
        backdropFilter: 'blur(10px)',
    });

    const navigationArrowStyle = (direction: 'left' | 'right'): CSSProperties => ({
        position: 'absolute',
        top: '50%',
        [direction]: '12px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: theme === 'dark' 
            ? 'rgba(0, 0, 0, 0.6)' 
            : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 2,
        transition: 'all 0.3s ease',
        fontSize: '20px',
        fontWeight: 'bold',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: theme === 'dark'
            ? '0 4px 12px rgba(0, 0, 0, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.2)',
    });

    const contentStyle: CSSProperties = {
        padding: isMobile ? '24px' : isTablet ? '24px' : '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        overflow: 'auto',
        gap: '20px',
    };

    const titleStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '18px' : '22px',
        fontWeight: '700',
        margin: '0 0 12px 0',
        color: Colors.TEXT_PRIMARY,
        transition: 'color 0.3s ease',
        lineHeight: '1.3',
        letterSpacing: '-0.02em',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '13px' : '15px',
        lineHeight: '1.7',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.75,
        margin: '0 0 18px 0',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        fontWeight: '400',
    };

    // Modal Styles
    const modalOverlayStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isMobile ? '20px' : '40px',
        backdropFilter: 'blur(8px)',
    };

    const modalContentStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: '24px',
        maxWidth: isMobile ? '100%' : isTablet ? '720px' : '920px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: theme === 'dark'
            ? '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    };

    const modalCloseButtonStyle: CSSProperties = {
        position: 'absolute',
        top: '24px',
        right: '24px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`,
        color: Colors.TEXT_PRIMARY,
        fontSize: '22px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
    };

    const modalImageContainerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        height: isMobile ? '280px' : isTablet ? '380px' : '480px',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        borderRadius: '24px 24px 0 0',
        overflow: 'hidden',
    };

    const modalImageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const modalBodyStyle: CSSProperties = {
        padding: isMobile ? '28px' : isTablet ? '40px' : '48px',
    };

    const modalTitleStyle: CSSProperties = {
        fontSize: isMobile ? '28px' : isTablet ? '36px' : '42px',
        fontWeight: '700',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 24px 0',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
    };


    const modalSectionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '17px' : '19px',
        fontWeight: '700',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 18px 0',
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        opacity: 0.9,
    };

    const techContainerStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '0',
    };

    const techBadgeStyle: CSSProperties = {
        backgroundColor: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(0, 0, 0, 0.05)',
        color: Colors.TEXT_PRIMARY,
        padding: isMobile ? '5px 12px' : '6px 14px',
        borderRadius: '12px',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
        backdropFilter: 'blur(10px)',
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
        gap: '8px',
        padding: isMobile ? '10px 16px' : isTablet ? '10px 16px' : '11px 20px',
        borderRadius: '12px',
        backgroundColor: theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.03)',
        border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
        color: Colors.TEXT_PRIMARY,
        fontSize: isMobile ? '13px' : isTablet ? '13px' : '14px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
                            whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ‹
                        </motion.div>
                        <motion.div
                            style={navigationArrowStyle('right')}
                            onClick={handleNextImage}
                            whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)' }}
                            whileTap={{ scale: 0.95 }}
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
                                    backgroundColor: theme === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.15)' 
                                        : 'rgba(0, 0, 0, 0.1)',
                                    transform: 'translateY(-2px)',
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
                {project.websiteLink && (
                        <motion.a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: theme === 'dark' 
                                    ? 'rgba(255, 255, 255, 0.1)' 
                                    : 'rgba(0, 0, 0, 0.08)',
                                transform: 'translateY(-2px)',
                                boxShadow: theme === 'dark'
                                    ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                                    : '0 8px 20px rgba(0, 0, 0, 0.1)',
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
                    {project.githubLinks && project.githubLinks.length > 0 ? (
                        project.githubLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={linkButtonStyle}
                                whileHover={{
                                    backgroundColor: theme === 'dark' 
                                        ? 'rgba(255, 255, 255, 0.1)' 
                                        : 'rgba(0, 0, 0, 0.08)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: theme === 'dark'
                                        ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                                        : '0 8px 20px rgba(0, 0, 0, 0.1)',
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img 
                                    src={iconMap.github.icon} 
                                    alt="GitHub" 
                                    style={iconStyle}
                                />
                                {link.label}
                            </motion.a>
                        ))
                    ) : project.githubLink ? (
                        <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: theme === 'dark' 
                                    ? 'rgba(255, 255, 255, 0.1)' 
                                    : 'rgba(0, 0, 0, 0.08)',
                                transform: 'translateY(-2px)',
                                boxShadow: theme === 'dark'
                                    ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                                    : '0 8px 20px rgba(0, 0, 0, 0.1)',
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
                    ) : null}
                    {project.liveLink && (
                        <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={linkButtonStyle}
                            whileHover={{
                                backgroundColor: theme === 'dark' 
                                    ? 'rgba(255, 255, 255, 0.1)' 
                                    : 'rgba(0, 0, 0, 0.08)',
                                transform: 'translateY(-2px)',
                                boxShadow: theme === 'dark'
                                    ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                                    : '0 8px 20px rgba(0, 0, 0, 0.1)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={iconMap.diagonalArrowDark.icon} 
                                alt="Live Demo" 
                                style={iconStyle}
                            />
                            Demo
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
                                        style={{...navigationArrowStyle('left'), width: '48px', height: '48px', fontSize: '24px'}}
                                        onClick={handlePrevImage}
                                        whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        ‹
                                    </motion.div>
                                    <motion.div
                                        style={{...navigationArrowStyle('right'), width: '48px', height: '48px', fontSize: '24px'}}
                                        onClick={handleNextImage}
                                        whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)' }}
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
                            
                            {project.intro && (
                                <p style={{
                                    fontSize: isMobile ? '16px' : '18px',
                                    lineHeight: '1.7',
                                    color: Colors.TEXT_PRIMARY,
                                    opacity: 0.9,
                                    marginBottom: '30px',
                                    fontStyle: 'italic',
                                    borderLeft: `4px solid ${theme === 'dark' ? '#6366F1' : '#3B82F6'}`,
                                    paddingLeft: '20px',
                                    backgroundColor: theme === 'dark' 
                                        ? 'rgba(99, 102, 241, 0.1)' 
                                        : 'rgba(59, 130, 246, 0.08)',
                                    borderRadius: '8px',
                                    padding: '16px 20px',
                                    marginLeft: '-4px',
                                }}>
                                    {project.intro}
                                </p>
                            )}
                            
                            <div style={{marginBottom: '30px'}}>
                                <h3 style={modalSectionTitleStyle}>Project Overview</h3>
                                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                    {project.description.map((item, index) => (
                                        <li key={index} style={{
                                            fontSize: isMobile ? '15px' : '16px',
                                            lineHeight: '1.8',
                                            marginBottom: '12px',
                                            paddingLeft: '20px',
                                            position: 'relative',
                                            color: Colors.TEXT_PRIMARY,
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '8px',
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: Colors.TEXT_PRIMARY,
                                                borderRadius: '50%',
                                            }}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

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
                                                backgroundColor: theme === 'dark' 
                                                    ? 'rgba(255, 255, 255, 0.15)' 
                                                    : 'rgba(0, 0, 0, 0.1)',
                                                transform: 'translateY(-2px)',
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
                                    {/* Support multiple GitHub links */}
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
                                                backgroundColor: Colors.BACKGROUND_TERTIARY,
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
                                    {project.githubLinks && project.githubLinks.length > 0 ? (
                                        project.githubLinks.map((link, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    ...linkButtonStyle,
                                                    padding: '12px 24px',
                                                    fontSize: '15px',
                                                }}
                                                whileHover={{
                                                    backgroundColor: theme === 'dark' 
                                                        ? 'rgba(255, 255, 255, 0.1)' 
                                                        : 'rgba(0, 0, 0, 0.08)',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: theme === 'dark'
                                                        ? '0 8px 20px rgba(0, 0, 0, 0.3)'
                                                        : '0 8px 20px rgba(0, 0, 0, 0.1)',
                                                }}

                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <img 
                                                    src={iconMap.github.icon} 
                                                    alt="GitHub" 
                                                    style={{width: '20px', height: '20px'}}
                                                />
                                                {link.label}
                                            </motion.a>
                                        ))
                                    ) : project.githubLink ? (
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
                                                backgroundColor: Colors.BACKGROUND_TERTIARY,
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
                                    ) : null}
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
                                                backgroundColor: Colors.BACKGROUND_TERTIARY,
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <img 
                                                src={iconMap.diagonalArrowDark.icon} 
                                                alt="Live Demo" 
                                                style={{width: '20px', height: '20px'}}
                                            />
                                            View Live Demo
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
