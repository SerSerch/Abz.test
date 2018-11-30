import React, {PureComponent} from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

class CaretDown extends PureComponent {
    render() {
        const {className, color} = this.props;
        return (
            <SvgIcon className={className} viewBox='0 0 16 9'>
                <path fill={color} d='M15.7,0.3 C15.5194393,0.105723309 15.2652077,-0.00323309512 15,4.4408921e-16 L1,4.4408921e-16 C0.734792279,-0.00323309512 0.48056067,0.105723309 0.3,0.3 C0.111585736,0.48463046 0.00375704786,0.736230733 -4.92092261e-16,1 C-0.00323309512,1.26520772 0.105723309,1.51943933 0.3,1.7 L7.3,8.7 C7.68884351,9.08114288 8.31115649,9.08114288 8.7,8.7 L15.7,1.7 C15.8942767,1.51943933 16.0032331,1.26520772 16,1 C15.996243,0.736230733 15.8884143,0.48463046 15.7,0.3 Z'
                      fillRule='nonzero' />
            </SvgIcon>

        );
    }
}

export default CaretDown;