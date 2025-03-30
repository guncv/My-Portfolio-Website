import { CSSProperties, useState } from "react";
import Colors from "../style/color";
import { useMediaQuery } from "../layout/MediaQueryContext";
interface TopMenuItemProps {
    name: string;
    path: string;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({name, path}) => {
    const { isMobile } = useMediaQuery();

    const isActive = location.pathname === path;
    const [hover, setHover] = useState(false);

    const handleHover = () => setHover(!hover);
    
    const handleNavigate = (path: string) => {
        if (!isActive) {
            console.log("path:",path);
            // safeNavigate(path);
        }
    }

    const containerStyle: CSSProperties = {
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        display: "inline-block", 
        fontSize: isMobile ? "0.8rem" : "1rem",
        borderRadius: "40px",
        padding: isMobile ? "0.3vw 1vw" : "0.3vw 1vw",
        backgroundColor: hover? Colors.TEXT_PRIMARY : "",
        transition: "background-color 0.3s ease-in-out",
    };
  
    const textStyle: CSSProperties = {
        textDecoration: 'none',
        fontWeight: 500,
        cursor: 'pointer',
        flex: 1,
        alignItems: 'center',
        color: isMobile ? Colors.BACKGROUND_PRIMARY : Colors.TEXT_PRIMARY,
        transform: hover ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.15s ease-in-out",
    };

    const linkStyle: CSSProperties = {
        position: "absolute",
        color: Colors.BACKGROUND_PRIMARY, 
        transform: hover ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.15s ease-in-out",
    };
  
    return (
      <div style={containerStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div style={textStyle}>{name}</div>
        <div onClick={() => handleNavigate(path)} style={linkStyle}>
          {name}
        </div>
      </div>
    );
}

export default TopMenuItem;