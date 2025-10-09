import { CSSProperties, useState } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import { certificatesConfig } from "../util/config";
import { motion } from "framer-motion";
import { useColors } from "../style/color";
import { useTheme } from "../context/ThemeContext";
import { useIconMap } from "../util/icon";

const Certificates = () => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();
    const { theme } = useTheme();
    const iconMap = useIconMap();
    const [expandedSkills, setExpandedSkills] = useState<Record<number, boolean>>({});

    const certificatesPageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const certificatesContentStyle: CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '30px' : isTablet ? '4vw' : '2.5vw',
        paddingBottom: isMobile ? '40px' : '3vw',
        padding: isMobile ? '30px 20px 40px' : isTablet ? '4vw 5vw 3vw' : '2.5vw 8vw 3vw',
    };

    const certificatesGridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: isMobile ? '25px' : isTablet ? '30px' : '35px',
        width: '100%',
        maxWidth: isTablet ? '600px' : '1200px',
        justifyItems: 'center',
    };

    const certificateCardStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        borderRadius: isMobile ? '14px' : '16px',
        padding: isMobile ? '16px' : '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: `2px solid ${Colors.BACKGROUND_TERTIARY}`,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: isMobile ? '100%' : '500px',
    };

    const certificateHeaderStyle: CSSProperties = {
        display: 'flex',
        alignItems: isMobile ? 'center' : 'flex-start',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '16px',
        marginBottom: '12px',
    };

    const issuerLogoStyle: CSSProperties = {
        width: isMobile ? '60px' : '50px',
        height: isMobile ? '60px' : '50px',
        borderRadius: isMobile ? '8px' : '8px',
        objectFit: 'cover',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        padding: isMobile ? '4px' : '4px',
        flexShrink: 0,
    };

    const certificateInfoStyle: CSSProperties = {
        flex: 1,
        textAlign: isMobile ? 'center' : 'left',
    };

    const certificateTitleStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '16px' : '17px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 3px 0',
        lineHeight: '1.3',
    };

    const issuerStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : '13px',
        fontWeight: '600',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: '0 0 4px 0',
    };

    const dateStyle: CSSProperties = {
        fontSize: isMobile ? '11px' : '12px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.7,
        fontWeight: '500',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : '13px',
        lineHeight: '1.4',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.85,
        margin: '0 0 12px 0',
        flex: 1,
    };

    const skillsContainerStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        marginBottom: '12px',
    };

    const skillBadgeStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        color: Colors.TEXT_PRIMARY,
        padding: isMobile ? '2px 6px' : '3px 8px',
        borderRadius: '10px',
        fontSize: isMobile ? '9px' : '10px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    };

    const credentialContainerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingTop: '12px',
        borderTop: `1px solid ${Colors.BACKGROUND_TERTIARY}`,
    };

    const credentialIdStyle: CSSProperties = {
        fontSize: isMobile ? '10px' : '11px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.6,
        fontFamily: 'monospace',
    };

    const verifyButtonStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: isMobile ? '5px 10px' : '6px 12px',
        borderRadius: '6px',
        backgroundColor: 'transparent',
        border: `1px solid ${Colors.TEXT_PRIMARY}`,
        color: Colors.TEXT_PRIMARY,
        fontSize: isMobile ? '10px' : '11px',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const iconStyle: CSSProperties = {
        width: '12px',
        height: '12px',
    };

    const toggleSkills = (index: number) => {
        setExpandedSkills(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
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
        background: 'linear-gradient(135deg, #F59E0B, #D97706)',
    };

    const bottomRightDecorStyle: CSSProperties = {
        ...decorativeElementStyle,
        bottom: '10%',
        right: '-5%',
        background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    };

    return (
        <div id="certificates" style={{ ...certificatesPageStyle, position: 'relative', overflow: 'hidden' }}>
            <div style={topLeftDecorStyle} />
            <div style={bottomRightDecorStyle} />

            <TitleContentPage 
                title="Certificates" 
                content={
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Professional certifications and credentials that validate my technical expertise and continuous learning.
                    </motion.span>
                }
            />

            <div style={certificatesContentStyle}>
                <div style={certificatesGridStyle}>
                    {certificatesConfig.map((certificate, index) => (
                        <motion.div
                            key={index}
                            style={certificateCardStyle}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut" 
                            }}
                        >
                            {/* Certificate Header */}
                            <div style={certificateHeaderStyle}>
                                <img 
                                    src={certificate.imageSource} 
                                    alt={certificate.issuer}
                                    style={issuerLogoStyle}
                                />
                                <div style={certificateInfoStyle}>
                                    <h3 style={certificateTitleStyle}>{certificate.title}</h3>
                                    <p style={issuerStyle}>{certificate.issuer}</p>
                                    <p style={dateStyle}>{certificate.date}</p>
                                </div>
                            </div>

                            {/* Description */}
                            {certificate.description && (
                                <p style={descriptionStyle}>{certificate.description}</p>
                            )}

                            {/* Skills */}
                            {certificate.skills && certificate.skills.length > 0 && (
                                <div style={skillsContainerStyle}>
                                    {(expandedSkills[index] 
                                        ? certificate.skills 
                                        : certificate.skills.slice(0, 4)
                                    ).map((skill, idx) => (
                                        <motion.span
                                            key={idx}
                                            style={skillBadgeStyle}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                    {certificate.skills.length > 4 && (
                                        <motion.span 
                                            style={{
                                                ...skillBadgeStyle, 
                                                cursor: 'pointer',
                                                opacity: 0.7,
                                                fontWeight: '600'
                                            }}
                                            onClick={() => toggleSkills(index)}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {expandedSkills[index] 
                                                ? 'Show less' 
                                                : `+${certificate.skills.length - 4}`
                                            }
                                        </motion.span>
                                    )}
                                </div>
                            )}

                            <div style={credentialContainerStyle}>
                                {certificate.credentialId && (
                                    <span style={credentialIdStyle}>
                                        ID: {certificate.credentialId}
                                    </span>
                                )}
                                {certificate.credentialUrl && (
                                    <motion.a
                                        href={certificate.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={verifyButtonStyle}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img 
                                            src={theme === 'dark' ? iconMap.diagonalArrowDark.icon : iconMap.diagonalArrowLight.icon} 
                                            alt="Verify" 
                                            style={iconStyle}
                                        />
                                        Verify
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
