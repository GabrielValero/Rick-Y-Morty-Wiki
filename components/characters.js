export default function Character({character}){
	var condicional;
	if(character.status==='Alive') condicional = (<div className="d-flex" style={{alignItems:"center"}}>
			Alive
			<div className="ml-2" style={{width:"10px",height:"10px",borderRadius:"10px",background:"#3CFF00", boxShadow:"0 0 2px #3CFF00, 0 0 5px #3CFF00, 0 0 10px #3CFF00"}}>
			</div>
		</div>);
	
	else if(character.status==='Dead')condicional = (<div className="d-flex" style={{alignItems:"center"}}>
			Alive
			<div className="ml-2" style={{width:"10px",height:"10px",borderRadius:"10px",background:"#FF0000", boxShadow:"0 0 2px #FF0000, 0 0 5px #FF0000, 0 0 10px #FF0000"}}>
			</div>
		</div>);
	
	else condicional = (<div className="d-flex" style={{alignItems:"center"}}>
			Alive
			<div className="ml-2" style={{width:"10px",height:"10px",borderRadius:"10px",background:"#888888", boxShadow:"0 0 2px #888888, 0 0 5px #888888, 0 0 10px #888888"}}>
			</div>
		</div>);
 	
 	return(
 		<>
 			<div className="card" key={character.id}>
 				<img className="card-img-top" src={character.image} alt={`Imagen de ${character.name}`}/>
 				<div className="card-body">
 					<h2 className="card-title">{character.name}</h2>
 					{condicional}
 					<br/>
 					<p className="card-text pb-2">{character.name} is from {character.origin.name} of the dimension {character.origin.dimension}</p>
 				</div>
 			</div>
 			<style jsx>{`
				.card{
					width: 300px;
					margin: 20px;
					border: none;
				}
				.card-body{
					border: 1px solid rgba(0, 0, 0, 0.125);
					border-radius: 0 0 10px 10px;
					background: #323232;
					color: #DFDFDF;
				}
 			`}</style>
 		</>
 	);
}