import { CSSProperties } from "react"
import { useColors } from "../style/color"
import { useMediaQuery } from "../context/MediaQueryContext";

interface TitleContentPageProps {
    title: string;
}

const TitleContentPage = ({ title }: TitleContentPageProps) => {
    const { isMobile } = useMediaQuery();
    const Colors = useColors();
    const titleContainerStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : '2.5vw',
        color: Colors.TEXT_PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }

    const titleStyle: CSSProperties = {
        color: Colors.TEXT_PRIMARY,
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        borderRadius: '100px',
        fontSize: isMobile ? '20px' : '1.2vw',
        fontWeight: 'normal',
        padding: '0.7vw 2vw',
    }

    
    return (
        <div style={titleContainerStyle}>
            <div style={titleStyle}>{title}</div>
        </div>
    )
}   

export default TitleContentPage;