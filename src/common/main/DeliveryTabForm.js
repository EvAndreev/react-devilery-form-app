import * as React from 'react';
import {Input} from '../components/Input/Input';
import {InputMaskPhone} from '../components/Input/InputMaskPhone';
import {TextArea} from '../components/TextArea/TextArea';
import {Button} from '../components/Button/Button';

const defaulfValidation = {isValid: true, errors: {}};

export class DeliveryTabForm extends React.Component {
    constructor (props) {
        super(props);   
        this.state = {
            newOrder: {
                name: '',
                phone: '',
                adress: '',
                comment: ''
            },
            validation: defaulfValidation
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let submitOrder = this.state.newOrder;
        if (this.validateForm(submitOrder)) {
            console.log(submitOrder);
            this.setState({
                newOrder: {
                    name: '',
                    phone: '',
                    adress: '',
                    comment: ''
                },
            })
            alert('Спасибо за заказ');
        } 
    }

    validate = () => {
        const errors = {};
        const {newOrder: form} = this.state;
        ['name', 'phone', 'adress', 'comment'].forEach( (fieldName) => {
            if (!form[fieldName] || !form[fieldName].length) {
                errors[fieldName] = 'Заполните поле';
            }
            if (form['name'].match(/[^А-Яа-яЁё -]/) && form['name'].match(/[^(.{2,}?)\1{2,}]/)) {
                errors['name'] = 'Только кириллица';
            }
            if (!/^[+]?[0-9]{1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(form['phone'].replace(/[ ]/g,''))) {
                errors['phone'] = 'Введи номер';
            }
        })
        const hasErrors = !!Object.keys(errors).length;
        return {isValid: !hasErrors, errors};
    }

    validateForm = () => {
        const validation = this.validate();
        this.setState({validation: validation})
        return validation.isValid;
    }

    handleFieldChange = (fieldName) => (e) => {
        let value = e.target.value;
        this.setState( prevState => ({ 
            newOrder: {...prevState.newOrder, [fieldName]: value},
            validation: defaulfValidation
        }))
    }

    render() {
        const {validation: {errors}} = this.state;
        return (
            <form className="form" onSubmit={this.handleFormSubmit}>
                <Input 
                    type={'text'}
                    name={'name'}
                    title={'ФИО'}
                    placeholder={'Фамилия Имя Отчество'}
                    value={this.state.newOrder.name}
                    handleChange={this.handleFieldChange('name')}
                    error={errors.name}
                />
                <InputMaskPhone 
                    type={'text'}
                    name={'phone'}
                    title={'Телефон'}
                    value={this.state.newOrder.phone}
                    handleChange={this.handleFieldChange('phone')}
                    error={errors.phone}
                />
                <Input 
                    type={'text'}
                    name={'adress'}
                    title={'Адрес доставки'}
                    placeholder={'Город, улица, дом'}
                    value={this.state.newOrder.adress}
                    handleChange={this.handleFieldChange('adress')}
                    error={errors.adress}
                />
                <TextArea 
                    name={'comment'}
                    title={'Комментарий'}
                    value={this.state.newOrder.comment}
                    handleChange={this.handleFieldChange('comment')}
                    error={errors.comment}
                />
                <Button 
                    handleClick={this.handleFormSubmit}
                    disabled={!this.validate().isValid}
                />
            </form>
        );
    };
}