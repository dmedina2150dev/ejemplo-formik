import { Formik, Form, ErrorMessage } from 'formik'; // TODO: este hooks devuelve varias utilidades para crear y manejar formularios
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Requerido';
	} else if (values.name.length < 5) {
		errors.name = 'El nombre es muy corto'
	}

	if (!values.lastname) {
		errors.lastname = 'Requerido';
	} else if (values.lastname.length < 5) {
		errors.lastname = 'El apellido es muy corto'
	}

	if (!values.email) {
		errors.email = 'Requerido';
	}

	if (!values.radio) {
		errors.radio = 'Requerido'
	}


	return errors;
}


function App() {
	return (
		<Formik
			initialValues={{ name: '', lastname: '', email: '', chancho: '', accept: false, radio: ''}}
			validate={validate}
			onSubmit={values => console.log(values)}
		>
			<Form>
				{/* Componente Formik custom */}

				<TextInput name="name" label="Nombre"/>	
				<br />
				<TextInput name="lastname" label="Apellido" />	
				<br />
				<TextInput name="email" label="Email" />	
				<br />
				<Select label="Tipo de chancho" name="chancho">
					<option value="">-- Seleccione Chancho ---</option>
					<option value="chanchitoFeliz">Chanchito Feliz</option>
					<option value="chanchitoTriste">Chanchito Triste</option>
					<option value="felipe">Felipe</option>
				</Select>
				<br />
				<Checkbox name="accept">
					Aceptar terminos y condiciones
				</Checkbox>
				<br />
				<Radio label='Chanchito 1' name='radio'  value="chancho1" />
				<Radio label='Chanchito 2' name='radio'  value="chancho2" />
				<Radio label='Chanchito 3' name='radio'  value="chancho3" />
				<ErrorMessage name='radio' />
				<br />
 
				<button type='submit'>Enviar</button>
			</Form>
		</Formik>
	);
}

export default App;
