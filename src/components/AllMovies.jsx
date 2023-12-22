import { Col, Container, Row } from 'react-bootstrap'
import MovieList from './MovieList'


const AllMovies = () => {
  

  return (
    <Container className='mx-5'>
        <Row>
            <Col xs={12}>
                <MovieList category="http://www.omdbapi.com/?apikey=130c502d&s=avengers" title="Avengers" />
                <MovieList category="http://www.omdbapi.com/?apikey=130c502d&s=harry%20potter" title="Harry Potter" />
                <MovieList category="http://www.omdbapi.com/?apikey=130c502d&s=harry%20potter" title="Harry Potter" /> 
            </Col>
        </Row>
    </Container>
  )
}

export default AllMovies