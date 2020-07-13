import * as React from 'react';
import './radio.less';

export class RadioButton extends React.Component {
    render() {
        const {name, value, checked, label, onChange} = this.props;
        return (
            <div className="form-check">
                <label className="custom-radio">
                    <input 
                        className="form-check__input"
                        type="radio"
                        id={name}
                        name={name} 
                        value={value}
                        checked={checked}
                        onChange={onChange}
                    />
                    <span className="checkmark"></span>
                    {label}
                </label>
            </div>
        )
    }
}