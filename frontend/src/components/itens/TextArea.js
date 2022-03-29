export default function TextArea({ name, text, type, placeholder, handleOnChange, value }) {
    return (
        <div className="form-floating mb-3">
            <textarea name={name} 
                id={name} 
                className="form-control" 
                value={value} 
                onChange={handleOnChange} 
                placeholder={placeholder}
                style={{height: '100px'}}></textarea>
            <label htmlFor={name}>{text}</label>
        </div >
    )
}