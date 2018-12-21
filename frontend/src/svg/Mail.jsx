import React, {PureComponent} from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

class Mail extends PureComponent {
    render() {
        const {className, color} = this.props;
        return (
            <SvgIcon className={className} viewBox='0 0 24 18'>
                <g fill={color} fillRule='nonzero'>
                    <path d='M12,12 L9,9.4 L0.54,16.68 C0.866201973,16.9751046 1.29012116,17.1389725 1.73,17.14 L22.27,17.14 C22.7073374,17.141329 23.1289494,16.9769718 23.45,16.68 L15,9.4 L12,12 Z'
                    />
                    <path d='M23.46,0.46 C23.133798,0.16489541 22.7098788,0.0010274873 22.27,2.628411e-16 L1.73,2.628411e-16 C1.29071508,-0.00167652558 0.867834678,0.166758888 0.55,0.47 L12,10.29 L23.46,0.46 Z'
                    />
                    <polygon points='0 1.5 0 15.75 8.29 8.71' />
                    <polygon points='15.71 8.71 24 15.75 24 1.5' />
                </g>
            </SvgIcon>

        );
    }
}

export default Mail;