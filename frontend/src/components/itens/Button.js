export default function Button({ type, text, variant, handleOnClick }) {
    return <button type="type" className={"mb-3 btn btn-"+variant} onClick={handleOnClick}>{text}</button>
}