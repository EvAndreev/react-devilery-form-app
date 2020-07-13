import * as React from 'react';

export class TextArea extends React.Component {
    render() {
        const {name, title, value, handleChange, error} = this.props;
        return (
            <div className="form-group">
                <label className="form-group__label">{title}</label>
                <textarea 
                    className="form-group__text"
                    name={name} 
                    value={value}
                    onChange={handleChange}
                ></textarea>
                {error && 
                    <div className="error-alert">
                        <div className="error-alert__text">Оставьте комментарий</div>
                    </div>}
            </div>
        )
    }
}