import React from 'react'

export default function Usuario() {
	const [nome, setNome] = React.useState("CatanaComics")

	return (
		<div className="usuario">
			<img alt="CatanaComics" src="./assets/img/catanacomics.svg" />
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
