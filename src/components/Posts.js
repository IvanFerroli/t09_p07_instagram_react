import Post from "./Post";

export default function Posts() {
	const postData = [
		{
			id: "1",
			autor_nome: "meowed",
			autor_imagem: "./assets/img/meowed.svg",
			post_imagem: "./assets/img/gato-telefone.svg",
			curtida_imagem: "./assets/img/respondeai.svg",
			curtida_nome: "respondeai",
			curtida_qtd: "101.523",
			liked: false,
		},
		{
			id: "2",
			autor_nome: "barked",
			autor_imagem: "./assets/img/barked.svg",
			post_imagem: "./assets/img/dog.svg",
			curtida_imagem: "./assets/img/adorable_animals.svg",
			curtida_nome: "adorable_animals",
			curtida_qtd: "301.523",
			liked: false,
		},
		{
			id: "3",
			autor_nome: "meowed",
			autor_imagem: "./assets/img/meowed.svg",
			post_imagem: "./assets/img/gato-telefone.svg",
			curtida_imagem: "./assets/img/respondeai.svg",
			curtida_nome: "respondeai",
			curtida_qtd: "999.523",
			liked: false,
		},
		{
			id: "4",
			autor_nome: "barked",
			autor_imagem: "./assets/img/barked.svg",
			post_imagem: "./assets/img/dog.svg",
			curtida_imagem: "./assets/img/adorable_animals.svg",
			curtida_nome: "adorable_animals",
			curtida_qtd: "109.529",
			liked: false,
		},
	];

	return (
		<div className="posts">
			{postData.map((postItem) => (
				<Post
					key={postItem.id}
					autor_nome={postItem.autor_nome}
					autor_imagem={postItem.autor_imagem}
					post_imagem={postItem.post_imagem}
					curtida_imagem={postItem.curtida_imagem}
					curtida_nome={postItem.curtida_nome}
					curtida_qtd={postItem.curtida_qtd}
					liked={postItem.liked}
				/>
			))}
		</div>
	);
}
