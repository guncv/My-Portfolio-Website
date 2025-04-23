import { CSSProperties, useState } from "react";
import { useColors } from "../style/color";
import { useMediaQuery } from "../context/MediaQueryContext";
interface TopMenuItemProps {
    name: string;
    path: string;
    setMenuOpen: (menuOpen: boolean) => void;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({name, path, setMenuOpen}) => {
    const { isMobile } = useMediaQuery();
    const Colors = useColors();
    const [hover, setHover] = useState(false);

    const handleHover = () => setHover(!hover);
    

    const containerStyle: CSSProperties = {
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        display: "inline-block", 
        fontSize: "1rem",
        borderRadius: "40px",
        padding: isMobile ? "5px 10px" : "0.3vw 1vw",
        backgroundColor: hover? Colors.TEXT_PRIMARY : "",
        transition: "background-color 0.3s ease-in-out",
        textDecoration: 'none',
    };
  
    const textStyle: CSSProperties = {
        textDecoration: 'none',
        fontWeight: 500,
        cursor: 'pointer',
        flex: 1,
        alignItems: 'center',
        color: Colors.TEXT_PRIMARY,
        transform: hover ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.15s ease-in-out",
    };

    const linkStyle: CSSProperties = {
        position: "absolute",
        color: Colors.BACKGROUND_PRIMARY, 
        transform: hover ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.15s ease-in-out",
        textDecoration: 'none',
    };
  
    return (
      <a style={containerStyle} onMouseEnter={handleHover} onMouseLeave={handleHover} href={path} onClick={() => setMenuOpen(false)}>
        <div style={textStyle}>{name}</div>
        <div
            style={linkStyle}
        >
            {name}
        </div>
      </a>
    );
}

export default TopMenuItem;