export default function Location({location}){

	return(
		<>
			<div className="location flex-column flex-md-row" key={location.name}>
				<div className="col-12 col-md-5">
					<h2>{location.name}</h2>
					<h4>Dimension: {location.dimension}</h4>
					<p>Description: {location.name} is a planet... probably, where live happily more than {location.residents.length} residents...</p>
				</div>
				<div className="col-12 col-md-6">
					<h2>Residents</h2>
					<br/>
					<div className="residents">
					{location.residents.slice(0,12).map(resident=>(
						<div>
							<img src={resident.image} width="100%" alt={`Imagen de ${resident.name}`} className="img-res"/>
						</div>
						))}
					</div>
				</div>
			</div>
			<style jsx>{`
				.location{
					width: 100%;
					padding:20px 0;
					margin-bottom: 20px;
					display: flex;
					justify-content: space-around;
					color: #D1D1D1;
					background: #212121;
					border-radius: 13px;
				}
				.residents{
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