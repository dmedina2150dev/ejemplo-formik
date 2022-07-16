import { Formik, Form, Field, ErrorMessage } from 'formik'; // TODO: este hooks devuelve varias utilidades para crear y manejar formularios
import Checkbox from './components/Checkbox';
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

	if (!values.name) {
		errors.name = 'Requerido';
	} else if (values.name.length < 5) {
		errors.name = 'El nombre es muy corto'
	}

	return errors;
}


function App() {
	return (
		<Formik
			initialValues={{ name: '', lastname: '', email: '', texto: '', chancho: '', accept: false}}
			validate={validate}
			onSubmit={values => console.log(values)}
		>
			<Form>
				{/* Componente Formik custom */}

				<TextInput name="name" label="Nombre"/>
				{/* <label>Nombre</label> */}
				{/* <Field name="name" type="text" className="input" /> */}
				{/* <ErrorMessage name='name' /> */}
				
				<br />
				<label>Apellido</label>
				<Field name="lastname" type="text"/>			
				<ErrorMessage  name="lastname" />
				<br />
				<label>Email</label>
				<Field name="email" type="email" />
				<ErrorMessage name="email" />
				<br />
				<Checkbox name="accept">
					Aceptar terminos y condiciones
				</Checkbox>
				<br />
				<Field name="texto" as="textarea" className="input" />
				<br/>
				{/* as="" --> Es una propiedad de Field que nos permite poder renderizar otro tipo de componente si lo requerimos */}
				<Field name="chancho" as="select">
					<option value="0" key="0">--Seleccionar---</option>
					<option value="chancocluiao" key="c">Chanchi</option>
				</Field>
				<br/>
 
				<button type='submit'>Enviar</button>
			</Form>
		</Formik>
	);
}

export default App;
