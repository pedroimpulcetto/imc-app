import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: '' };
		this.calcular = this.calcular.bind(this);
	}


	calcular() {
		let imc = this.state.massa / (this.state.altura * this.state.altura);
		let s = this.state;
		s.resultado = imc;
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
						onChange={(altura) => {
							this.setState({ altura });
						}}
					/>
					<TextInput
						placeholder="Altura"
						keyboardType="numeric"
						style={styles.input}
						onChange={(massa) => {
							this.setState({ massa });
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
