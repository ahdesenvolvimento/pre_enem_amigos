export default function TextArea({ name, text, handleOnChange, optios }) {
    return (
        <div className="form-floating mb-3">
            <select name={name} 
                id={name} 
                className="form-control" 
                onChange={handleOnChange} 
            >
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </select>
            <label htmlFor={name}>{text}</label>
        </div >
    )
}