import React, {Component} from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import store from '../Redux/Store/store';
// import addTodo from '../Redux/Actions/actions';


import {bindActionCreators} from 'redux';  
import { Add, Subtract, Reset } from '../Redux/Actions/actions';



export class Counter extends Component {

    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState());
        });
    }

    render() {
        return (
            <View>

                <Button onPress={this.props.onAddAction} title="Add"/>
                <Text style={styles.counterElement}>
                    {this.props.data}
                </Text>
                <Button onPress={this.props.onSubtractAction} title="Subtract"/>
                <Button onPress={this.props.onResetAction} title="Reset"/>

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {data: state}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onAddAction      : Add,
        onSubtractAction : Subtract,
        onResetAction: Reset
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
    counterElement: {

        fontSize: 40,
        color: 'green'
    }
})
