import { useFormik } from 'formik'; // TODO: este hooks devuelve varias utilidades para crear y manejar formularios

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
  // TODO: Recibe un objeto como parametro donde podemos indicar las configuraciones
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        {...formik.getFieldProps('name')}
      />
      {/* {...formik.getFieldProps('name')} TODO: entregara al campo todo esto 
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}

        de forma dinamica
       */}
      { formik.touched.name && formik.errors.name ? 
        <div>{formik.errors.name}</div> : null }
      <br />
      <label>Apellido</label>
      <input
        type="text"
        {...formik.getFieldProps('lastname')}
      />
      { formik.touched.lastname && formik.errors.lastname ? 
        <div>{formik.errors.lastname}</div> : null }
      <br />
      <label>Email</label>
      <input
        type="email"
        {...formik.getFieldProps('email')}
      />
      { formik.touched.email && formik.errors.email ? 
        <div>{formik.errors.email}</div> : null }
      <br />

      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
