import * as React from 'react';
import './button.less';

export class Button extends React.Component {

    handleButtonClick = (e) => {
        if (this.props.disabled) {
            return
        }
        this.props.handleClick(e);
    }

    render() {
        const {disabled} = this.props;
        const disabledClassName = disabled ? 'disabled' : '';
        return(
            <div className="form-group">
                <button className={`${disabledClassName}`} onClick={this.handleButtonClick}>
                    {'Оформить заказ'}
                </button>
            </div>
        );
    }
}