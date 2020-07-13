import * as React from 'react';
import MaskInput from 'react-maskinput';
import './input.less';

export class InputMaskPhone extends React.Component {
    render() {
        const {name, title, type, value, handleChange, error} = this.props;
        const errorClassName = error ? 'error' : '';
        return (
            <div className="form-group">
                <label htmlFor={name} className="form-group__label">{title}</label>
                <MaskInput
                    className={`form-group__input ${errorClassName}`}
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    alwaysShowMask
                    mask={'+7 (000) 000-00-00'}
                    showMask
                    maskChar="_"
                />
                {error && 
                <>
                    <div className="error-alert__icon">
                        <img src="assets/icon/alert.svg"></img>
                    </div>
                    <div className="error-alert__text">Заполните поле</div>
                </>}
            </div>
        )
    }
}