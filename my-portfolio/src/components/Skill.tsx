import { CSSProperties } from "react";
import { useColors } from "../style/color";
import { useMediaQuery } from "../context/MediaQueryContext";
import TitleContentPage from "./TitleContentPage";
import { useIconMap } from "../util/icon";
import { motion } from "framer-motion";
import PageStyle from "../style/global";

const Skill = () => {
    const Colors = useColors();
    const { isMobile, isTablet } = useMediaQuery();
    const iconMap = useIconMap();
    const columns = isMobile ? 3 : isTablet ? 4 : 6;

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: () => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };
    
    const viewportOptions = {
        once: true, 
        amount: 0.3,
    };

    const skillPageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const skillListContainer: CSSProperties = {
        marginTop: isMobile ? '40px' : isTablet ? '7vw' : '3vw',
        display: 'grid',
        gridTemplateColumns: isMobile
            ? 'repeat(3, 1fr)'
            : isTablet
            ? 'repeat(4, 1fr)'
            : 'repeat(6, 1fr)',
        gap: isMobile ? '40px' : isTablet ? '5vw' : '4vw',
        justifyItems: 'center',
        marginBottom: isMobile ? '40px' : '3vw',
    };

    const skillItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        width: isMobile ? '70px' : isTablet ? '120px' : '120px',
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.style.transform = 'scale(1.05)';
        event.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.style.transform = 'scale(1)';
        event.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    };

    const skillIconStyle: CSSProperties = {
        width: isMobile ? '50px' : isTablet ? '8vw' : '5vw',
        height: isMobile ? '50px' : isTablet ? '8vwx' : '5vw',
        objectFit: 'contain',
    };

    const skillNameStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '1.8vw' : '1.2vw',
        color: Colors.TEXT_PRIMARY,
        fontWeight: 'normal',
        textAlign: 'center',
    };

    const skills = [
        { name: 'Golang', icon: iconMap.golang.icon },
        { name: 'Python', icon: iconMap.python.icon },
        { name: 'TypeScript', icon: iconMap.typescript.icon },
        { name: 'JavaScript', icon: iconMap.javascript.icon },
        { name: 'Java', icon: iconMap.java.icon },
        { name: 'C++', icon: iconMap.cpp.icon },
        { name: 'C#', icon: iconMap.csharp.icon },
        { name: 'Dart', icon: iconMap.dart.icon },
        { name: 'Next.js', icon: iconMap.nextjs.icon },
        { name: 'React', icon: iconMap.react.icon },
        { name: 'Flutter', icon: iconMap.flutter.icon },
        { name: 'Tailwind CSS', icon: iconMap.tailwindcss.icon },
        { name: 'GraphQL', icon: iconMap.graphql.icon },
        { name: 'gRPC', icon: iconMap.grpc.icon } ,
        { name: 'Express', icon: iconMap.express.icon },
        { name: 'PostgreSQL', icon: iconMap.postgresql.icon },
        { name: 'MongoDB', icon: iconMap.mongodb.icon },
        { name: 'DynamoDB', icon: iconMap.dynamodb.icon },
        { name: 'Redis', icon: iconMap.redis.icon },
        { name: 'Docker', icon: iconMap.docker.icon },
        { name: 'Kubernetes', icon: iconMap.kubernetes.icon },
        { name: 'AWS', icon: iconMap.aws.icon },
        { name: 'Terraform', icon: iconMap.terraform.icon },
        { name: 'Git', icon: iconMap.git.icon },
    ];

    return (
        <div id="skills" style={skillPageStyle}>
            <TitleContentPage title="Skill" content="The skills, tools, and technologies I am really good at:" />

            <div style={skillListContainer}>
            {skills.map((skill, index) => {
                const rowIndex = Math.floor(index / columns);
                return (
                    <motion.div
                        key={index}
                        style={skillItemStyle}
                        variants={itemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                        transition={{ delay: rowIndex * 0.3 }}
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                    >
                        <img src={skill.icon} alt={skill.name} style={skillIconStyle} />
                        <span style={skillNameStyle}>{skill.name}</span>
                    </motion.div>
                );
            })}
            </div>
        </div>
    );
};

export default Skill;