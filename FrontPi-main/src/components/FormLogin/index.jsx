import { useFormik } from 'formik';
import { Link } from "react-router-dom";

const login = {
    nome: "Luciano Vilela",
    email: "luciano@email.com",
    password: "123456"
}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email Inválido';
    } else if (values.email != login.email){
        errors.email = 'Por favor tente novamente, suas credenciais são inválidas'
    }

    if (!values.password) {
        errors.password = 'Obrigatório';
    } else if (values.password != login.password){
        errors.password = 'Por favor tente novamente, suas credenciais são inválidas'
    }

    return errors;
};

const LoginForm = () => {
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: () => {
            localStorage.setItem("nome", login.nome)
            window.location.href="/"
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="signup_form">
                <div className="title"><h1>Iniciar Sessão</h1></div>

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


               <button className="btn_login" type="submit">Login</button>
                <p>Ainda não possui conta? <Link to="/signup">Cadastre-se</Link> </p>
            </form>

        </div>
    );
};

export default LoginForm