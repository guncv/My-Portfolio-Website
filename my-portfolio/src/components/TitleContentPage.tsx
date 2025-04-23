import { CSSProperties } from "react"
import { useColors } from "../style/color"
import { useMediaQuery } from "../context/MediaQueryContext";

interface TitleContentPageProps {
    title: string;
    content?: React.ReactNode;
}

const TitleContentPage = ({ title , content}: TitleContentPageProps) => {
    const { isMobile, isTablet } = useMediaQuery();
    const Colors = useColors();
    const titleContainerStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '2.5vw' : '2vw',
        color: Colors.TEXT_PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
    }

    const titleStyle: CSSProperties = {
        color: Colors.TEXT_PRIMARY,
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        borderRadius: '100px',
        fontSize: isMobile ? '20px' : isTablet ? '1.5vw' : '1.2vw',
        fontWeight: 'normal',
        padding: '0.7vw 2vw',
    }

    const contentStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '2vw' :  '1.2vw',
        color: Colors.TEXT_PRIMARY,
        marginTop: isTablet ? '4vw' : isMobile ? '30px' : '2vw',
        fontWeight: 'normal',
        textAlign: 'center',
    };
    return (
        <>
            <div style={titleContainerStyle}>
                <div style={titleStyle}>{title}</div>
            </div>
            
            {content && (
                <div style={contentStyle}>
                    {content}
                </div>
            )}
        </>
    )
}   

export default TitleContentPage;