import Story from "./Story";

export default function Stories() {

  const storiesData = [
    {
      id: '1',
      imagem: './assets/img/9gag.svg',
      nome: '9gag'
    },
    {
      id: '2',
      imagem: './assets/img/meowed.svg',
      nome: 'meowed'
    },
    {
      id: '3',
      imagem: './assets/img/barked.svg',
      nome: 'barked'
    },
    {
      id: '4',
      imagem: './assets/img/wawawicomics.svg',
      nome: 'wawawicomics'
    },
    {
      id: '5',
      imagem: './assets/img/nathanwpylestrangeplanet.svg',
      nome: 'nathanwpylestrangeplanet'
    },
    {
      id: '6',
      imagem: './assets/img/filomoderna.svg',
      nome: 'filomoderna'
    },
    {
      id: '7',
      imagem: './assets/img/respondeai.svg',
      nome: 'respondeai'
    },
    {
      id: '8',
      imagem: './assets/img/memeriagourmet.svg',
      nome: 'memeriagourmet'
    },
  ];

	return (
		<>
			<div className="stories">
				{storiesData.map((storiesItem) => (<Story key={storiesItem.id} imagem={storiesItem.imagem} nome={storiesItem.nome}/>))}
				<div className="setinha">
					<ion-icon name="chevron-forward-circle"></ion-icon>
				</div>
			</div>
		</>
	);
}

