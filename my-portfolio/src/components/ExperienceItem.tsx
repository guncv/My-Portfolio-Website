import { CSSProperties, useState, useRef, useEffect } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";
import { Experience, Position } from "../util/type";
import { useIconMap } from "../util/icon";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceModalProps {
    experience: Experience;
    selectedPosition: Position | null;
    isOpen: boolean;
    onClose: () => void;
}

interface PositionDropdownProps {
    experience: Experience;
    isOpen: boolean;
    onClose: () => void;
    onSelectPosition: (position: Position) => void;
}

const PositionDropdown = ({ experience, isOpen, onClose, onSelectPosition }: PositionDropdownProps) => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const overlayStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: isMobile ? '20px' : '40px',
    };

    const dropdownStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: '12px',
        padding: isMobile ? '20px' : '30px',
        minWidth: isMobile ? '280px' : '400px',
        maxWidth: '90vw',
        position: 'relative',
        border: `2px solid ${Colors.TEXT_PRIMARY}`,
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    };

    const titleStyle: CSSProperties = {
        fontSize: isMobile ? '18px' : isTablet ? '2vw' : '1.5vw',
        fontWeight: 'bold',
        margin: '0 0 20px 0',
        color: Colors.TEXT_PRIMARY,
        textAlign: 'center',
    };

    const positionsListStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    };

    const positionItemStyle: CSSProperties = {
        padding: isMobile ? '15px' : '20px',
        borderRadius: '8px',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid transparent',
    };


    const positionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '1.6vw' : '1.3vw',
        fontWeight: '600',
        margin: '0 0 5px 0',
        color: 'inherit',
    };

    const positionDateStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.4vw' : '1.1vw',
        opacity: 0.8,
        margin: 0,
        color: 'inherit',
    };

    const positionIntroStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : isTablet ? '1.3vw' : '1vw',
        opacity: 0.7,
        margin: '5px 0 0 0',
        lineHeight: '1.3',
        fontStyle: 'italic',
        color: 'inherit',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    style={overlayStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <motion.div
                        ref={dropdownRef}
                        style={dropdownStyle}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 style={titleStyle}>Select a Position at {experience.company}</h3>
                        <div style={positionsListStyle}>
                            {experience.positions.map((position, index) => (
                                <motion.div
                                    key={index}
                                    style={positionItemStyle}
                                    whileHover={{
                                        backgroundColor: Colors.TEXT_PRIMARY,
                                        color: Colors.BACKGROUND_TERTIARY,
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    }}
                                    onClick={() => onSelectPosition(position)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h4 style={positionTitleStyle}>{position.position}</h4>
                                    <p style={positionDateStyle}>{position.date}</p>
                                    {position.intro && (
                                        <p style={positionIntroStyle}>{position.intro}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ExperienceModal = ({ experience, selectedPosition, isOpen, onClose }: ExperienceModalProps) => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();

    const overlayStyle: CSSProperties = {
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
    };

    const modalStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: '16px',
        padding: isMobile ? '20px' : isTablet ? '30px' : '40px',
        maxWidth: isMobile ? '90vw' : isTablet ? '80vw' : '60vw',
        maxHeight: '80vh',
        overflow: 'auto',
        position: 'relative',
        border: `2px solid ${Colors.TEXT_PRIMARY}`,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    };

    const closeButtonStyle: CSSProperties = {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: Colors.TEXT_PRIMARY,
        padding: '5px',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const headerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: `2px solid ${Colors.TEXT_PRIMARY}`,
    };

    const logoStyle: CSSProperties = {
        width: isMobile ? '60px' : '80px',
        height: isMobile ? '60px' : '80px',
        objectFit: 'contain',
        borderRadius: '8px',
    };

    const companyInfoStyle: CSSProperties = {
        flex: 1,
    };

    const companyNameStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '2.5vw' : '2vw',
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        color: Colors.TEXT_PRIMARY,
    };

    const positionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '18px' : isTablet ? '2vw' : '1.5vw',
        fontWeight: '600',
        margin: '0 0 5px 0',
        color: Colors.TEXT_PRIMARY,
    };

    const dateStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.5vw' : '1.2vw',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: 0,
    };

    const descriptionStyle: CSSProperties = {
        marginTop: '20px',
    };

    const descriptionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '1.8vw' : '1.3vw',
        fontWeight: '600',
        margin: '0 0 15px 0',
        color: Colors.TEXT_PRIMARY,
    };

    const bulletListStyle: CSSProperties = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const bulletItemStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.5vw' : '1.1vw',
        lineHeight: '1.6',
        marginBottom: '12px',
        paddingLeft: '20px',
        position: 'relative',
        color: Colors.TEXT_PRIMARY,
    };

    const bulletPointStyle: CSSProperties = {
        position: 'absolute',
        left: 0,
        top: '8px',
        width: '6px',
        height: '6px',
        backgroundColor: Colors.TEXT_PRIMARY,
        borderRadius: '50%',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    style={overlayStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <motion.div
                        style={modalStyle}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button style={closeButtonStyle} onClick={onClose}>
                            ×
                        </button>

                        <div style={headerStyle}>
                            <img src={experience.imageSource} alt={experience.company} style={logoStyle} />
                            <div style={companyInfoStyle}>
                                <h2 style={companyNameStyle}>{experience.company}</h2>
                                {selectedPosition && (
                                    <>
                                        <h3 style={positionTitleStyle}>{selectedPosition.position}</h3>
                                        <p style={dateStyle}>{selectedPosition.date}</p>
                                    </>
                                )}
                            </div>
                        </div>

                        {selectedPosition && (
                            <div style={descriptionStyle}>
                                <h4 style={descriptionTitleStyle}>Key Responsibilities & Achievements:</h4>
                                <ul style={bulletListStyle}>
                                    {selectedPosition.description.map((item, index) => (
                                        <li key={index} style={bulletItemStyle}>
                                            <div style={bulletPointStyle}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

interface ExperienceItemProps {
    experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const { isMobile, isTablet, isDesktop } = useMediaQuery()
    const Colors = useColors();
    const { theme } = useTheme();
    const [onHover, setOnHover] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

    const handleCardClick = () => {
        if (experience.positions.length === 1) {
            setSelectedPosition(experience.positions[0]);
            setIsModalOpen(true);
        } else {
            setIsDropdownOpen(true);
        }
    };

    const handlePositionClick = (position: Position, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedPosition(position);
        setIsModalOpen(true);
    };

    const handleSelectPosition = (position: Position) => {
        setSelectedPosition(position);
        setIsDropdownOpen(false);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPosition(null);
    };

    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    const experienceItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        width: !isDesktop ? '80vw' : 'clamp(600px, 70vw, 70vw)',
        padding: isTablet ? '2.5vw' : isMobile ? '20px' : '2vw',
        borderRadius: '12px',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        color: Colors.TEXT_PRIMARY,
        border: onHover ? `2px solid ${Colors.TEXT_PRIMARY}` : '2px solid transparent',
        boxShadow: onHover ? '0 8px 25px rgba(0, 0, 0, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
        transform: onHover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };
    
    const companyHeaderStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: isMobile ? '15px' : '12px',
        paddingBottom: '12px',
        borderBottom: `2px solid ${Colors.TEXT_PRIMARY}`,
        opacity: onHover ? 0.9 : 1,
    };

    const companyLeftStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: isMobile ? '15px' : '20px',
        width: isMobile ? '100%' : 'auto',
    };
    
    const companyImageStyle: CSSProperties = {
        width: isMobile ? '50px' : isTablet ? '60px' : '70px',
        height: isMobile ? '50px' : isTablet ? '60px' : '70px',
        objectFit: 'contain',
        borderRadius: '8px',
    };

    const companyNameStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '2vw' : '1.5vw',
        fontWeight: 'bold',
        margin: 0,
    };

    const arrowIconStyle: CSSProperties = {
        width: isMobile ? '20px' : '2vw',
        height: isMobile ? '20px' : '2vw',
        cursor: 'pointer',
    };

    const positionsContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '12px' : '10px',
    };

    const positionItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '10px' : '8px 0',
        borderRadius: '8px',
        backgroundColor: 'transparent',
        transition: 'all 0.3s ease',
        opacity: onHover ? 0.95 : 1,
        cursor: 'pointer',
    };

    const positionLeftStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-start',
        width: isMobile ? '100%' : '70%',
        gap: '5px',
    };

    const positionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '1.6vw' : '1.3vw',
        fontWeight: '600',
        margin: 0,
    };

    const positionDateStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.4vw' : '1.1vw',
        opacity: 0.8,
        margin: 0,
    };

    const companyIntroStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : isTablet ? '1.3vw' : '1vw',
        opacity: 0.8,
        margin: '5px 0 0 0',
        lineHeight: '1.3',
        fontStyle: 'italic',
    };

    const positionIntroStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : isTablet ? '1.2vw' : '0.9vw',
        opacity: 0.7,
        margin: '3px 0 0 0',
        lineHeight: '1.2',
        fontStyle: 'italic',
    };

    const positionRightStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.4vw' : '1.1vw',
        textAlign: isMobile ? 'center' : 'right',
        width: isMobile ? '100%' : '30%',
        marginTop: isMobile ? '10px' : '0',
    };

    return (
        <>
            <div 
                style={experienceItemStyle} 
                onMouseEnter={() => setOnHover(true)} 
                onMouseLeave={() => setOnHover(false)}
                onClick={handleCardClick}
            >

                <div style={companyHeaderStyle}>
                    <div style={companyLeftStyle}>
                        <img src={experience.imageSource} alt={experience.company} style={companyImageStyle} />
                        <div>
                            <h2 style={companyNameStyle}>{experience.company}</h2>
                            {experience.companyIntro && (
                                <p style={companyIntroStyle}>{experience.companyIntro}</p>
                            )}
                        </div>
                    </div>
                    {isDesktop && (
                        <img 
                            src={theme === 'dark' ? useIconMap().diagonalArrowDark.icon : useIconMap().diagonalArrowLight.icon}
                            alt="diagonal arrow" 
                            style={{
                                ...arrowIconStyle,
                                opacity: onHover ? 0.8 : 1,
                                transform: onHover ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    )}
                </div>

                <div style={positionsContainerStyle}>
                    {experience.positions.map((position, index) => (
                        <div 
                            key={index} 
                            style={positionItemStyle}
                            onClick={(e) => handlePositionClick(position, e)}
                        >
                            <div style={positionLeftStyle}>
                                <h3 style={positionTitleStyle}>{position.position}</h3>
                                {!isMobile && <p style={positionDateStyle}>{position.date}</p>}
                                {position.intro && (
                                    <p style={positionIntroStyle}>{position.intro}</p>
                                )}
                            </div>
                            {!isDesktop && (
                                <div style={positionRightStyle}>
                                    <p>{position.date}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <PositionDropdown
                experience={experience}
                isOpen={isDropdownOpen}
                onClose={handleCloseDropdown}
                onSelectPosition={handleSelectPosition}
            />

            <ExperienceModal
                experience={experience}
                selectedPosition={selectedPosition}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default ExperienceItem;