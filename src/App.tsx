import './App.css'
import { assets } from './assets/assets-links'
import { useForm } from './hooks/useForm'

function App() {
  const { data, errors, handleChange, handleSubmit } = useForm<{
    name: string
    email: string
    password: string
  }>({
    validations: {
      name: [
        {
          condition: (value) => value.length <= 0,
          message: 'Campo obrigatório'
        }
      ]
    }
  })

  return (
    <>
      <img alt="logo zbra" src={assets.images.logoImage} />
      <h1>Valide sua senha</h1>

      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label className="label" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            className={`input ${errors.name ? 'error' : ''}`}
            name="name"
            type="text"
            placeholder="Nome"
            onChange={handleChange('name')}
            value={data.name}
          />
          {errors.name && (
            <div className="form_errors">
              <ul>
                {errors.name.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="form__control">
          <label className="label" htmlFor="emmail">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={handleChange('email')}
            value={data.email}
          />

          {errors.email && (
            <div className="form_errors">
              <span>Senha inválida</span>
              <ul>
                {errors.email.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="form__control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Senha"
            onChange={handleChange('password')}
            value={data.password}
          />
        </div>

        <button type="submit">Validar</button>
      </form>
    </>
  )
}

export default App
