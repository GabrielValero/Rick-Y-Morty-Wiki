export default function Episode({episode}){

	return(
		<>
			<div className="episode flex-column flex-md-row" key={episode.name}>
				<div className="col-12 col-md-5">
					<h2>{episode.name}</h2>
					<h4>Emited: {episode.air_date}</h4>
					<p>Description: is the episode {episode.episode} known as {episode.name}, played to air at {episode.air_date} where act happily more than {episode.characters.length} characters...</p>
				</div>
				<div className="col-12 col-md-6">
					<h2>Chapters in episode</h2>
					<br/>
					<div className="characters">
					{episode.characters.slice(0,12).map(character=>(
						<div>
							<img src={character.image} width="100%" alt={`Imagen de ${character.name}`} className="img-res"/>
						</div>
						))}
					</div>
				</div>
			</div>
			<style jsx>{`
				.episode{
					width: 100%;
					padding:20px 0;
					margin-bottom: 20px;
					display: flex;
					justify-content: space-around;
					color: #D1D1D1;
					background: #212121;
					border-radius: 13px;
				}
				.characters{
					display: flex;
					flex-wrap: wrap;
				}
				img.img-res{
					width: 40px;
					margin: 10px;
				}
				@media ()
			
			`}</style>
		 </>
		)
}