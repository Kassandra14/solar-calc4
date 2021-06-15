import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
class Button extends React.Component {
    // Click Event.
    btnClick() {
        window.open("https://www.cleanenergyauthority.com/solar-rebates-and-incentives/colorado");
    }
    render() {
        return (<div>
                <ButtonComponent cssClass='e-link' onClick={this.btnClick.bind(this)}>Go to google</ButtonComponent>
            </div>);
    }
}
ReactDom.render(<Button />, document.getElementById('button'));