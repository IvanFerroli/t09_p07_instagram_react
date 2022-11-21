import React from 'react'

export default function Usuario() {
	const [nome, setNome] = React.useState("CatanaComics")
	const [imagem, setImagem] = React.useState("./assets/img/catanacomics.svg")

	return (
		<div className="usuario" data-test="user">
			<img onClick={() => setImagem(prompt("Para qual imagem deseja alterar?"))} alt="CatanaComics" src={imagem} data-test="profile-image"/>
			<div className="texto">
				<strong>{nome}</strong>
				<span>
					<span data-test="name">{nome}</span>
					<ion-icon onClick={() => setNome(prompt("Para qual nome deseja alterar?"))} name="pencil" data-test="edit-name"></ion-icon>
				</span>
			</div>
		</div>
	);
}
