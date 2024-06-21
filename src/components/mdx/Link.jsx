export default function Link(props) {
    return (
        <a {...props} className={`mdLink ${props.className}`}/>
    )
}