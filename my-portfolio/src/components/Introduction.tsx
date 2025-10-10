import { CSSProperties } from "react";
import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "../style/color";
import { useIconMap } from "../util/icon";

const Introduction = () => {
    const Colors = useColors();
    const { isMobile, isTablet, isDesktop } = useMediaQuery();
    const iconMap = useIconMap();

    const introductionPageStyle: CSSProperties = {
        width: '100vw',
        padding: isMobile ? '40px' : '6vw 4rem',
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
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'bold',
        marginBottom: '1rem',
    }

    const descriptionStyle: CSSProperties = {
        fontSize: isDesktop ? '1vw' : 
            isTablet ? '1.3vw' : '15px',
        textAlign: isMobile ? 'center' : 'start',
        paddingRight: isDesktop ? '30px' : '0',
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
        fontSize: isMobile ? '15px' : '1vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
    }

    const metaContainerStyle: CSSProperties = {
        margin: isDesktop ? '3vw 0' : '20px 0',
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
            ? 'clamp(200px, 25vw, 300px)'
            : isTablet
            ? 'clamp(150px, 20vw, 200px)'
            : '240px',
            height: isDesktop
            ? 'clamp(250px, 28vw, 350px)'
            : isTablet
            ? 'clamp(200px, 24vw, 240px)'
            : '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    };
      
    const imageStyle: CSSProperties = {
        width: isDesktop
            ? 'clamp(200px, 25vw, 300px)'
            : isTablet
            ? 'clamp(150px, 20vw, 200px)'
            : '200px',
        height: isDesktop
            ? 'clamp(250px, 28vw, 350px)'
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
            ? 'clamp(200px, 25vw, 300px)'
            : isTablet
            ? 'clamp(150px, 20vw, 200px)'
            : '250px',
        height: isDesktop
            ? 'clamp(250px, 28vw, 350px)'
            : isTablet
            ? 'clamp(200px, 24vw, 240px)'
            : '240px',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        top: '30px',
        left: isMobile ? '-5px' : '30px',
        zIndex: 1,
    };  

    return (
        <div style={introductionPageStyle}>

            <div style={leftContainerStyle}>
                <h1 style={titleStyle}>Hi, I'm Gun <span style={nameStyle}>👋🏻🙋🏻‍♂️</span></h1>
                <h1 style={descriptionStyle}>
                    I'm a recent Computer Engineering graduate from Chulalongkorn University, passionate about both Software Engineering and AI Engineering. 
                    <br />
                    I enjoy building scalable, user-focused applications that combine modern web technologies with intelligent systems. 
                    <br />
                    I'm currently available to start immediately and open to full-time opportunities.
                </h1>

                <div style={metaContainerStyle}>
                    <div style={locationContainerStyle}>
                        <div style={blockStyle}>
                            <img src={iconMap.location.icon} alt="Location" style={locationIconStyle} />
                        </div>
                        <h1 style={locationStyle}>Bangkok, Thailand</h1>
                    </div>

                    <div style={locationContainerStyle}>
                        <div style={blockStyle}>
                            <img src={iconMap.available.icon} alt="Available" style={availableIconStyle} />
                        </div>
                        <h1 style={locationStyle}>Available for a new challenge</h1>
                    </div>
                </div>
                

                <div style={iconContainerStyle}>
                    <img src={iconMap.github.icon} alt="Github" style={iconStyle} onClick={iconMap.github.onClick}/>
                    <img src={iconMap.linkedin.icon} alt="LinkedIn" style={iconStyle} onClick={iconMap.linkedin.onClick}/>
                    <img src={iconMap.medium.icon} alt="Medium" style={iconStyle} onClick={iconMap.medium.onClick}/>
                </div>
            </div>

            <div style={rightContainerStyle}>
                <div style={imageWrapperStyle}>
                    <div style={imageShadowStyle}></div>
                    <img src="/profile.png" alt="Profile" style={imageStyle} />
                </div>
            </div>
        </div>
    )
}

export default Introduction;