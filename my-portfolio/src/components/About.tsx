import { CSSProperties } from "react";
import { useColors } from "../style/color";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";

const About = () => {
    const Colors = useColors();
    const { isMobile, isTablet, isDesktop } = useMediaQuery();

    const aboutPageStyle: CSSProperties = {
        width: '100%',
        padding: isMobile ? '40px' : '6vw 2rem',
        fontWeight: 'normal',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        color: Colors.TEXT_PRIMARY,
    }

    const contentStyle: CSSProperties = {
        width: '100%',
        padding: isMobile ? '40px 0' : '4vw 2rem 4vw 2rem',
        backgroundColor: Colors.BACKGROUND_SECONDARY,
        flexDirection: isMobile ? 'column' : 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'start',
        gap: isMobile ? '60px' : '0',
    }

    const leftContentStyle: CSSProperties = {
        width: isMobile ? '100%' : '50%',
        display: 'flex',
        justifyContent: isDesktop ? 'flex-start' : 'center',
        alignItems: 'center',
    }

    const rightContentStyle: CSSProperties = {
        width: isMobile ? '100%' : '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'start',
    }

    const imageWrapperStyle: CSSProperties = {
        marginLeft: isDesktop ? '30px' : '0',
        position: 'relative',
        width: isDesktop
          ? 'clamp(330px, 30vw, 450px)'
          : isTablet
          ? 'clamp(200px, 30vw, 350px)'
          : '240px',
        height: isDesktop
          ? 'clamp(390px, 30vw, 480px)'
          : isTablet
          ? 'clamp(260px, 30vw, 240px)'
          : '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
      };
      
      const imageStyle: CSSProperties = {
        width: isDesktop
          ? 'clamp(330px, 30vw, 450px)'
          : isTablet
          ? 'clamp(200px, 30vw, 350px)'
          : '200px',
        height: isDesktop
          ? 'clamp(390px, 30vw, 480px)'
          : isTablet
          ? 'clamp(260px, 30vw, 350px)'
          : '250px',
        objectFit: 'cover',
        zIndex: 2,
        position: 'relative',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      };
      
      const imageShadowStyle: CSSProperties = {
        position: 'absolute',
        width: isDesktop
          ? 'clamp(330px, 30vw, 450px)'
          : isTablet
          ? 'clamp(200px, 30vw, 350px)'
          : '250px',
        height: isDesktop
          ? 'clamp(390px, 30vw, 480px)'
          : isTablet
          ? 'clamp(260px, 30vw, 350px)'
          : '240px',
        backgroundColor: Colors.BACKGROUND_TERTIARY,
        top: '30px',
        right: isMobile ? '-5px' : '30px',
        zIndex: 1,
      };

      const titleRightContentStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '2.5vw' : '2vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
        marginBottom: isMobile ? '20px' : '10px',
        marginTop: isMobile ? '0px' : '-10px',
      }

      const descriptionRightContentStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '1.5vw' : '1vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
        textAlign: isMobile ? 'center' : 'start',
      }

    return (
        <div id="about" style={aboutPageStyle}>
            <TitleContentPage title={"About me"} />

           <div style={contentStyle}>
                <div style={leftContentStyle}>
                    <div style={imageWrapperStyle}>
                        <div style={imageShadowStyle}></div>
                        <img src="/secondProfile.png" alt="Profile" style={imageStyle} />
                    </div>
                </div>

                <div style={rightContentStyle}>
                    <h1 style={titleRightContentStyle}>Curious, Creative, and Always Building</h1>
                    <h1 style={descriptionRightContentStyle}>
                        I’m Chanagun Viriyasathapornpong, a software engineering student in my final year at Chulalongkorn University. My passion lies in creating digital solutions that are both functional and beautifully crafted.
                        <br /><br />
                        I specialize in fullstack development — combining strong frontend skills with solid backend logic. I enjoy turning designs into clean, responsive interfaces while also architecting the underlying systems that power them.
                        <br /><br />
                        My technical skills include modern web technologies like React, TypeScript, JavaScript, and Flutter for mobile UI, as well as backend languages like Golang, Python, and Java. I'm comfortable working with databases like PostgreSQL, MongoDB, and Redis, and enjoy using tools like Docker and Git.
                        <br /><br />
                        What I love most about software is the blend of logic and creativity it demands. I’m constantly learning, exploring new frameworks, and finding better ways to build intuitive user experiences.
                        <br /><br />
                        I take pride in writing clean, maintainable code and solving problems in efficient, elegant ways. Whether I’m working solo or collaborating with a team, I’m always driven by purpose and curiosity.
                        <br /><br />
                        Outside of coding, I enjoy reading about system design, watching dev talks, and contributing to side projects that challenge me in new ways.
                        <br /><br />
                        My goal is to keep growing as a fullstack engineer, contribute meaningfully to real-world products, and always stay curious about the tech that powers the world.
                        </h1>
                </div>
            </div>
        </div>
    )
}

export default About;