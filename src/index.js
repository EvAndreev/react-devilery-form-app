import * as React from 'react';
import {render as ReactDomRender} from 'react-dom';
import './less/style.less';
import {Tabs} from './common/components/Tabs';
import {DeliveryTab} from './common/main/DeliveryTab';
import {DeliverySelfTab} from './common/main/DeliverySelfTab';

class App extends React.Component {

    state = {
        currentTab: 'Delivery'
    };

    handleTabChange = (tab) => {
        this.setState({currentTab: tab});
    };

    render() {
        const currentTab = this.state.currentTab;

        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="header">{'Выберите способ доставки'}</div>
                    </div>
                </div>
                <Tabs onPageChange={this.handleTabChange} />
                {
                    currentTab === 'Delivery' ? (<DeliveryTab/>) : (<DeliverySelfTab/>)
                }                    
            </div>
        );
    }
}

ReactDomRender(<App/>, document.getElementById('root'));