import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Validation() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Age: "",
            Email: "",
            Address: "",
            PhoneNumber: "",
        },
        validate: (values) => {
            let errors = {}
            if (values.Name === "") {
                errors.Name = `Enter Name`
            }
            if (values.Age === "") {
                errors.Age = "Enter Age"
            }
            if (values.Email === "") {
                errors.Email = "Enter Email"
            }
            if (values.Address === "") {
                errors.Address = "Enter Address"
            }
            if (values.PhoneNumber === "") {
                errors.PhoneNumber = "Enter PhoneNumber"
            }

            return errors;
        },
        onSubmit: (values) => {
            console.log(values)
            navigate("/Products")
        },
    });
    return (
        <>
                                
            <div className="container validation">
                <form onSubmit={formik.handleSubmit} className="form">
                    <div className="row">
                        <div className="col-lg-12 my-4">
                            <lable>Name</lable>
                            <input
                                className="form-control pborder"
                                type={"text"}
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                                name="Name"
                            />
                            

                            <span className="text-danger">{formik.errors.Name}</span>

                        </div>
                        <div className="col-lg-12 my-4">
                            <lable>Age</lable>
                            <input
                                className="form-control"
                                type={"number"}
                                value={formik.values.Age}
                                onChange={formik.handleChange}
                                name="Age"
                            />
                            <span className="text-danger">{formik.errors.Age}</span>
                        </div>
                        <div className="col-lg-12 my-4">
                            <lable>Email</lable>
                            <input
                                className="form-control"
                                type={"Email"}
                                value={formik.values.Email}
                                onChange={formik.handleChange}
                                name="Email"
                            />
                            <span className="text-danger">{formik.errors.Email}</span>
                        </div>
                        <div className="col-lg-12 my-4">
                            <lable>Address</lable>
                            <input
                                className="form-control"
                                type={"string"}
                                value={formik.values.Address}
                                onChange={formik.handleChange}
                                name="Address"
                            />
                            <span className="text-danger">{formik.errors.Address}</span>
                        </div>
                        <div className="col-lg-12 my-4">
                            <lable>PhoneNumber</lable>
                            <input
                                className="form-control"
                                type={"number"}
                                value={formik.values.PhoneNumber}
                                onChange={formik.handleChange}
                                name="PhoneNumber"
                            />
                            <span className="text-danger">{formik.errors.PhoneNumber}</span>
                        </div>
                    </div>
                    <button type="submit" value={"submit"} className="btn btn-primary my-3">
                    Sign In
                    </button>
                </form>
            </div>
        </>
    );
}
export default Validation;
