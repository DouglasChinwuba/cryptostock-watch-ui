import Header from '../header/Header.tsx'

function LoginPage() {
  return (
    <>
      <Header />
      <h1>CryptoStock Watch</h1>
      <div className="card">
        <button>
          Sign in
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>)
}

export default LoginPage;