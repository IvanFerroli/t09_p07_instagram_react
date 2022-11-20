export default function Usuario(props) {
	return (
		<div className="usuario">
			<img src={props.imagem} />
			<div className="texto">
				<strong>{props.nome}</strong>
				<span>
					{props.nome}
					<ion-icon name="pencil"></ion-icon>
				</span>
			</div>
		</div>
	);
}
