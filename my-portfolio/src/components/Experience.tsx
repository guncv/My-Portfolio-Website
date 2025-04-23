import { CSSProperties } from "react";
import TitleContentPage from "./TitleContentPage";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";
import experienceConfig from "../util/config";
import PageStyle from "../style/global";
const Experience = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQuery();
    const Colors = useColors();

    const experiencePageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const experienceContentStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '2vw' :  '1.2vw',
        color: Colors.TEXT_PRIMARY,
        marginTop: isTablet ? '4vw' : isMobile ? '30px' : '3vw',
        fontWeight: 'normal',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isTablet ? '4vw' : isMobile ? '30px' : '3vw',
    };

    const experienceItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        width: !isDesktop ? '80vw' : 'clamp(900px, 70vw, 70vw)',
        height: 'auto',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        borderRadius: '12px',
        padding: isMobile ? '20px' : isTablet ? 'clamp(20px, 2vw, 2vw)' : 'clamp(10px, 1.5vw, 1.5vw)',
    };
    
    const experienceLeftItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        width: isMobile ? '100%' : isDesktop ? '30%' : '40%',
        gap: isDesktop ? '10px' : isTablet ? '20px' : '5px',
        padding: isMobile ? '20px' : isTablet ? '20px 40px 0 0' : '0 40px 0 0 ',
    };
    
    const experienceLeftItemImageStyle: CSSProperties = {
        width: isMobile ? '100px' :  isTablet ? '80px' : 'clamp(90px, 7vw, 120px)',
        height: isMobile ? '100px' :  isTablet ? '80px' : 'clamp(90px, 7vw, 120px)',
        objectFit: 'contain',
        borderRadius: '12px',
      };      

    const experienceLeftItemTitleStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '1.7vw' : 'clamp(15px, 1.2vw, 1.2vw)',
        marginTop: isMobile ? '15px' : '0',
    }

    const experienceMiddleItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        width: isMobile ? '100%' : isDesktop ? '45%' : '60%',
        fontWeight: 'normal',
    };

    const experienceMiddleItemTitleStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '1.8vw' : 'clamp(15px, 1.2vw, 1.2vw)',
    }

    const experienceRightItemStyle: CSSProperties = {
        fontWeight: 'normal',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: isDesktop ? 'flex-end' : 'start',  
        justifyContent: 'flex-start', 
        width: isDesktop ? '25%' : '100%',
        height: '100%',
        fontSize: isMobile ? '15px' : isTablet ? '1.6vw' : 'clamp(15px, 1.2vw, 1.2vw)',
    };

    const experienceDescriptionItemStyle: CSSProperties = {
        marginTop: '20px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        gap: '10px',
        fontWeight: 'normal',
        fontSize: isMobile ? '15px' : isTablet ? '1.5vw' : 'clamp(15px, 1vw, 1vw)',
    }

    return (
        <div id="experiences" style={experiencePageStyle}>
            <TitleContentPage title="Experience" content="Here is a quick summary of my work experience:" />

            <div style={experienceContentStyle}>
                {experienceConfig.map((experience) => (  
                    <div style={experienceItemStyle}>   
                        <div style={experienceLeftItemStyle}>
                            <img src={experience.imageSource} alt={experience.company} style={experienceLeftItemImageStyle} />
                            <p style={experienceLeftItemTitleStyle}>{experience.company}</p>
                        </div>

                        {(isMobile) && (
                            <div style={experienceRightItemStyle}>
                                <p>{experience.date}</p>
                            </div>
                        )}

                        <div style={experienceMiddleItemStyle}>
                             {isTablet && (
                                <div style={experienceRightItemStyle}>
                                    <p>{experience.date}</p>
                                </div>
                            )}
                            <h3 style={experienceMiddleItemTitleStyle}>{experience.position}</h3>
                            <div style={experienceDescriptionItemStyle}>
                                {experience.description.map((line, i) => (
                                    <div key={i}>
                                      {`● ${line}`}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {isDesktop && (
                            <div style={experienceRightItemStyle}>
                                <p>{experience.date}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;