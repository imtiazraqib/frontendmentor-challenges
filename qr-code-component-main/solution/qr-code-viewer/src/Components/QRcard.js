function QRcard(props) {
    return (
        <div className='card'>
            <img src={props.source} alt='frontend mentor qr code'></img>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default QRcard;