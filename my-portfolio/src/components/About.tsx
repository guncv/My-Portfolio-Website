import { CSSProperties } from "react";
import { useColors } from "../style/color";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import { motion } from "framer-motion";
const About = () => {
    const Colors = useColors();
    const { isMobile, isTablet, isDesktop } = useMediaQuery();

    const aboutPageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

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
        textAlign: isMobile ? 'center' : 'start',
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
                <motion.div 
                    style={leftContentStyle}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div style={imageWrapperStyle}>
                        <div style={imageShadowStyle}></div>
                        <img src="/secondProfile.png" alt="Profile" style={imageStyle} />
                    </div>
                </motion.div>

                <motion.div 
                    style={rightContentStyle}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                    <h1 style={titleRightContentStyle}>Curious, Creative, and Always Building</h1>
                    <h1 style={descriptionRightContentStyle}>
                      I'm Chanagun Viriyasathapornpong, a recent Computer Engineering graduate from Chulalongkorn University, passionate about creating digital solutions that are both functional and beautifully designed.
                      <br /><br />
                      I specialize in full-stack development — blending strong frontend expertise with solid backend architecture. I love transforming ideas and designs into clean, responsive interfaces while building reliable systems that scale.
                      <br /><br />
                      My technical toolkit includes modern web technologies like React, TypeScript, and JavaScript, as well as Flutter for mobile development. On the backend, I work with Golang, Python, and Java, and I'm experienced with databases such as PostgreSQL, MongoDB, and Redis. I also enjoy working with DevOps tools like Docker, Git, and CI/CD pipelines.
                      <br /><br />
                      What excites me most about software engineering is the harmony between logic and creativity. I'm constantly learning new frameworks, refining my coding practices, and finding smarter ways to craft intuitive, impactful user experiences.
                      <br /><br />
                      I take pride in writing clean, maintainable, and efficient code. Whether collaborating in a team or working independently, I'm always driven by curiosity, problem-solving, and a desire to build meaningful products.
                      <br /><br />
                      Beyond coding, I enjoy exploring system design concepts, watching developer talks, and working on side projects that push me outside my comfort zone.
                      <br /><br />
                      My goal is to continue growing as a full-stack and AI engineer — building intelligent, scalable applications that make a real impact.
                    </h1>

                </motion.div>
            </div>
        </div>
    )
}

export default About;