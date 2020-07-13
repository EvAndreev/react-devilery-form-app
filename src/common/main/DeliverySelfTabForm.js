import * as React from 'react';
import {RadioButton} from '../components/RadioButton/RadioButton';
import {Button} from '../components/Button/Button';
import {MapComponent} from '../components/Map/Map';
import {adresses} from '../main/const';

export class DeliverySelfTabForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: adresses[0].id
        }
    }
    
    handleOptionChange = (e) => {
        this.setState({selectedOption: e.target.value});
        console.log(e.target.value);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let submitAdress = adresses.find((adress) => adress.id = this.state.selectedOption);
        console.log(submitAdress);
        alert(`${submitAdress.adress}`);
        this.setState({selectedOption: adresses[0].id});
    }

    render() {
        return (
            <form className="form">
                {adresses.map(adress => (
                    <RadioButton
                        name={"radio"}
                        value={adress.id}
                        label={`Пункт выдачи ${adress.adress}`}
                        checked={this.state.selectedOption === adress.id}
                        onChange={this.handleOptionChange}
                    />
                ))}
                <MapComponent />
                <Button 
                    handleClick={this.handleFormSubmit}
                />
            </form>
        )
    }
}