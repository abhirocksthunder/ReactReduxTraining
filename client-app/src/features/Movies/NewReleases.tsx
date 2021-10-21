import { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Movies } from '../../models/Movies';
import { moviesActions } from '../../store/moviesStore';
import Cards from './Cards';
import agent from '../api/agent';

export default function NewReleases() {


    const dispatch = useDispatch();
    const newReleases: Movies[] = useSelector((state: any) => state.movies.movies);

    useEffect(() => {
        const fetchNewReleases = () => {
            const response = agent.movies.list();
            dispatch(moviesActions.getNewReleases(response.default as Movies[]))
        }
        fetchNewReleases();
    }, [dispatch])

    const releases = [
        ...newReleases.filter(t => t.image !== ''),
        ...newReleases.filter(t => t.image === ''),
    ];



    if (releases.length === 0) return (
        <div style={{ textAlign: 'center', top:'20%' }}>
            <Spinner animation="border" size="sm" />
        </div>)
    return (
        
        <Container>
            <div>
                New Releases
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {Array.from(releases).sort((a,b)=>parseInt(a.price.split(' ')[1]) - parseInt(b.price.split(' ')[1])).map((movie, idx) => (
                    <Col key={movie.title}>
                        <Cards {...movie} />
                    </Col>
                ))}
            </Row>

        </Container>
    )
}