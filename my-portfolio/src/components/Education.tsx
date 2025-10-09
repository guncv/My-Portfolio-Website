import { CSSProperties } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import { educationConfig } from "../util/config";
import { motion } from "framer-motion";
import { useColors } from "../style/color";

const Education = () => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();

    const educationPageStyle: CSSProperties = PageStyle({ backgroundColorType: 2 });

    const educationContentStyle: CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '30px' : isTablet ? '4vw' : '2.5vw',
        paddingBottom: isMobile ? '40px' : '3vw',
        padding: isMobile ? '30px 20px 40px' : isTablet ? '4vw 5vw 3vw' : '2.5vw 8vw 3vw',
    };

    const educationContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '30px' : isTablet ? '35px' : '40px',
        width: '100%',
        maxWidth: '1000px',
    };

    const educationCardStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        borderRadius: '20px',
        padding: isMobile ? '25px' : isTablet ? '30px' : '35px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: `2px solid ${Colors.BACKGROUND_TERTIARY}`,
        transition: 'all 0.3s ease',
    };

    const educationHeaderStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '15px' : '20px',
        marginBottom: '20px',
    };

    const institutionLogoStyle: CSSProperties = {
        width: isMobile ? '60px' : '70px',
        height: isMobile ? '60px' : '70px',
        borderRadius: '12px',
        objectFit: 'cover',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        padding: '8px',
    };

    const institutionInfoStyle: CSSProperties = {
        flex: 1,
    };

    const institutionNameStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 5px 0',
    };

    const degreeStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '17px' : '18px',
        fontWeight: '600',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.9,
        margin: '0 0 3px 0',
    };

    const fieldStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : '15px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: '0 0 8px 0',
    };

    const dateGpaStyle: CSSProperties = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        flexWrap: 'wrap',
    };

    const dateStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : '14px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.7,
        fontWeight: '500',
    };

    const gpaStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : '14px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.7,
        fontWeight: '500',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        padding: '4px 8px',
        borderRadius: '6px',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : '15px',
        lineHeight: '1.6',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.85,
        margin: '0 0 20px 0',
    };

    const sectionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : '17px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 12px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    };

    const listStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : '14px',
        lineHeight: '1.5',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: '0 0 15px 0',
        paddingLeft: '20px',
    };

    const listItemStyle: CSSProperties = {
        marginBottom: '6px',
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
        background: 'linear-gradient(135deg, #10B981, #059669)',
    };

    const bottomRightDecorStyle: CSSProperties = {
        ...decorativeElementStyle,
        bottom: '10%',
        right: '-5%',
        background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    };

    return (
        <div id="education" style={{ ...educationPageStyle, position: 'relative', overflow: 'hidden' }}>
            <div style={topLeftDecorStyle} />
            <div style={bottomRightDecorStyle} />

            <TitleContentPage 
                title="Education" 
                content={
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        My academic journey and educational achievements that have shaped my technical foundation.
                    </motion.span>
                }
            />

            <div style={educationContentStyle}>
                <div style={educationContainerStyle}>
                    {educationConfig.map((education, index) => (
                        <motion.div
                            key={index}
                            style={educationCardStyle}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2,
                                ease: "easeOut" 
                            }}
                        >
                            <div style={educationHeaderStyle}>
                                <img 
                                    src={education.imageSource} 
                                    alt={education.institution}
                                    style={institutionLogoStyle}
                                />
                                <div style={institutionInfoStyle}>
                                    <h3 style={institutionNameStyle}>{education.institution}</h3>
                                    <p style={degreeStyle}>{education.degree}</p>
                                    <p style={fieldStyle}>{education.field}</p>
                                    <div style={dateGpaStyle}>
                                        <span style={dateStyle}>{education.date}</span>
                                        {education.gpa && (
                                            <span style={gpaStyle}>GPA: {education.gpa}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {education.description && (
                                <p style={descriptionStyle}>{education.description}</p>
                            )}

                            {education.achievements && education.achievements.length > 0 && (
                                <div>
                                    <h4 style={sectionTitleStyle}>Key Achievements</h4>
                                    <ul style={listStyle}>
                                        {education.achievements.map((achievement, idx) => (
                                            <li key={idx} style={listItemStyle}>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {education.coursework && education.coursework.length > 0 && (
                                <div>
                                    <h4 style={sectionTitleStyle}>Relevant Coursework</h4>
                                    <ul style={listStyle}>
                                        {education.coursework.map((course, idx) => (
                                            <li key={idx} style={listItemStyle}>
                                                {course}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
