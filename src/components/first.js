import React, { Component, ReactNativeComponentTree } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserData } from '../actions/index';

class First extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			isLoading: false,
			error: false
		};
		this.onSubmitHandle = this.onSubmitHandle.bind(this);
	}

	onSubmitHandle() {
		this.props.getUserData(this.state.searchTerm);
		this.setState({searchTerm: ''});
		this.props.navigator.push({
			id: 'second'
		});
	}

	render() {
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Search for a github user</Text>
				<TextInput
					style={styles.searchInput}
					value={this.state.searchTerm}
					underlineColorAndroid="transparent"
					onChange={(event) => this.setState({searchTerm: event.nativeEvent.text})}
				/>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onSubmitHandle}
					underlayColor="white"
				>
					<Text style={styles.buttonText}>Search</Text>
				</TouchableHighlight>
			</View>
		);
	}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUserData }, dispatch);
}

export default connect(null, mapDispatchToProps)(First);

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
        color: '#fff',
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