import { CSSProperties } from "react";
import { useMediaQuery } from "../layout/MediaQueryContext";
import Colors from "../style/color";
import { IconMap, LocationIcon, AvailableIcon } from "../util/icon";

const Introduction = () => {
    const { isMobile, isTablet, isDesktop } = useMediaQuery();

    const introductionPageStyle: CSSProperties = {
        width: '100vw',
        padding: isMobile ? '40px' : '6vw 2rem',
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        color: Colors.TEXT_PRIMARY,
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '60px' : '0',
    }

    const leftContainerStyle: CSSProperties = {
        flex: 1,
        width: isDesktop ? '70%' : isTablet ? '60%' : '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: isMobile ? 'center' : 'start',
    }

    const titleStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : '2.5vw',
        color: Colors.TEXT_WHITE,
        fontWeight: 'bold',
        marginBottom: '1rem',
    }

    const descriptionStyle: CSSProperties = {
        fontSize: isDesktop ? '1vw' : 
            isTablet ? '1.3vw' : '10px',
        textAlign: isMobile ? 'center' : 'start',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
    }

    const iconContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',
        gap: '10px',
    }

    const iconStyle: CSSProperties = {
        width: isDesktop ? '30px' : isTablet ? '15px' : '25px',
        height: isDesktop ? '30px' : isTablet ? '15px' : '25px',
        cursor: 'pointer',
    }

    const blockStyle: CSSProperties = {
        width: isDesktop ? '25px' : isTablet ? '15px' : '25px',
        height: isDesktop ? '25px' : isTablet ? '15px' : '25px', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const locationIconStyle: CSSProperties = {
        width: isDesktop ? '25px' : isTablet ? '15px' : '20px',
        height: isDesktop ? '25px' : isTablet ? '15px' : '20px',
    }

    const availableIconStyle: CSSProperties = {
        width: isDesktop? '10px': isTablet ? '5px' : '10px',
        height: isDesktop? '10px': isTablet ? '5px' : '10px',
    }

    const locationContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '10px',
    }
    
    const locationStyle: CSSProperties = {
        fontSize: isMobile ? '10px' : '1vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
    }

    const metaContainerStyle: CSSProperties = {
        margin: isDesktop ? '50px 0' : '20px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        gap: isDesktop ? '10px' : '5px',
    }

    const nameStyle: CSSProperties = {
        fontSize: isMobile ? '25px' : '3.5vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
    }

    const rightContainerStyle: CSSProperties = {
        width: isDesktop ? '30%' : '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isMobile ? 'center' : 'start',
        alignItems: isDesktop ? 'start' : 'center',
    }

    const imageWrapperStyle: CSSProperties = {
        marginRight: isDesktop ? '30px' : '0',
        position: 'relative',
        width: isDesktop
          ? 'clamp(200px, 25vw, 250px)'
          : isTablet
          ? 'clamp(150px, 20vw, 200px)'
          : '240px',
        height: isDesktop
          ? 'clamp(250px, 28vw, 280px)'
          : isTablet
          ? 'clamp(200px, 24vw, 240px)'
          : '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
      };
      
      const imageStyle: CSSProperties = {
        width: isDesktop
          ? 'clamp(200px, 25vw, 250px)'
          : isTablet
          ? 'clamp(150px, 20vw, 200px)'
          : '200px',
        height: isDesktop
          ? 'clamp(250px, 28vw, 280px)'
          : isTablet
          ? 'clamp(200px, 24vw, 240px)'
          : '250px',
        objectFit: 'cover',
        zIndex: 2,
        position: 'relative',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      };
      
      const imageShadowStyle: CSSProperties = {
        position: 'absolute',
        width: isDesktop
          ? 'clamp(200px, 25vw, 250px)'
          : isTablet
          ? 'clamp(150px, 20vw, 200px)'
          : '250px',
        height: isDesktop
          ? 'clamp(250px, 28vw, 280px)'
          : isTablet
          ? 'clamp(200px, 24vw, 240px)'
          : '240px',
        backgroundColor: Colors.TEXT_PRIMARY,
        top: '30px',
        left: isMobile ? '0' : '30px',
        zIndex: 1,
      };
      

    return (
        <div style={introductionPageStyle}>

            <div style={leftContainerStyle}>
                <h1 style={titleStyle}>Hi, I'm Gun <span style={nameStyle}>👋🏻🙋🏻‍♂️</span></h1>
                <h1 style={descriptionStyle}>
                    I'm a final-year Software Engineering student at Chulalongkorn University with a focus on full-stack web development.
                    <br />
                    I enjoy building scalable, user-centric applications using modern frontend and backend technologies.
                    <br />
                    I'm currently seeking full-time opportunities, with availability starting in July 2025.
                </h1>

                <div style={metaContainerStyle}>
                    <div style={locationContainerStyle}>
                        <div style={blockStyle}>
                            <img src={LocationIcon} alt="Location" style={locationIconStyle} />
                        </div>
                        <h1 style={locationStyle}>Bangkok, Thailand</h1>
                    </div>

                    <div style={locationContainerStyle}>
                        <div style={blockStyle}>
                            <img src={AvailableIcon} alt="Available" style={availableIconStyle} />
                        </div>
                        <h1 style={locationStyle}>Available for a new challenge</h1>
                    </div>
                </div>
                

                <div style={iconContainerStyle}>
                    <img src={IconMap.github.icon} alt="Github" style={iconStyle} onClick={() => IconMap.github.onClick()}/>
                    <img src={IconMap.linkedin.icon} alt="LinkedIn" style={iconStyle} onClick={() => IconMap.linkedin.onClick()}/>
                    <img src={IconMap.instagram.icon} alt="Instagram" style={iconStyle} onClick={() => IconMap.instagram.onClick()}/>
                </div>
            </div>

            <div style={rightContainerStyle}>
                <div style={imageWrapperStyle}>
                    <div style={imageShadowStyle}></div>
                    <img src="/profile.JPG" alt="Profile" style={imageStyle} />
                </div>
            </div>
        </div>
    )
}

export default Introduction;