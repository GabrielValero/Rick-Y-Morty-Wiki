import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql/',
	cache: new InMemoryCache()
})

export default function Provider({children}){
	return(
		<ApolloProvider client={client}>

		{children}

		</ApolloProvider>
	)
}