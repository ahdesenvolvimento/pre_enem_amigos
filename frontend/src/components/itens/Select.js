export default function TextArea({ name, text, handleOnChange, options, multiple }) {
    return (
        <div className="form-floating mb-3">
            <select name={name} 
                id={name} 
                className="form-control" 
                onChange={handleOnChange} 
                multiple={multiple}
            >
                {options === undefined ? (
                    <>
                        <option value="">Carregando dados.</option>
                    </>
                ) : (

                    <>
                    <option value=''>Selecione uma opção</option>
                    {options.map((option) => (
                        <option value={option.id}>{option.id}</option>
                    ))}
                    
                    </>
                )}
            </select>
            <label htmlFor={name}>{text}</label>
        </div >
    )
}