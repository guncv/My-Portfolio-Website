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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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
        zIndex: 99999,
        padding: isMobile ? '20px' : '40px',
        backdropFilter: 'blur(5px)',
    };

    const dropdownStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: '12px',
        padding: isMobile ? '20px' : '30px',
        minWidth: isMobile ? '280px' : '400px',
        maxWidth: '50vw',
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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    style={overlayStyle}
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        ref={dropdownRef}
                        style={dropdownStyle}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <h3 style={titleStyle}>Select a Position at {experience.company}</h3>
                        <div style={positionsListStyle}>
                            {experience.positions.map((position, index) => (
                                <div
                                    key={index}
                                    style={positionItemStyle}
                                    onClick={() => onSelectPosition(position)}
                                >
                                    <h4 style={positionTitleStyle}>{position.position}</h4>
                                    <p style={positionDateStyle}>{position.date}</p>
                                </div>
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

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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
        zIndex: 99999,
        padding: isMobile ? '20px' : '40px',
        backdropFilter: 'blur(5px)',
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
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        style={modalStyle}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <motion.button 
                            style={closeButtonStyle} 
                            onClick={onClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ✕
                        </motion.button>

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
    const [isHovered, setIsHovered] = useState(false);

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
        width: isMobile ? '100%' : isTablet ? '75vw' : '800px',
        maxWidth: isTablet ? '500px' : 'none',
        padding: isMobile ? '12px' : isTablet ? '2vw' : '1.5vw',
        borderRadius: '12px',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        color: Colors.TEXT_PRIMARY,
        border: `2px solid ${isHovered ? Colors.TEXT_PRIMARY : 'transparent'}`,
        boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.2)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        margin: '0 auto',
    };
    
    const companyHeaderStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: isMobile ? '12px' : '12px',
        paddingBottom: isMobile ? '10px' : '12px',
        borderBottom: `2px solid ${Colors.TEXT_PRIMARY}`,
        opacity: 1,
    };

    const companyLeftStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: isMobile ? '12px' : '20px',
        width: isMobile ? 'auto' : 'auto',
        flex: isMobile ? 1 : 'none',
    };
    
    const companyImageStyle: CSSProperties = {
        width: isMobile ? '45px' : isTablet ? '60px' : '70px',
        height: isMobile ? '45px' : isTablet ? '60px' : '70px',
        objectFit: 'contain',
        borderRadius: '8px',
        flexShrink: 0,
    };

    const companyNameStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '2vw' : '1.2vw',
        fontWeight: 'bold',
        margin: 0,
    };

    const arrowIconStyle: CSSProperties = {
        width: isMobile ? '20px' : '1.5vw',
        height: isMobile ? '20px' : '1.5vw',
        cursor: 'pointer',
    };

    const clickHintStyle: CSSProperties = {
        fontSize: isMobile ? '10px' : '0.8vw',
        opacity: 0.6,
        fontStyle: 'italic',
        marginTop: '5px',
        textAlign: 'center',
        color: 'inherit',
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
        opacity: 1,
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
        fontSize: isMobile ? '16px' : isTablet ? '1.6vw' : '1.1vw',
        fontWeight: '600',
        margin: 0,
    };

    const positionDateStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.4vw' : '0.9vw',
        opacity: 0.8,
        margin: 0,
    };

    const positionIntroStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : isTablet ? '1.2vw' : '0.8vw',
        opacity: 0.7,
        margin: '3px 0 0 0',
        lineHeight: '1.2',
        fontStyle: 'italic',
    };

    const positionRightStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '1.4vw' : '0.9vw',
        textAlign: isMobile ? 'center' : 'right',
        width: isMobile ? '100%' : '30%',
        marginTop: isMobile ? '10px' : '0',
    };

    return (
        <>
            <div 
                style={experienceItemStyle} 
                onClick={handleCardClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div style={companyHeaderStyle}>
                    <div style={companyLeftStyle}>
                        <img src={experience.imageSource} alt={experience.company} style={companyImageStyle} />
                        <div>
                            <h2 style={companyNameStyle}>{experience.company}</h2>
                        </div>
                    </div>
                    <img 
                        src={theme === 'dark' ? useIconMap().diagonalArrowDark.icon : useIconMap().diagonalArrowLight.icon}
                        alt="click to expand" 
                        style={{
                            ...arrowIconStyle,
                            opacity: 0.6,
                            transform: 'scale(1)',
                        }}
                    />
                </div>

                {isMobile && (
                    <p style={clickHintStyle}>Tap to view details</p>
                )}

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