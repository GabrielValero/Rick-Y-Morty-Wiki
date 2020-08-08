export default function Card({character}){
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
 			<div className="card">
 				<img className="card-img-top" src={character.image} alt={`Imagen de ${character.name}`}/>
 				<div className="card-body">
 					<p className="card-title pb-0 mb-0">{character.name}</p>
 					{condicional}
 				</div>
 			</div>
 			<style jsx>{`
				.card{
					width: 200px;
					margin: 10px 15px;
					border: none;
				}
				.card-title{
					font-size: 20px;
					font-weight: bold;
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