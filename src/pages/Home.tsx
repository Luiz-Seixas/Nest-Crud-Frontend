import "../styles/Home.scss";

export default function Home() {
  function create() {}

  return (
    <div id="page_home">
      <header>
        <h1>Banco de Usuários</h1>
        <a href="/login"> Login </a>
      </header>
      <div className="content"></div>
    </div>
  );
}
