export default function Input({ name, text, type, placeholder, handleOnChange, value }) {
    return (
        <div className="form-floating mb-3">
            <input 
                type={type} 
                name={name} 
                id={name} 
                className="form-control" 
                placeholder={placeholder} 
                // value={value} 
                onChange={handleOnChange} 
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}