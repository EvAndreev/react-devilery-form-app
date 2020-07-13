import * as React from 'react';

const tabsItems = [
    {id: 'Delivery', label: 'Доставка'},
    {id: 'DeliverySelf', label: 'Самовывоз'}
];

export class Tabs extends React.Component {
  
  state = {
    currentTab: tabsItems[0].id
  }

  handleTabsItemClick = (itemId) => (event) => {
    const onPageChange = this.props.onPageChange;
    this.setState({currentTab: itemId})
    onPageChange(itemId);
  };

  render() {
    const {currentTab} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="tab-cells">
            {tabsItems.map( (item, index) => {
              const activeClassName = item.id === currentTab ? 'active' : '';
              return (
                <div className={`tab-cells__cell ${activeClassName}`} key={index} onClick={this.handleTabsItemClick(item.id)}>
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}