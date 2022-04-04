export default function CheckBox({ name, text, handleOnChange, value }) {
    return (
        <div className="form-check mb-3">
            <input class="form-check-input" 
                type="checkbox"
                name={name}
                id={name}
                onChange={handleOnChange}
                checked={value}
                value={value}
            />
            <label htmlFor={name} className="form-check-label">{text}</label>
        </div>
    )
}