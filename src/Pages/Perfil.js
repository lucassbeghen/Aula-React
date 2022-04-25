function Perfil() {
  return (
    <main>
      {/* {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      } */}
          <>
            <h1>Meu perfil</h1>
            <h2>Nome da pessoa</h2>

            <div className="card w-50 mx-auto align-items-center">
              <img src={'perfil'} alt={`Foto de perfil de Pessoa`} className="card-img-top" style={{ maxWidth: "200px" }} />
              <div className="align-items-start">
                <p><strong>Descrição</strong></p>
                <small>Bio </small>
                <p>Usuário: <a href='caminho_github' target="_blank" rel="noreferrer noopener">login</a></p>

                <p className="cart-text"><i className="me-2 bi bi-twitter"></i><a href={`https://twitter.com/twitter`} target="_blank" rel="noopener noreferrer">@twitter</a></p>
                <p className="cart-text"><i className="me-2 bi bi-geo-fill"></i>Cidade</p>
                <p className="cart-text"><i className="me-2 bi bi-globe2"></i><a href='blog' target="_blank" rel="noopener noreferrer">blog</a></p>
                <p className="cart-text"><i className="me-2 bi bi-building"></i>empresa</p>
                <p className="card-text"><strong>Tem autenticação de dois passos?</strong> dois passos</p>
                <p className="card-text"><strong>É administrador do GitHub?</strong> admin</p>

                <p className="card-text"><strong>Repos públicos:</strong> public repos</p>
                <p className="card-text"><strong>Repos privados:</strong> private repos</p>
                <p className="card-text"><strong>Disponível para contratação?</strong> contratação</p>
              </div>
            </div>
          </>
    </main>
  );
}

export default Perfil;