import React, {Component} from 'react'
import {Text, View, Button, StyleSheet } from 'react-native'

import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import store from '../Redux/Store/store'
import {Add, Subtract, Reset} from '../Redux/Actions/actions'

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
                <Text style = {styles.counterElement} > {this.props.data} </Text>
                <Button onPress={this.props.onSubtractAction} title="Subtract"/>
                <Button onPress={this.props.onResetAction} title="Reset"/>

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddAction: () => {
            dispatch({type: 'ADD'})
        },
        onSubtractAction: () => {
            dispatch({type: 'Subtract'})
        },
        onResetAction: () => {
            dispatch({type: 'Reset'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({ 
    counterElement:{ fontSize:40 }
 })
