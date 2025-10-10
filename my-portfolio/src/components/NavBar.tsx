import React, { CSSProperties, useRef, useState, useEffect } from 'react';
import { useColors } from '../style/color';
import TopMenuItem from './NavBarItem';
import { useMediaQuery } from '../context/MediaQueryContext';
import { useIconMap } from '../util/icon';
import { topMenuItems } from '../util/topMenuItem';

const Navbar: React.FC = () => {
    const icons = useIconMap();
    const Colors = useColors();
    const [hovered, setHovered] = useState(false);
    const { isMobile, isTablet, isDesktop } = useMediaQuery();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setScrollDir('down');
            } else {
                setScrollDir('up');
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    useEffect(() => {
        if (isDesktop) {
            setMenuOpen(false);
        }
    }, [isDesktop]);

    const handleBackdropClick = () => {
        setMenuOpen(false);
    };

    const navbar:CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: isMobile ? '1rem 1rem' : '1rem 1.84rem',
        position: 'fixed',
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        top: 0,
        width: '100%',
        zIndex: 1000,
        transform: scrollDir === 'down' ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease-in-out',
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

    const navLinks:CSSProperties = {
        listStyle: 'none',
        display: 'flex',
        gap: 'clamp(10px, 1.5rem, 2rem)',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    }

    const menuIconStyle: CSSProperties = {
        width: '28px',
        height: '28px',
        cursor: 'pointer',
    };

    const mobileMenuItemWrapper: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    };

    const dynamicButtonStyle: CSSProperties = {
        ...button,
        backgroundColor: hovered ? Colors.BACKGROUND_PRIMARY : Colors.TEXT_PRIMARY,
        color: hovered ? Colors.TEXT_PRIMARY : Colors.BACKGROUND_PRIMARY,
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        marginLeft: '10px',
        fontSize: isMobile ? '1rem' : '1rem',
    };

    const dividerStyle: CSSProperties = {
        height: '1px',
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        opacity: 0.3,
        margin: '0.25rem 0',
    };

    const horizontalLineStyle: CSSProperties = {
        width: '100%',
        height: '1px',
        backgroundColor: Colors.TEXT_PRIMARY,
        opacity: 0.5,
        marginLeft: '8px',
        margin: '10px 0',
    }

    const verticalLineStyle: CSSProperties = {
        width: '1px',
        height: '28px',
        backgroundColor: Colors.TEXT_PRIMARY,
    };
    
    const modalBackdrop: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 998,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)'
    };

    const modalStyle: CSSProperties = {
        position: isTablet ? 'absolute' : 'fixed',
        top: isMobile ? '0px' : '10px',
        right: isMobile ? '0px' : '10px',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        padding: isMobile ? '30px 40px 20px 40px' : '25px 30px 25px 20px',
        borderRadius: '8px',
        width: isMobile ? '100vw' : '50vw',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: isMobile ? '20px' : '13px',
        maxWidth: isMobile ? '100vw' : '350px',
    };

    const closeButtonStyle: CSSProperties = {
        position: 'absolute',
        top: isMobile ? '24px' : '15px',
        right: isMobile ? '30px' : '20px',
        fontSize: '30px',
        fontWeight: 'normal',
        cursor: 'pointer',
        color: Colors.TEXT_PRIMARY,
    };

    return (
        <div style={navbar}>
            {(isDesktop) && (
                <div style={navLinks}>
                {topMenuItems.map((item) => (
                    <TopMenuItem key={item.name} name={item.name} path={item.path} setMenuOpen={setMenuOpen}/>
                ))}

                <div style={verticalLineStyle}>

                </div>

                {isDesktop && (
                <a
                    href="/Resume (4).pdf"
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

            {menuOpen && (isTablet || isMobile) && (
                    <div style={modalBackdrop} onClick={handleBackdropClick}>
                        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                            <span
                                style={closeButtonStyle}
                                onClick={() => setMenuOpen(false)} 
                            >
                                &times; 
                            </span>

                            {topMenuItems.map((item, index) => (
                                <div key={item.name}>
                                    <div style={mobileMenuItemWrapper}>
                                        <TopMenuItem name={item.name} path={item.path} setMenuOpen={setMenuOpen}/>
                                    </div>
                                    {index < topMenuItems.length - 1 && <div style={dividerStyle} />}
                                </div>
                            ))}

                            <hr style={horizontalLineStyle} />

                            <div style={{margin: '20px 0'}}>
                                <a
                                    href="/Resume (4).pdf"
                                    download="Chanagun_Resume.pdf"
                                    style={dynamicButtonStyle}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    Download CV
                                </a>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Navbar;
