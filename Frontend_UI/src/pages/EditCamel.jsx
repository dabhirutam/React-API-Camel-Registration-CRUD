import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SingleCamelAsync, UpadateCamelAsync } from "../services/actions/SubmitAction";
import { useNavigate, useParams } from "react-router";

const EditCamel = () => {

    const { camel, isUpadated } = useSelector((state) => state.SubmitReducer);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        health: '',
        ownerName: '',
        contact: '',
        breed: '',
        gender: '',
        description: '',
        color: '',
    });
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpadateCamelAsync(formData));
    };

    useEffect(() => {
        dispatch(SingleCamelAsync(id));
    }, []);

    useEffect(() => {
        camel && setFormData(camel);
    }, [camel]);

    useEffect(() => {
        isUpadated && navigate('/');
    }, [isUpadated]);

    return (
        <Container>
            <Row className="justify-content-center pt-5">
                <Col md={10} xs={12} className="border border-secondary rounded-3 p-4 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex flex-wrap align-items-center mb-4 row-gap-2 text-center text-lg-start">
                        <h2 className="col-lg-6 col-12">Camel Edit Profile Form</h2>
                        <Col lg={6} xs={12} className="text-lg-end">
                            <Button onClick={() => navigate('/')} variant="info" className="text-white fw-bold fs-5 me-3"><i className="bi bi-house-fill"></i></Button>
                            <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                        </Col>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 row-gap-3">
                            <Form.Group controlId="camelName">
                                <Form.Control type="text" name="id" hidden />
                            </Form.Group>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelName">
                                    <Form.Control type="text" name="name" placeholder="Enter camel name" value={formData.name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelAge">
                                    <Form.Control type="number" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelHealth">
                                    <Form.Control type="text" name="health" placeholder="Enter health condition" value={formData.health} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelBreed">
                                    <Form.Control type="text" name="breed" placeholder="Enter breed" value={formData.breed} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelGender">
                                    <Form.Select name="gender" value={formData.gender} onChange={handleChange} >
                                        <option value="">Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group controlId="camelColor">
                                    <Form.Control type="text" name="color" placeholder="Enter camel's color" value={formData.color} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={6} xs={12}>
                                <Form.Group className="mb-3" controlId="ownerName">
                                    <Form.Control type="text" name="ownerName" placeholder="Enter owner's name" value={formData.ownerName} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Group className="mb-3" controlId="ownerContact">
                                    <Form.Control type="tel" name="contact" placeholder="Enter contact number" value={formData.contact} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3" controlId="camelDescription">
                                    <Form.Control as="textarea" rows={3} name="description" placeholder="Enter any additional description" value={formData.description} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit" className="w-100">
                            Edit Camel
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditCamel;