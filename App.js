import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Props, Image, Keyboard, ScrollView } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			altura: 0,
			massa: 0,
			resultado: 0,
			resultadoText: require,
			imagem01: require('./01.png'),
			imagem02: require('./03.png'),
			imagem03: require('./02.png'),
			imagem04: require('./04.png'),
			imagem05: require('./05.png'),
			imagem06: require('./06.png')
		};
		this.calcular = this.calcular.bind(this);
	}

	calcular() {
		let imc = this.state.massa / (this.state.altura * this.state.altura);
		let s = this.state;
		s.resultado = imc;

		if (imc < 18.5) {
			s.resultadoText = s.imagem01;
		} else if (imc >= 18.5 && imc < 25) {
			s.resultadoText = s.imagem02;
		} else if (imc >= 25 && imc < 30) {
			s.resultadoText = s.imagem03;
		} else if (imc >= 30 && imc < 35) {
			s.resultadoText = s.imagem04;
		} else if (imc >= 35 && imc < 40) {
			s.resultadoText = s.imagem05;
		} else {
			s.resultadoText = s.imagem06;
		}

		this.setState(s);
	}

	render() {
		return (
			<ScrollView style={styles.container} keyboardDismissMode={'on-drag'}>
				<View style={styles.entradas}>
					<TextInput
						placeholder="Massa"
						keyboardType="numeric"
						style={styles.input}
						onChangeText={(massa) => {
							this.setState({ massa });
						}}
					/>
					<TextInput
						placeholder="Altura"
						keyboardType="numeric"
						style={styles.input}
						onChangeText={(altura) => {
							this.setState({ altura });
						}}
					/>
				</View>
				<View>
					<TouchableOpacity onPress={this.calcular} style={styles.botao}>
						<Text style={styles.botaoText}>Calcular</Text>
					</TouchableOpacity>
					<Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
					<Image style={styles.imagem} source={this.state.resultadoText} />
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	entradas: {
		flexDirection: 'row'
	},
	input: {
		height: 80,
		textAlign: 'center',
		width: '50%',
		fontSize: 50,
		marginTop: 24
	},
	botao: {
		backgroundColor: '#99ff99'
	},
	botaoText: {
		alignSelf: 'center',
		padding: 30,
		fontSize: 25,
		color: 'gray',
		fontWeight: 'bold'
	},
	resultado: {
		alignSelf: 'center',
		color: 'lightgray',
		fontSize: 65,
		padding: 15
	},
	imagem: {
		width: 90,
		height: 320,
		textAlign: 'center',
		alignSelf: 'center'
	}
});
