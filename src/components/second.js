import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class Second extends Component {
	constructor(props) {
        super(props);
        console.log(this.props.userInfo);
    }

    render() {
        return(
    		<View style={styles.mainContainer}>
    			<TouchableHighlight onPress={this.props.navigator.pop}>
                    <Text>Navigate to first screen</Text>
                </TouchableHighlight>
                <Text> Second route </Text>
    		</View>
        );
	}
};

function mapStateToProps(state) {
    return({
        userInfo: state.userInfo
    });
}

export default connect(mapStateToProps)(Second);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});