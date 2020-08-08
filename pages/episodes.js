import Navigation from '../components/navigation';
import Episode from '../components/card-episodes';
import Provider from '../components/provider';

import {gql, useQuery} from '@apollo/client';
import { useRouter } from 'next/router'
import Link from 'next/link';

function Episodes ({page}){
	const episodes = gql`
		{
		  	episodes(page: ${page}){
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
	  	}`;
		const {loading, error, data} = useQuery(episodes);
		if(loading) return <h2 className="alert" style={{background:"#FFDE00", boxShadow: "0 3px 5px #B6B6B6"}}>Loading...</h2>
		if(loading) return <h2 className="alert" style={{background:"#EA2929", boxShadow: "0 3px 5px #B6B6B6"}}>Error</h2>

		return data.episodes.results.map(episode=>(
				<Episode episode={episode}/>
		));

	}


export default class extends React.Component {
	static async getInitialProps({query}) {
		const page = query.page;
		return{page}
	}


	renderPagination(){
		const page = this.props.page;


		const prev = page > 1 ? 
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/episodes?page=${parseInt(page)-1}`}>
				<a>
					<div className="button number" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>{parseInt(page)-1}</a>
					</div>
				</a>
			</Link>
		</div>: null;

		
		
		const next = page == 1 ?
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/episodes?page=${parseInt(page)+1}`}>
				<a>
					<div className="button number" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>{parseInt(page)+1}</a>
					</div>
				</a>
			</Link>
		</div>: null;


		return (
			<div className="pagination col-12 my-5">
		        {prev}
				<Link href={`/episodes?page=${page}`}>
			        <a>
			        	<div className="button number selected" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
							<a>{page}</a>
						</div>
					</a>
				</Link>
		        {next}
		        <style jsx global>{`
					.pagination{
						display: flex;
						justify-content: center;
						align-items: center;
						 wdith: 100%;
					}
					.button{
						width: 40px;
						height: 40px;
						background: #FFDE00;
						box-shadow: 0 3px 5px #CBCBCB,0 0px 3px #CBCBCB;
						border-radius: 5px;
					}
					.selected{
						transform:scale(1.3);
						box-shadow: 0 5px 5px #CBCBCB,0 0px 3px #CBCBCB;
					}
					a{
						color: #4E4E4E;
						font-size: 20px;
						font-weight: bold;
						text-decoration: none;
					}
					a:hover{
						color: #4E4E4E;
						text-decoration: none;
					}
					.number{
						margin: 5px;
					}
					.prev{
						margin-rigth:10px;
					}
					.next{
						margin-left: 10px;
					}

		        `}</style>
		    </div>
			)
	}


	render(){
	  	return(
		    <Provider>
		        <Navigation/>
		        <div className="d-flex justify-content-center flex-wrap my-5 container">
		        	<Episodes page={this.props.page}/>
		        	{this.renderPagination()}
		        </div>
		    </Provider>
	  	)
	}
}
