import { CSSProperties } from "react";
import TitleContentPage from "./TitleContentPage";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";

const Experience = () => {
    const { isMobile} = useMediaQuery();
    const Colors = useColors();

    const experiencePageStyle: CSSProperties = {
        width: '100%',
        padding: isMobile ? '40px' : '6vw 2rem',
        fontWeight: 'normal',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        color: Colors.TEXT_PRIMARY,
    }

    return (
        <div id="experiences" style={experiencePageStyle}>
            <TitleContentPage title="Experience" content="Here is a quick summary of my work experience:" />
        </div>
    )
}

export default Experience;