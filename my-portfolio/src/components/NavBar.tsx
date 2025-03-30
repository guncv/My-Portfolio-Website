import React, { CSSProperties, useState } from 'react';
import { useColors } from '../style/color';
import TopMenuItem from './NavBarItem';
import { useMediaQuery } from '../context/MediaQueryContext';
import { useIconMap } from '../util/icon';
import { topMenuItems } from '../util/topMenuItem';
import { useTheme } from '../context/ThemeContext';
const Navbar: React.FC = () => {
    const icons = useIconMap();
    const Colors = useColors();
    const [hovered, setHovered] = useState(false);
    const { isMobile, isTablet, isDesktop } = useMediaQuery();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme,toggleTheme } = useTheme();

    const togglesTheme = () => {
        console.log("Theme 1:", theme); 
        toggleTheme();
    };

    const navbar:CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '1rem 1rem' : '1rem 2rem',
        position: 'fixed',
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        top: 0,
        width: '100%',
        zIndex: 1000,
    }

    const button:CSSProperties = {
        backgroundColor: Colors.TEXT_PRIMARY,
        color: Colors.BACKGROUND_PRIMARY,
        border: 'none',
        padding: isMobile ? '0.5rem 0.5rem' : '0.5rem 1rem',
        fontSize: isMobile ? '0.8rem' : '1rem',
        borderRadius: '4px',
        cursor: 'pointer'
    }   

    const logo:CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: Colors.TEXT_PRIMARY,
    }

    const navLinks:CSSProperties = {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    }

    const menuIconStyle: CSSProperties = {
        width: '28px',
        height: '28px',
        cursor: 'pointer',
    };

    const mobileMenu: CSSProperties = {
        position: 'absolute',
        top: '50px',
        left: '1rem',
        backgroundColor: Colors.TEXT_PRIMARY,
        border: `1px solid ${Colors.BACKGROUND_PRIMARY}`, 
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        zIndex: 999,
      };   
      
    const mobileMenuItemWrapper: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };

    const dynamicButtonStyle: CSSProperties = {
        ...button,
        backgroundColor: hovered ? Colors.BACKGROUND_PRIMARY : Colors.TEXT_PRIMARY,
        color: hovered ? Colors.TEXT_PRIMARY : Colors.BACKGROUND_PRIMARY,
        transition: 'all 0.3s ease',
        textDecoration: 'none',
    };
      
      const dividerStyle: CSSProperties = {
        height: '1px',
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        opacity: 0.3,
        margin: '0.25rem 0',
      };

      const themeModeContainer: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      };

      const themeModeIconStyle: CSSProperties = {
        width: '28px',
        height: '28px',
        cursor: 'pointer',
      };

      const lineStyle: CSSProperties = {
        width: '1px',
        height: '28px',
        backgroundColor: Colors.TEXT_PRIMARY,
      };

    return (
        <div style={navbar}>
            <div style={logo}>MyPortfolio</div>
        
            {(isDesktop) && (
                <div style={navLinks}>
                {topMenuItems.map((item) => (
                    <TopMenuItem key={item.name} name={item.name} path={item.path} />
                ))}

                <div style={lineStyle}>

                </div>

                <div style={themeModeContainer}>
                    <img 
                        src={icons.themeMode.icon} 
                        alt="theme" 
                        style={themeModeIconStyle} 
                        onClick={togglesTheme}
                    />
                </div>

                {isDesktop && (
                <a
                    href="/resume.pdf"
                    download="Chanagun_Resume.pdf"
                    style={dynamicButtonStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    Download CV
                </a>
                )}
            </div>
            )}

            {(isTablet || isMobile )&& (
            <img src={icons.menu.icon} alt="menu" style={menuIconStyle} onClick={() => setMenuOpen(!menuOpen)} />
            )}

            {menuOpen && isMobile && (
                <div style={mobileMenu}>
                    {topMenuItems.map((item, index) => (
                    <div key={item.name}>
                        <div style={mobileMenuItemWrapper}>
                            <TopMenuItem name={item.name} path={item.path} />
                        </div>
                        {index < topMenuItems.length - 1 && <div style={dividerStyle} />}
                    </div>
                    ))}
                </div>
            )}
        </div>
    );

};

export default Navbar;
