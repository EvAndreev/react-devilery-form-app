import * as React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
let MobileDetect = require('mobile-detect');
import {adresses} from '../../main/const';
import {getMarker} from '../../main/utils';

export class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [55.98, 37.145],
            zoom: 13,
            behaviors: 'default',
            mobileScroll: false
        }
    }

    ref = null;

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.checkScreen();
    }

    componentDidUpdate() {
        this.checkScreen();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.checkScreen();
    }

    checkScreen = () => {
        if (!this.ref) return;
        let detected = new MobileDetect(window.navigator.userAgent);
        if (detected.mobile()) {
            this.ref.behaviors.disable('drag');
            console.log('sucsses');
        }
        else {
            this.ref.behaviors.enable('drag');
        }
    }

    dragDisable = () => {
        if (!this.ref) return;
        if (this.ref && window.screen.width < 576) {
            this.ref.behaviors.disable('drag');
            console.log('drag-off');
        }
    }

    setRef = (ref) => {
        this.ref = ref;;
        if (ref) {
            console.log(ref.getBounds());
            ref.setBounds(ref.getBounds(), {zoomCheckRange: true, zoomMargin: 10})
            .then(function () {
                console.log('succsess');
            }, function (err) {
                console.log('error', err);
            }, this);
        }
    }

    render() {
        return (
            <YMaps>
                <div className="form-map">
                    <Map 
                        state={this.state} 
                        style={{width: '100%', height: '580px'}} 
                        instanceRef={this.setRef}
                        onLoad={this.dragDisable}
                    >
                        {adresses.map(getMarker).map(placemark => <Placemark 
                            geometry={placemark.coordinates} 
                            options={placemark.options} 
                            properties={placemark.properties} 
                            modules={['geoObject.addon.hint']}
                        />)}
                    </Map>
                </div>
            </YMaps>
        )
    }
}