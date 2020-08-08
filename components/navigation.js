import Link from 'next/link'
import Head from 'next/head';



const Navigation = ()=>{
	return(
		<>
			<Head>
				<meta chartset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

				<title>Dimensions Site|RyM Wiki</title>

				<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
				<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
			</Head>

			<nav className="navbar navbar-expand-lg">
				<button className="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" aria-label="Toggle navigation">
				    <span className="barra"></span>
				    <span className="barra"></span>
				    <span className="barra"></span>
				</button>
				<div className="collapse navbar-collapse derecho" id="navbarTogglerDemo01">
				    <div className="p-navigation p-izquierdo mr-md-auto">
				    	<div className="h-navigation">
					      	<div className="nav-item">
					        		<a href="https://rickandmortyapi.com/" className="nav-link" target="_blank">API</a>
					      	</div>
				    		<div className="nav-item active">
					        	<a className="nav-link">Have FUN</a>
					      	</div>
					      	<div className="nav-item">
					        	<Link href="/">
					        		<a className="nav-link">Inicio</a>
					        	</Link>
					      	</div>
				    	</div>
				    </div>
				</div>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				    <div className="p-navigation p-derecho ml-md-auto ">
				    	<div className="h-navigation">
				    		<div className="nav-item active">
					        	<Link href="/characters?page=1">
					        		<a className="nav-link">Characters</a>
					        	</Link>
					      	</div>
					      	<div className="nav-item">
					        	<Link href="/locations?page=1">
					        		<a className="nav-link">Locations</a>
					        	</Link>
					      	</div>
					      	<div className="nav-item">
					        	<Link href="/episodes?page=1">
					        		<a className="nav-link">Episodes</a>
					        	</Link>
					      	</div>
				    	</div>
				    </div>
				</div>
			</nav>
			
			<style jsx>{`
				nav{
					width:100vw;
					height: 70px;
					background: #323232;
					position: relative;
					z-index: 3;
				}
				.navbar{
					padding: 0;
				}
				@media (max-width: 990px){
					.menu{
						width: 40px;
						height: 100%;
						margin-left: auto;
						margin-right: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						padding: 0;
					}
					.p-navigation{
						background: white;
						overflow: hidden;
					}
					h-navigation{
						background: #323232;
					}
					.barra{
						background: white;
						width: 40px;
						padding: 3px;
						margin: 2px;
						border-radius: 20px;
					}
					.nav-item{
						padding: 10px 0;
						display: flex;
						justify-content: center;
						align-items: center;
						background: white;
						transition-duration: 0.5s;
					}
					.nav-item:hover{
						background: #323232;
						transition-duration: 0.3s;
					}
					a{
						width: 80%;
						height: 100%;
						padding: 0 10px;
						color: #323232;
						border-bottom: 1px solid #323232;
						font-size: 20px;
						font-weight: bold;
						text-align:center;
						transition-duration: 0.5s;
					}
					a:hover{
						color: white;
						border-bottom: 1px solid white;
						transition-duration: 0.3s;
					}
				}

				@media (min-width: 990px){
					div.navbar-collapse{
						height: 100%;
					}
					.p-navigation{
						width: 300px;
						height: 100%;
						margin-right: 100px;
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.derecho{
						margin-left:80px;
					}
					.p-derecho::before{
						content: '';
						position: absolute;
						z-index: 0;
						width: 110%;
						height: 400%;
						transform: rotate(30deg);
						background: #2DDA56;
					}
					.p-izquierdo::before{
						content: '';
						position: absolute;
						z-index: 0;
						width: 110%;
						height: 400%;
						transform: rotate(-30deg);
						background: #2DDA56;
					}
					.h-navigation{
						position: relative;
						z-index: 1;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.h-navigation div a{
						font-size: 20px;
						font-weight: bold;
						color: #323232;
					}
					.h-navigation div a:hover{
						color: white;
					}
					button{
						display: none;
					}
					nav{
						overflow: hidden;
					}
				}
			`}</style>
			<style jsx global>{`
				body{
					margin: 0;
					padding: 0;
					max-width:100vw;
					min-height: 100vh;
					overflow-X: hidden;
				}
				body::-webkit-scrollbar{
					background: #323232;
					width: 13px;
				}
				body::-webkit-scrollbar-thumb{
					background: #FFDE00;
					box-shadow: 0 0 5px #FFDE00,0 0 10px #FFDE00, 0 0 15px #FFDE00, 0 0 20px #FFDE00;
					border-radius: 10px;
				}
				*::selection{
					background: transparent;
					color: #FFD200;
				}
				img::selection{
					background: #FFA800;
				}
				`}</style>
		</>
		)
}
export default Navigation;