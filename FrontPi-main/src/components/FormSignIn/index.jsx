import { useFormik } from 'formik';
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';

import "./style.css"


const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Obrigatório';
    }

    if (!values.last_name) {
        errors.last_name = 'Obrigatório';
    }

    if (!values.email) {
        errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Obrigatório';
    } else if (values.password.length < 6) {
        errors.password = 'A senha deve ser maior que 6 caracteres';
    }

    if (!values.confirm_password) {
        errors.confirm_password = 'Obrigatório';
    } else if (values.confirm_password.value !== values.password.value) {
        errors.confirm_password = 'As senhas devem ser iguais!';
    }

    return errors;
};

const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validate,
        onSubmit: values => {
            alert("Conta Criada! Por favor realize o login");
            window.location.href="/login"
    },
    });
    return (
        <div>
        <form onSubmit={formik.handleSubmit} className="signup_form">
        <div className="title"><h1>Criar Conta</h1></div>
            <div className="user_name">
            <div className="signup_input_flex">
            <label htmlFor="name">Nome</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
            ) : null}
            </div>

            <div className="signup_input_flex">
            <label htmlFor="last_name">Sobrenome</label>
            <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
               <div className="error">{formik.errors.last_name}</div>
            ) : null}
            </div>

            </div>
            

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Senha</label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confirm_password">Confirme a senha</label>
            <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
            />
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
                <div className="error">{formik.errors.confirm_password}</div>
            ) : null}

            <button className="create_account" type="submit">Submit</button>
            <p>Já tem uma conta? <Link to="/login">Inicie uma sessão</Link></p>
        </form>
        
        </div>
    );
};

export default SignupForm