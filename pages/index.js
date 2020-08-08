import Navigation from '../components/navigation';
import Provider from '../components/provider';
import Card from '../components/card-character';
import Location from '../components/card-location';
import Episode from '../components/card-episodes';

import {gql, useQuery} from '@apollo/client';
import Link from 'next/link';

const CHARACTERS = gql`
	{
	  characters{
	  		info{
	  			count
	  		}
		  	results{
		  		id
			    name
			    status
			    image
		    }
		}

		locations{
			info{
				count
			}
		    results{
			    id
			    name
			    dimension
		      	residents{
			        name
			        image
			    }
		    }
		}

		episodes{
		    info{
		      	count
		    }
		    results{
			    id
			    name
			    air_date
			    episode
		      	characters{
			        id
			        name
		        	image
		      	}
		    }
		}
	}
`;
function Main(){
	const {loading, error, data} = useQuery(CHARACTERS);
	if(loading) return (
		<div className="d-flex justify-content-center mt-5">
			<h2 className="alert" style={{background:"#FFDE00", boxShadow: "0 3px 5px #B6B6B6"}}>
				loading...
			</h2>
		</div>
	)
	if(loading) return <h2 className="alert alert-danger">error</h2>

	return(
		<main>
			<div className="mt-5 container">
		       	<Link href="/characters?page=1">
		    		<a className="mb-3 h2">Characters</a>
		    	</Link>
		        <div className="characters">
		        	<div className="padre">
		        		{data.characters.results.map(character=>(
							<div className="d-flex justify-content-center align-middle">
								<Card character={character} />
							</div>
						))}
						<div className="d-flex justify-content-center" style={{ alignItems: "center"}}>
							<div className="d-flex justify-content-center" style={{width:"130px", alignItems: "center", fontSize:"40px",fontWeight:"bold"}}>{data.characters.info.count}+</div>
						</div>
		        	</div>
		        </div>
		    </div>
		    <div className="mt-5 container">
		    	<div className="mb-3">
		    		<Link href="/locations?page=1">
			    		<a className=" h2">Locations</a>
			    	</Link>
		    	</div>
		    	{data.locations.results.slice(3,6).map(location=>(
		    		<Location location={location}/>
		    		))}
		    	<div className="text-center">
		    		<Link href="/locations?page=1">
		    			<a className="btn font-weight-bold px-4" style={{background:"#FFDE00", boxShadow: "0 3px 5px #B6B6B6", fontSize: "25px"}}>{data.locations.info.count}+</a>
		    		</Link>
		    	</div>
		    </div>
		    <div className="mt-5 container">
		    	<div className="mb-3">
		    		<Link href="/episodes?page=1">
			    		<a className=" h2">Episodes</a>
			    	</Link>
		    	</div>
		    	{data.episodes.results.slice(0,3).map(episode=>(
		    		<Episode episode={episode}/>
		    		))}
		    	<div className="text-center">
		    		<Link href="/episodes?page=1">
		    			<a className="btn font-weight-bold px-4 mb-5" style={{background:"#FFDE00", boxShadow: "0 3px 5px #B6B6B6", fontSize: "25px"}}>{data.episodes.info.count}+</a>
		    		</Link>
		    	</div>
		    </div>

		       	<style jsx>{`
		       		a{
		       			color: #303030;
		       			text-decoration: none;
		       		}
		       		a:hover{
		       			color: #16E673;
		       		}
					.characters{
						display:flex;
						justify-content: center;
						align-items: center;
						overflow-x:scroll; 
						position:relative;
						padding: 0;
						margin: 0;
					}
					.characters::-webkit-scrollbar{
						background: #323232;
						border-radius: 10px;
						height: 13px;
					}
					.characters::-webkit-scrollbar-thumb{
						background: #FFDE00;
						box-shadow: 0 0 5px #FFDE00,0 0 10px #FFDE00;
						border-radius: 10px;
					}
					.padre{
						display:flex;
						flex-wrap: no-wrap;
						width:100%;
					}
					.text-gray{
						font-weight: bold;
						color: #303030;
					}
		    	`}</style>
		</main>
		)
}

export default function Home() {
  	return (
	      <Provider>
	        <Navigation/>
	        <Main/>
	      </Provider>
  )
}
