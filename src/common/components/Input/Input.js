import * as React from 'react';
import './input.less';

export class Input extends React.Component {
    render() {
        const {name, title, type, value, placeholder, handleChange, error} = this.props;
        const errorClassName = error ? 'error' : '';
        return (
            <div className="form-group">
                <label htmlFor={name} className="form-group__label">{title}</label>
                <input
                    className={`form-group__input ${errorClassName}`}
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
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