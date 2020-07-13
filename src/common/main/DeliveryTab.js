import * as React from 'react';
import {DeliveryTabForm} from './DeliveryTabForm';

export class DeliveryTab extends React.Component {    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="forms">
                        <DeliveryTabForm />
                    </div>
                </div>
            </div>
        );
    };
}