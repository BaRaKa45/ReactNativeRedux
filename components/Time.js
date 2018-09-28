import React from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Text, 
    StyleSheet,
} from 'react-native';

class Time extends React.Component {
    constructor(props) {
        super(props);
        setInterval(this.props.update, 1000);
    }

    render() {
        console.log(this.state);
        return (
            <View style={ styles.container }>
                <Text style= { styles.timer } >
                    { this.props.hours } : { this.props.minutes } : { this.props.seconds }
                </Text>
            </View>
        );
    }
}

function stateToProps(state) {
    return {
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds, 
    }
}

function actions(dispatch){
    return { 
        update : () => dispatch({ type: 'UPDATE_HOUR' }),
     }
}

export default connect(stateToProps, actions)(Time);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    timer : {
        fontSize: 72,
    }
});