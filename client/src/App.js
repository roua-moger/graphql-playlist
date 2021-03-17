import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';


//components
import Booklist from './components/BookList';

//apollo client setup
const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book's Reading List</h1>
        <Booklist></Booklist>
      </div>
    </ApolloProvider>
  );
}

export default App;
