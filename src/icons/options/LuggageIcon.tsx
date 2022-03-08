// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const LuggageIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M10.5 18H9V9h1.5v9zm4.5 0h-1.5V9H15v9zm0-12V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7a2 2 0 00-2 2v13h2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1h2V8a2 2 0 00-2-2h-2zm-4.5-2.5h3V6h-3V3.5zM17 19H7V8h10v11z"
                fill="currentColor"
            />
        </svg>
    );
};

LuggageIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default LuggageIcon;