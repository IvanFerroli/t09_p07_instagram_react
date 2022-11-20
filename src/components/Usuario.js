import React from 'react'

export default function Usuario() {
	const [nome, setNome] = React.useState("CatanaComics")
	const [imagem, setImagem] = React.useState("./assets/img/catanacomics.svg")

	return (
		<div className="usuario">
			<img onClick={() => setImagem(prompt("Para qual imagem deseja alterar?"))} alt="CatanaComics" src={imagem} />
			<div className="texto">
				<strong>{nome}</strong>
				<span>
					{nome}
					<ion-icon onClick={() => setNome(prompt("Para qual nome deseja alterar?"))} name="pencil"></ion-icon>
				</span>
			</div>
		</div>
	);
}
