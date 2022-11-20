import Sugestao from "./Sugestao";

export default function Sugestoes() {
	const sugestaoData = [
		{
			id: "1",
			imagem: "./assets/img/bad.vibes.memes.svg",
			nome: "bad.vibes.memes",
			status: "Segue você",
			acao: "Seguir",
		},
		{
			id: "2",
			imagem: "./assets/img/chibirdart.svg",
			nome: "chibirdart",
			status: "Segue você",
			acao: "Seguir",
		},
		{
			id: "3",
			imagem: "./assets/img/razoesparaacreditar.svg",
			nome: "razoesparaacreditar",
			status: "Novo no Instagram",
			acao: "Seguir",
		},
		{
			id: "4",
			imagem: "./assets/img/chibirdart.svg",
			nome: "chibirdart",
			status: "Segue você",
			acao: "Seguir",
		},
		{
			id: "5",
			imagem: "./assets/img/razoesparaacreditar.svg",
			nome: "razoesparaacreditar",
			status: "Novo no Instagram",
			acao: "Seguir",
		},
	];

	return (
		<div className="sugestoes">
			<div className="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>
			{sugestaoData.map((sugestaoItem) => (
				<Sugestao
					key={sugestaoItem.id}
					imagem={sugestaoItem.imagem}
					nome={sugestaoItem.nome}
					status={sugestaoItem.status}
					acao={sugestaoItem.acao}
				/>
			))}
		</div>
	);
}
