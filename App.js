import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Props } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			altura: 0,
			massa: 0,
			resultado: 0,
			resultadoText: ''
		};
		this.calcular = this.calcular.bind(this);
	}

	calcular() {
		let imc = this.state.massa / (this.state.altura * this.state.altura);
		let s = this.state;
		s.resultado = imc;

		if (imc < 18.5) {
			s.resultadoText = 'Abaixo do Peso';
		} else if (imc >= 18.5 && imc < 25) {
			s.resultadoText = 'Peso Normal';
		} else if (imc >= 25 && imc < 30) {
			s.resultadoText = 'Sobrepeso';
		} else if (imc >= 30 && imc < 35) {
			s.resultadoText = 'Obesidade I';
		} else if (imc >= 35 && imc < 40) {
			s.resultadoText = 'Obesidade II';
		} else {
			s.resultadoText = 'Obesidade III';
		}

		this.setState(s);
	}

	render() {
		return (
			<View style={styles.container}>
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
					<Text style={[ styles.resultado, { fontSize: 35 } ]}>{this.state.resultadoText}</Text>
				</View>
			</View>
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
	}
});
