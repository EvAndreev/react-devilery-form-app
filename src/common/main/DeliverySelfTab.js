import * as React from 'react';
import {DeliverySelfTabForm} from './DeliverySelfTabForm';

export class DeliverySelfTab extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="forms">
                        <DeliverySelfTabForm />
                    </div>
                </div>
            </div>
        );
    };
}