export default function Input({ name, text, type, placeholder, handleOnChange, defaultValue }) {
    return (
        <div className="form-floating mb-3">
            <input 
                type={type} 
                name={name} 
                id={name} 
                className="form-control" 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                defaultValue={defaultValue || ''}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}