export default function Story(props) {
	return (
		<div className="story">
			<div className="imagem">
				<img alt={props.nome} src={props.imagem} />
			</div>
			<div className="usuario">{props.nome}</div>
		</div>
	);
}
