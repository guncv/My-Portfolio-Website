import React, { CSSProperties, useState } from "react";
import TitleContentPage from "./TitleContentPage";
import PageStyle from "../style/global";
import { useIconMap } from "../util/icon";
import { formatPhoneNumber } from "../util/format";
import { contactConfig } from "../util/config";
import { useMediaQuery } from "../context/MediaQueryContext";

const Contact = () => {
    const { isMobile, isTablet } = useMediaQuery();

    const [copySuccess, setCopySuccess] = useState<{ email: boolean; phone: boolean }>({
        email: false,
        phone: false,
    });

    const contactPageStyle: CSSProperties = PageStyle({ backgroundColorType: 1 });

    const contactContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        gap: '10px',
    }

    const subContactContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    }

    const contactTextStyle: CSSProperties = {
        fontSize: isMobile ? '15px' : isTablet ? '1.5vw' :  '1vw',
        textAlign: 'center',
    }

    const subContactIconContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '10px' : isTablet ? '2vw' :  '1vw',
    }

    const subContactIconStyle: CSSProperties = {
        cursor: 'pointer',
        width: isMobile ? '30px' : isTablet ? '3vw' :  '2vw',
        height: isMobile ? '30px' : isTablet ? '3vw' :  '2vw',
    }

    // Handle copy logic
    const handleCopy = (topic: string, name: string) => {
        setCopySuccess((prev) => ({
            ...prev,
            [topic]: true,
            [topic === 'email' ? 'phone' : 'email']: false,
        }));

        navigator.clipboard.writeText(name).then(() => {
            setTimeout(() => {
                setCopySuccess((prev) => ({
                    ...prev,
                    [topic]: false,
                }));
            }, 2000);
        });
    };

    return (
        <div style={contactPageStyle} id="contact">
            <TitleContentPage
                title="Get in touch"
                content={
                    <>
                        What's next? Feel free to reach out to me if you're looking for<br />
                        a software engineer or just want to chat about tech.
                    </>
                }
            />

            <div style={contactContainerStyle}>
                <ContactItem
                    icon={useIconMap().email.icon}
                    name={contactConfig.email}
                    topic="email"
                    copySuccess={copySuccess}
                    onCopy={handleCopy}
                />
                <ContactItem
                    icon={useIconMap().phone.icon}
                    name={contactConfig.phone}
                    topic="phone"
                    copySuccess={copySuccess}
                    onCopy={handleCopy}
                />
            </div>

            <div style={subContactContainerStyle}>
                <div style={contactTextStyle}>
                    You may also find me on these platforms!
                </div>

                <div style={subContactIconContainerStyle}>
                    <img src={useIconMap().linkedin.icon} alt="LinkedIn" style={subContactIconStyle} onClick={useIconMap().linkedin.onClick} />
                    <img src={useIconMap().github.icon} alt="GitHub" style={subContactIconStyle} onClick={useIconMap().github.onClick} />
                    <img src={useIconMap().instagram.icon} alt="Instagram" style={subContactIconStyle} onClick={useIconMap().instagram.onClick} />
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ icon, name, topic, copySuccess, onCopy }: { icon: string; name: string; topic: string; copySuccess: { email: boolean; phone: boolean }; onCopy: (topic: string, name: string) => void }) => {
    const { isMobile, isTablet } = useMediaQuery();

    const contactItemStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        gap: isMobile ? '15px' : isTablet ? '2vw' : '1.5vw',
        position: 'relative',
    };

    const iconStyle: CSSProperties = {
        width: isMobile ? '25px' : isTablet ? '4vw' : '2.5vw',
        height: isMobile ? '25px' : isTablet ? '4vw' : '2.5vw',
    };

    const duplicateIconStyle: CSSProperties = {
        width: isMobile ? '25px' : isTablet ? '4vw' : '2.5vw',
        height: isMobile ? '25px' : isTablet ? '4vw' : '2.5vw',
        cursor: 'pointer',
    };

    const textStyle: CSSProperties = {
        fontSize: isMobile ? '20px' : isTablet ? '2.5vw' : '2vw',
        maxWidth: isMobile ? '150px' : isTablet ? '550px' : '550px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    };

    const copySuccessStyle: CSSProperties = {
        fontSize: isMobile ? '10px' : isTablet ? '1.5vw' : '0.8vw',
        color: 'black',
        backgroundColor: 'white',
        padding: isMobile ? '5px' : isTablet ? '1vw' : '0.5vw',
        borderRadius: '5px',
        position: 'absolute',
        top: '-2vw',
        right: '-7vw',
        zIndex: 1,
        opacity: 0.8,
    };

    return (
        <div style={contactItemStyle}>
            <img src={icon} alt={name} style={iconStyle} />
            {isMobile ? (
                <p style={textStyle}>{formatPhoneNumber(name)}</p>
            ) : (
                <p style={textStyle}>{formatPhoneNumber(name)}</p>
            )}
            <img
                src={useIconMap().duplicate.icon}
                alt="Copy"
                style={duplicateIconStyle}
                onClick={() => onCopy(topic, name)}
            />
            {copySuccess[topic as keyof typeof copySuccess] && <p style={copySuccessStyle}>Copied to clipboard!</p>}
        </div>
    );
};

export default Contact;
