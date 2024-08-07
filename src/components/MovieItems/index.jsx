export const MovieItems = ({ url, alt, text }) => {
    return (
        <div style={{ 
            width: '250px',
            height: '400px',
        }}>
            <img src={url} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}
