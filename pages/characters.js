import Navigation from '../components/navigation';
import Character from '../components/characters';
import Provider from '../components/provider';

import {gql, useQuery} from '@apollo/client';
import { useRouter } from 'next/router'
import Link from 'next/link';

function Cards ({page}){
		const characters = gql`
			{
			  characters(page: ${page}){
				  	results{
				      id
				      name
				      status
				      species
				      type
				      origin{
				        id
				        name
				        type
				        dimension
				        created
				      }
				      location{
				        id
				        name
				        type
				        dimension
				        created
				      }
				      gender
				      image
				      created
				    }
				}
			}

		`;
		const {loading, error, data} = useQuery(characters);
		if(loading) return <h2 className="alert" style={{background:"#FFDE00", boxShadow: "0 3px 5px #B6B6B6"}}>loading...</h2>
		if(loading) return <h2 className="alert alert-danger">error</h2>

		return data.characters.results.map(character=>(
			<div key={character.id}>
				<Character character={character}/>
			</div>
		));

	}


export default class extends React.Component {
	static async getInitialProps({query}) {
		const page = query.page;
		return{page}
	}


	renderPagination(){
		const page = this.props.page;
		const start = page>3?
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/characters?page=1`}>
				<a>
					<div className="button" style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"5px",marginRigth:"10px"}}>
						<a>1</a>
					</div>
				</a>
			</Link>
			
		</div>: null;

		const prev = page > 1 ? 
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/characters?page=${parseInt(page)-1}`}>
				<a>
					<div className="button prev" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>-</a>
					</div>
				</a>
			</Link>
			{start}
			<Link href={`/characters?page=${parseInt(page)-1}`}>
				<a>
					<div className="button number" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>{parseInt(page)-1}</a>
					</div>
				</a>
			</Link>
		</div>: null;

		const end = page<25?
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/characters?page=30`}>
				<a>
					<div className="button" style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"5px",marginLeft:"10px"}}>
						<a>30</a>
					</div>
				</a>
			</Link>
			
		</div>: null;
		
		const next = page < 30 ?
		<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
			<Link href={`/characters?page=${parseInt(page)+1}`}>
				<a>
					<div className="button number" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>{parseInt(page)+1}</a>
					</div>
				</a>
			</Link>
			{end}
			<Link href={`/characters?page=${parseInt(page)+1}`}>
				<a>
					<div className="button next" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
						<a>+</a>
					</div> 
				</a>
			</Link>
		</div>: null;
		return (
			<div className="pagination col-12 my-5">
		        {prev}
		        <div className="button number selected" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
					<Link href={`/characters?page=${page}`}>
						<a>{page}</a>
					</Link>
				</div>
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
		        <div className="d-flex justify-content-center flex-wrap my-5">
		        	<Cards page={this.props.page}/>
		        	{this.renderPagination()}
		        </div>
		    </Provider>
	  	)
	}
}
