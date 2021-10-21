import { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Products } from '../../models/Products';
import { productsActions } from '../../store/productsStore';
import agent from '../api/agent';
import Cards from '../Movies/Cards';

export default function Dashboard() {


    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await agent.products.list();
        dispatch(productsActions.getProducts(response));
    }

    useEffect(() => {

        fetchProducts();
    }, []);
    const products: Products[] = useSelector((state: any) => state.products.products);

    if (products.length === 0) return (
        <div style={{ textAlign: 'center', top: '20%' }}>
            <Spinner animation="border" size="sm" />
        </div>)

    return (
        <Container>
            <div>
                New Products
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {Array.from(products).sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).map((product, idx) => (
                    <Col>
                        <Cards {...product} />
                    </Col>
                ))}
            </Row>

        </Container>

    )
}