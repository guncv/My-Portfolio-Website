import { CSSProperties } from "react";
import { useColors } from "../style/color";
import { useMediaQuery } from "../context/MediaQueryContext";


const Footer = () => {
    const { isMobile, isTablet } = useMediaQuery();
    
    const Colors = useColors();
    const footerStyle: CSSProperties = {
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        padding: isMobile ? '20px' : isTablet ? '4vw' :  '2vw',
        textAlign: 'center',
        color: Colors.TEXT_PRIMARY,
        fontSize: isMobile ? '15px' : isTablet ? '2vw' :  '1.2vw',
    }

    return (
        <div style={footerStyle}>
            {isMobile ? (
                <>
                    <p>© 2025 | Contributed with ❤️ </p>
                    <p>by <a href="https://github.com/guncv" target="_blank" rel="noopener noreferrer"
                        style={{ color: Colors.TEXT_PRIMARY, textDecoration: 'none' }}>
                            Gun Chanagun
                        </a>
                    </p>
                </>
            ) : (
                <p>© 2025 | Contributed with ❤️ by <a href="https://github.com/guncv" target="_blank" rel="noopener noreferrer"
                    style={{ color: Colors.TEXT_PRIMARY, textDecoration: 'none' }}>
                        Gun Chanagun
                </a>
                </p>
            )}
        </div>
    )
}

export default Footer;