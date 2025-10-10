import { CSSProperties } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import ExperienceItem from "./ExperienceItem";
import experienceConfig from "../util/config";

const Experience = () => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();

    const experiencePageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const experienceContentStyle: CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '30px' : isTablet ? '4vw' : '2.5vw',
        gap: isMobile ? '60px' : isTablet ? '5vw' : '4vw',
        paddingBottom: isMobile ? '20px' : '2vw',
        position: 'relative',
    }

    const timelineContainerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        maxWidth: isMobile ? '100%' : isTablet ? '600px' : '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'flex-start' : 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        minHeight: '400px',
        paddingLeft: isMobile ? '0' : '0',
    }

    const timelineLineStyle: CSSProperties = {
        position: 'absolute',
        left: '50%',
        top: '40px',
        bottom: '40px',
        width: '6px',
        backgroundColor: Colors.TEXT_PRIMARY,
        opacity: 1,
        zIndex: 0,
        borderRadius: '3px',
        boxShadow: `0 0 10px ${Colors.TEXT_PRIMARY}40`,
    }

    const timelineItemWrapperStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        <div id="experience" style={experiencePageStyle}>
            <TitleContentPage 
                title="Experience" 
                content="Here's a brief rundown of my recent work experience:"
            />

            <div style={experienceContentStyle}>
                <div style={timelineContainerStyle}>
                    <div style={timelineLineStyle}></div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
                        {experienceConfig.map((experience, index) => (
                            <div key={index} style={timelineItemWrapperStyle}>
                                <div
                                    style={{
                                        marginLeft: '0',
                                        marginRight: '0',
                                        width: '100%',
                                    }}
                                >
                                    <ExperienceItem experience={experience} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;

