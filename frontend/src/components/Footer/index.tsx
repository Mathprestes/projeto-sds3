const Footer = () => {   //mesma coisa se usar a funcao no lugar
    return (
        <footer className="footer mt-auto py-4 bg-dark">
            <div className="container">
                <p className="text1 text-light"> App desenvolvido por <a href="https://github.com/Mathprestes" target="_blank" rel="noreferrer"> Matheus Prestes </a> </p>
                <p className="text2 text-success"> <small> <strong> Semana Spring React </strong>  </small> </p>
        
                <p className="text3 text-light mb-1"> Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer"> @devsuperior.ig </a> </p>
            </div>
        </footer>
    );
}

export default Footer;