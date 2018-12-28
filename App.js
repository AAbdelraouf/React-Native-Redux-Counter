import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './Source/Redux/Store/store'

import Counter from './Source/Counter/Counter'

class App extends Component {
    render() {
        return (

            <Provider store={store}>

                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Counter/>
                </View>

            </Provider>

        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});