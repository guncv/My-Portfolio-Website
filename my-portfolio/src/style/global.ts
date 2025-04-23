import { useMediaQuery } from "../context/MediaQueryContext";
import { useColors } from "./color";

interface PageStyleProps {
    backgroundColorType: 1 | 2 ;
}

const PageStyle = ({ backgroundColorType }: PageStyleProps) => {
    const { isMobile } = useMediaQuery();
    const Colors = useColors();

    return {
        width: '100%',
        padding: isMobile ? '40px' : '6vw 2rem',
        fontWeight: 'normal',
        backgroundColor: backgroundColorType === 1 ? Colors.BACKGROUND_SECONDARY : Colors.BACKGROUND_PRIMARY,
        color: Colors.TEXT_PRIMARY,
    }
}

export default PageStyle;