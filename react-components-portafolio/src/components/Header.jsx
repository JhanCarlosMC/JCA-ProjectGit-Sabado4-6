function Header(){
    const headerStyle = {
        border: '1px solid #000',
        borderRadius: '15px',
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return(
        <header style= {headerStyle}>
            <h1>Encabezado de la Aplicacion!</h1>
            <p>Descripcion de la Aplicacion</p>
        </header>
    )
}

export default Header