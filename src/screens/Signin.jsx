import { useState, useEffect } from "react"
import { Formik } from "formik"
import {
    iniciarSocket, terminarSocket,
    subscribeToChat, enviarMensaje, suscribeToChat, enviarRegistro, traerEnviarRegistro
} from '../socket';

import "../styles/signin.css"

const Signin = () => {
    const [firstName, setFirstName] = useState('')
    const id = "18s55Vc"
    // const usuario = prompt("Ingresa tu nombre")
    // const usuario = "Nicolas"
    // const rooms = ['Marcos', 'Pedro', 'Nahuel']
    // const [usuarioRecibe, setUsuarioRecibe] = useState(rooms[0])
    // const [mensaje, setMensaje] = useState('')
    const [chat, setChat] = useState([])


    useEffect(() => {
        if (id) iniciarSocket(id)
        traerEnviarRegistro((err, data) => {
            console.log(data)
            if (err) return;

        })
        return () => {
            terminarSocket();
        }
    }, [id])


    const handleSubmit = () => {

    }
    const handleChange = (e) => {
        setFirstName(e.target.value)
    }
    return (
        <div className="signin">

            {/* <h1>Room: {usuarioRecibe}</h1>
            {rooms.map((r, i) =>
                <button onClick={() => setUsuarioRecibe(r)} key={i}>{r}</button>)}
            <h1>Live Chat:</h1>
            <input type="text" name="name" value={mensaje}
                onChange={e => setMensaje(e.target.value)} />
            <button onClick={() => enviarMensaje(usuarioRecibe, mensaje, usuario)}>Send</button>
            {chat?.map((ch, id) => <p><b>{ch.usuario}: </b>{ch.mensaje}</p>)} */}
            <div className="container">
                <h1>Sign in</h1>
                <p>Let's join us!</p>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
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
                            // alert(JSON.stringify(values, null, 2));

                            enviarRegistro(values, id)
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
                            <div className="input">
                                <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={values.confirmPassword} />
                                <label htmlFor="confirmPassword">Password</label>
                            </div>
                            <button type="submit" disabled={isSubmitting}>Submit!</button>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Signin;