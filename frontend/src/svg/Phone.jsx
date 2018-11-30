import React, {PureComponent} from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

class Phone extends PureComponent {
    render() {
        const {className, color} = this.props;
        return (
            <SvgIcon className={className} viewBox='0 0 20 20'>
                <path fill={color} d='M5,9.67 C6.63875251,12.8035952 9.19640481,15.3612475 12.33,17 L14.78,14.56 C15.0447716,14.2234982 15.5133179,14.1264121 15.89,14.33 C17.172896,14.7893687 18.5274372,15.0162543 19.89,15 C20.1939534,14.9642379 20.4975473,15.0696327 20.7139573,15.2860427 C20.9303673,15.5024527 21.0357621,15.8060466 21,16.11 L21,19.89 C21.0357621,20.1939534 20.9303673,20.4975473 20.7139573,20.7139573 C20.4975473,20.9303673 20.1939534,21.0357621 19.89,21 C14.8784332,21.0053145 10.0705993,19.0168305 6.52688443,15.4731156 C2.98316955,11.9294007 0.994685503,7.12156683 1,2.11 C0.964237915,1.80604663 1.06963274,1.50245274 1.28604274,1.28604274 C1.50245274,1.06963274 1.80604663,0.964237915 2.11,1 L6,1 C6.30395337,0.964237915 6.60754726,1.06963274 6.82395726,1.28604274 C7.04036726,1.50245274 7.14576209,1.80604663 7.11,2.11 C7.11301768,3.47100709 7.33935839,4.82229492 7.78,6.11 C7.86871201,6.49443712 7.78863529,6.89846054 7.56,7.22 L5,9.67 Z'
                      transform='translate(-1 -1)' fillRule='nonzero' />
            </SvgIcon>

        );
    }
}

export default Phone;