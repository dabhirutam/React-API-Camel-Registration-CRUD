import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteCamelConform, ViewCamelAsync } from "../services/actions/SubmitAction";

const CamelHistory = () => {

    const { camels } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ViewCamelAsync());
    }, [])
    

    return (
        <>
            <Container>
                <Row className="py-5 text-center">
                    <Col md={12} className="p-4 rounded-4 border border-secondary bg-dark bg-opacity-10 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>View Camel History</h2>
                            <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                        </div>
                        <Table bordered hover>
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Camel ID</th>
                                    <th>Camel Name</th>
                                    <th>Age</th>
                                    <th>Health</th>
                                    <th>Breed</th>
                                    <th>Gender</th>
                                    <th>Color</th>
                                    <th>Owner Name</th>
                                    <th>Contact</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    camels.map((camel, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{camel.id}</td>
                                                <td>{camel.name}</td>
                                                <td>{camel.age}</td>
                                                <td>{camel.health}</td>
                                                <td>{camel.breed}</td>
                                                <td>{camel.gender}</td>
                                                <td>{camel.color}</td>
                                                <td>{camel.ownerName}</td>
                                                <td>{camel.contact}</td>
                                                <td>{camel.description}</td>
                                                <td>
                                                    <Button className="btn btn-primary" onClick={() => navigate(`/edit/${camel.id}`)}>
                                                        <i className="bi bi-pencil-square"></i>
                                                    </Button>
                                                    &nbsp; || &nbsp;
                                                    <Button className="btn btn-danger" onClick={() => dispatch(DeleteCamelConform(camel.id))}>
                                                        <i className="bi bi-trash-fill"></i>
                                                    </Button>
                                                    &nbsp; || &nbsp;
                                                    <Button className="btn btn-success">
                                                        <i className="bi bi-eye-fill"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CamelHistory;