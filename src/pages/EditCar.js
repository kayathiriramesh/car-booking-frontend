import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { editCar, getAllCars } from "../redux/actions/carsActions";
function EditCar() {
    const { cars } = useSelector((state) => state.carsReducer);
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
    const [car, setcar] = useState();
    const [totalcars, settotalcars] = useState([]);
    const match = useParams()
    useEffect(() => {
        if (cars.length === 0) {
            dispatch(getAllCars());
        } else {
            settotalcars(cars);
            setcar(cars.find((o) => o._id === match.carid));
            console.log(car);
        }
    }, [cars]);

    function onFinish(values) {
        values._id = car._id;

        dispatch(editCar(values));
        console.log(values);
    }

    return (
        <DefaultLayout>
            {loading && <Spinner />}
            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24} className='p-2'>
                    {totalcars.length > 0 && (
                        <Form
                            initialValues={car}
                            className="bs1 p-2"
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <h3>Edit Product</h3>

                            <hr />
                            <Form.Item
                                name="name"
                                label="Product name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="image"
                                label="Image url"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="rentPerHour"
                                label="Rent per hour"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="capacity"
                                label="Capacity"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="fuelType"
                                label="Product Type"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>

                            <div className="text-right">
                                <button className="btn1">Edit Product</button>
                            </div>
                        </Form>
                    )}
                </Col>
            </Row>
        </DefaultLayout>
    );
}

export default EditCar;