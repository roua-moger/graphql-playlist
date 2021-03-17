import {useQuery, gql} from '@apollo/client';


const BooksQuery = gql`
query GetBooksQuery{
  books{
      name
      genre
      
  }  
}
`

function BookList() {
    
    const { loading, error, data } = useQuery(BooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        console.log(data.books);
    return data.books.map(({name, genre})=> (
      <div>
      <ul id="book-list">
        <li>{name} : {genre} </li>
      </ul>
      </div>
    ));
    
  }
  
  export default BookList;