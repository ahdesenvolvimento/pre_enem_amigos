export default function Button({ type, text, variant }) {
    return <button type="type" className={"mb-3 btn btn-"+variant}>{text}</button>
}