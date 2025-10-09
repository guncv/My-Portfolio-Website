import { CSSProperties } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import ExperienceItem from "./ExperienceItem";
import experienceConfig from "../util/config";
import { motion } from "framer-motion";

const Experience = () => {
    const { isMobile, isTablet } = useMediaQuery();

    const experiencePageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const experienceContentStyle: CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isMobile ? '30px' : isTablet ? '4vw' : '2.5vw',
        gap: isMobile ? '25px' : isTablet ? '3vw' : '2vw',
        paddingBottom: isMobile ? '20px' : '2vw',
    }

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
            },
        }),
    };
    
    const viewportOptions = {
        once: true, 
        amount: 0.3,
    };

    return (
        <div id="experience" style={experiencePageStyle}>
            <TitleContentPage 
                title="Experience" 
                content="Here's a brief rundown of my recent work experience:"
            />

            <div style={experienceContentStyle}>
                {experienceConfig.map((experience, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        custom={index}
                    >
                        <ExperienceItem experience={experience} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience;

