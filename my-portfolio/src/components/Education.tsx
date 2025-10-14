import { CSSProperties, useState } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import { educationConfig } from "../util/config";
import { motion } from "framer-motion";
import { useColors } from "../style/color";
import { Education as EducationType } from "../util/type";

interface EducationCardProps {
    education: EducationType;
    index: number;
    educationCardStyle: CSSProperties;
    educationHeaderStyle: CSSProperties;
    institutionLogoStyle: CSSProperties;
    institutionInfoStyle: CSSProperties;
    institutionNameStyle: CSSProperties;
    degreeStyle: CSSProperties;
    fieldStyle: CSSProperties;
    dateGpaStyle: CSSProperties;
    dateStyle: CSSProperties;
    gpaStyle: CSSProperties;
    descriptionStyle: CSSProperties;
    sectionTitleStyle: CSSProperties;
    listStyle: CSSProperties;
    listItemStyle: CSSProperties;
    certificateContainerStyle: CSSProperties;
    certificateImageStyle: CSSProperties;
    certificateImageWrapperStyle: CSSProperties;
}

const EducationCard = ({
    education,
    index,
    educationCardStyle,
    educationHeaderStyle,
    institutionLogoStyle,
    institutionInfoStyle,
    institutionNameStyle,
    degreeStyle,
    fieldStyle,
    dateGpaStyle,
    dateStyle,
    gpaStyle,
    descriptionStyle,
    sectionTitleStyle,
    listStyle,
    listItemStyle,
    certificateContainerStyle,
    certificateImageStyle,
    certificateImageWrapperStyle,
}: EducationCardProps) => {
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
    const Colors = useColors();

    return (
        <>
            <motion.div
                style={educationCardStyle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
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

                {education.certificateImages && education.certificateImages.length > 0 && (
                    <div>
                        <h4 style={{ ...sectionTitleStyle, marginTop: '16px' }}>Certificates & Evidence</h4>
                        <div style={certificateContainerStyle}>
                            {education.certificateImages.map((certImg, idx) => (
                                <div 
                                    key={idx} 
                                    style={certificateImageWrapperStyle}
                                    onClick={() => setSelectedCertificate(certImg)}
                                    onMouseEnter={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) {
                                            img.style.transform = 'scale(1.05)';
                                        }
                                        e.currentTarget.style.borderColor = Colors.TEXT_PRIMARY;
                                    }}
                                    onMouseLeave={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) {
                                            img.style.transform = 'scale(1)';
                                        }
                                        e.currentTarget.style.borderColor = Colors.BACKGROUND_TERTIARY;
                                    }}
                                >
                                    <img 
                                        src={certImg} 
                                        alt={`Certificate ${idx + 1}`}
                                        style={certificateImageStyle}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>

            {selectedCertificate && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setSelectedCertificate(null)}
                >
                    <img
                        src={selectedCertificate}
                        alt="Certificate"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            borderRadius: '8px',
                        }}
                    />
                </div>
            )}
        </>
    );
};

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
        borderRadius: isMobile ? '14px' : '16px',
        padding: isMobile ? '16px' : isTablet ? '20px' : '22px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: `2px solid ${Colors.BACKGROUND_TERTIARY}`,
        transition: 'all 0.3s ease',
    };

    const educationHeaderStyle: CSSProperties = {
        display: 'flex',
        alignItems: isMobile ? 'center' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '16px',
        marginBottom: '16px',
    };

    const institutionLogoStyle: CSSProperties = {
        width: isMobile ? '60px' : isTablet ? '55px' : '50px',
        height: isMobile ? '60px' : isTablet ? '55px' : '50px',
        borderRadius: isMobile ? '8px' : '8px',
        objectFit: 'cover',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        padding: isMobile ? '4px' : '4px',
    };

    const certificateContainerStyle: CSSProperties = {
        display: 'flex',
        gap: isMobile ? '8px' : '10px',
        marginTop: '16px',
        justifyContent: isMobile ? 'center' : 'flex-start',
        flexWrap: 'wrap',
    };

    const certificateImageWrapperStyle: CSSProperties = {
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `2px solid ${Colors.BACKGROUND_TERTIARY}`,
        display: 'inline-block',
        lineHeight: 0,
    };

    const certificateImageStyle: CSSProperties = {
        maxWidth: isMobile ? '120px' : isTablet ? '140px' : '160px',
        maxHeight: isMobile ? '120px' : isTablet ? '140px' : '160px',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        borderRadius: '6px',
        transition: 'transform 0.3s ease',
        display: 'block',
    };

    const institutionInfoStyle: CSSProperties = {
        flex: 1,
        textAlign: isMobile ? 'center' : 'left',
    };

    const institutionNameStyle: CSSProperties = {
        fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 3px 0',
    };

    const degreeStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
        fontWeight: '600',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.9,
        margin: '0 0 1px 0',
    };

    const fieldStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : isTablet ? '13px' : '13px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: '0 0 4px 0',
    };

    const dateGpaStyle: CSSProperties = {
        display: 'flex',
        gap: isMobile ? '8px' : '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: isMobile ? 'center' : 'flex-start',
    };

    const dateStyle: CSSProperties = {
        fontSize: isMobile ? '11px' : isTablet ? '12px' : '12px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.7,
        fontWeight: '500',
    };

    const gpaStyle: CSSProperties = {
        fontSize: isMobile ? '11px' : isTablet ? '12px' : '12px',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.7,
        fontWeight: '500',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        padding: isMobile ? '2px 5px' : '2px 6px',
        borderRadius: '5px',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: isMobile ? '12px' : isTablet ? '13px' : '13px',
        lineHeight: isMobile ? '1.4' : '1.4',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.85,
        margin: '0 0 12px 0',
    };

    const sectionTitleStyle: CSSProperties = {
        fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px',
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
        margin: '0 0 8px 0',
        textTransform: 'uppercase',
        letterSpacing: isMobile ? '0.4px' : '0.6px',
    };

    const listStyle: CSSProperties = {
        fontSize: isMobile ? '11px' : isTablet ? '12px' : '12px',
        lineHeight: '1.3',
        color: Colors.TEXT_PRIMARY,
        opacity: 0.8,
        margin: '0 0 10px 0',
        paddingLeft: isMobile ? '14px' : '16px',
    };

    const listItemStyle: CSSProperties = {
        marginBottom: isMobile ? '3px' : '4px',
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
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        My academic journey and educational achievements that have shaped my technical foundation.
                    </motion.span>
                }
            />

            <div style={educationContentStyle}>
                <div style={educationContainerStyle}>
                    {educationConfig.map((education, index) => (
                        <EducationCard 
                            key={index}
                            education={education}
                            index={index}
                            educationCardStyle={educationCardStyle}
                            educationHeaderStyle={educationHeaderStyle}
                            institutionLogoStyle={institutionLogoStyle}
                            institutionInfoStyle={institutionInfoStyle}
                            institutionNameStyle={institutionNameStyle}
                            degreeStyle={degreeStyle}
                            fieldStyle={fieldStyle}
                            dateGpaStyle={dateGpaStyle}
                            dateStyle={dateStyle}
                            gpaStyle={gpaStyle}
                            descriptionStyle={descriptionStyle}
                            sectionTitleStyle={sectionTitleStyle}
                            listStyle={listStyle}
                            listItemStyle={listItemStyle}
                            certificateContainerStyle={certificateContainerStyle}
                            certificateImageStyle={certificateImageStyle}
                            certificateImageWrapperStyle={certificateImageWrapperStyle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
