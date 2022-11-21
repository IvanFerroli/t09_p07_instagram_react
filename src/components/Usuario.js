import React from "react";

export default function Usuario() {
	const [nome, setNome] = React.useState("CatanaComics");
	const [imagem, setImagem] = React.useState("./assets/img/catanacomics.svg");

	function trocaNome() {
		const nomeLindo = prompt("Para qual nome deseja alterar?");
		if (nomeLindo === "" || nomeLindo === null) {
			trocaNome();
			return "Nome inválido"
		} else {
			return nomeLindo;
		}
	}

	function trocaImagem() {
		const imagemLinda = prompt("Para qual imagem deseja alterar?");
		if (imagemLinda === "" || imagemLinda === null) {
			trocaImagem();
		} else {
			return imagemLinda;
		}
	}

	return (
		<div className="usuario" data-test="user">
			<img
				onClick={() => setImagem(trocaImagem)}
				alt="CatanaComics"
				src={imagem}
				data-test="profile-image"
			/>
			<div className="texto">
				<strong>{nome}</strong>
				<span>
					<span data-test="name">{nome}</span>
					<ion-icon
						onClick={() => setNome(trocaNome)}
						name="pencil"
						data-test="edit-name"
					></ion-icon>
				</span>
			</div>
		</div>
	);
}
