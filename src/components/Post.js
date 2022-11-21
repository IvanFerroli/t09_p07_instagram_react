import React from 'react'

export default function Post(props) {
	const [isLiked, setIsliked] = React.useState(props.liked);

  function likePost() {
    setIsliked(!isLiked);
  }

	console.log(props);
	return (
		<div className="post">
			<div className="topo">
				<div className="usuario">
					<img alt={props.autor_nome} src={props.autor_imagem} />
					{props.autor_nome}
				</div>
				<div claclassNamess="acoes">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div className="conteudo">
			
          <img alt={props.autor_nome} src={props.post_imagem} onClick={() => setIsliked(true)} />
        
			</div>

			<div className="fundo">
				<div className="acoes">
					<div>
					{isLiked ? (
              <ion-icon
                name="heart"
                class="liked"
                onClick={likePost}
              ></ion-icon>
            ) : (
              <ion-icon name="heart-outline" onClick={likePost}></ion-icon>
            )}	
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>
						<ion-icon name="bookmark-outline"></ion-icon>
					</div>
				</div>

				<div className="curtidas">
					<img alt={props.curtida_nome} src={props.curtida_imagem} />
					<div className="texto">
						Curtido por <strong>{props.curtida_nome}</strong> e{" "}
						<strong>outras {props.curtida_qtd} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
