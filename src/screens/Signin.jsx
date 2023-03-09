import { useState } from "react"
import { Formik } from "formik"
import "../styles/signin.css"
const Signin = () => {
    const [firstName, setFirstName] = useState('')
    const handleSubmit = () => {
        alert("SUBMITED!!!")
    }
    const handleChange = (e) => {
        setFirstName(e.target.value)
    }
    return (
        <div className="signin">
            <div className="container">
                <h1>Sign in</h1>
                <p>Let's join us!</p>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            //insert axios.post
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <div className="input">
                                    <input type="text" name="firstName" id="firstName" onChange={handleChange} value={values.firstName} />
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="input">
                                    <input type="text" name="lastName" id="lastName" onChange={handleChange} value={values.lastName} />
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                            </div>
                            <div className="input">
                                <input type="email" name="email" id="email" onChange={handleChange} value={values.email} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input">
                                <input type="password" name="password" id="password" onChange={handleChange} value={values.password} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button type="submit" disabled={isSubmitting}>Submit!</button>
                            {/* <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button> */}
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Signin;