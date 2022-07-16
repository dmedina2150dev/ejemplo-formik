import { useField } from 'formik';
/**
 * Los componentes customizados de Formik se componen de esta estructura
 */
const TextInput = ({ label, ...props }) => {

    const [ field, meta ] = useField(props);

    return (
        <div className='control'>
            <label className='label'>{label}</label>
            <input type="text" {...field} { ...props } className='input' />
            { meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null }
        </div>
    )

}

export default TextInput;