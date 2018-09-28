import React from 'react';
import Time from './components/Time';
import { Provider } from 'react-redux';
import Store from './redux/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={ Store }>
                <Time />
            </Provider>
        );
    }
}

export default App;