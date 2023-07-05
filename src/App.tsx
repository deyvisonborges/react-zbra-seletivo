import { useMemo } from 'react'
import { assets } from './assets/assets-links'
import { useForm } from './hooks/useForm'
import { FormField } from './interfaces/FormField'
import { nameValidations } from './validations/nameValidations'
import { emailValidations } from './validations/emailValidations'
import { passwordValidations } from './validations/passwordValidations'
import { onlyText } from './validations/utils/sanitizers/onlyText'
import { onlyNumbers } from './validations/utils/sanitizers/onlyNumber'

function App() {
  const { data, errors, validated, handleChange, handleSubmit, isSubmitting } =
    useForm<FormField>({
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      validations: {
        name: nameValidations,
        email: emailValidations,
        password: passwordValidations
      }
    })

  const isAllFieldsEmpty = Object.values(data).every(
    (fieldValue) => fieldValue === ''
  )

  const renderNameErrors = useMemo(
    () =>
      errors.name && (
        <div className="form--error">
          <ul>
            {errors.name.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ),
    [errors.name]
  )

  const renderEmailErrors = useMemo(
    () =>
      errors.email && (
        <div className="form--error">
          <ul>
            {errors.email.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ),
    [errors.email]
  )

  const renderPasswordErrors = useMemo(
    () =>
      errors.password && (
        <div className="form--error">
          <span className="text-error">Senha inválida</span>
          <ul>
            {errors.password.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ),
    [errors.password]
  )

  // derived states
  const inputNameIsValid = !errors.name && validated.name?.valid
  const inputEmailIsValid = !errors.email && validated.email?.valid
  const inputPasswordIsValid = !errors.password && validated.password?.valid

  return (
    <div className="container">
      <div className="content">
        <img alt="logo zbra" src={assets.images.logoImage} />
        <h1 className="font-heading text-color-gradient">Valide sua senha</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="form-field">
              <label className="label" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                onChange={handleChange('name', onlyText)}
                value={data.name || ''}
                className={`input 
                  ${errors.name ? 'error' : ''}
                  ${inputNameIsValid ? 'success' : ''}                  
                `}
                {...(isSubmitting && { disabled: true })}
              />
              {errors.name && (
                <img
                  className="input--icon"
                  src={assets.svgs.errorSvg}
                  alt=""
                />
              )}

              {inputNameIsValid && (
                <img
                  className="input--icon"
                  src={assets.svgs.successSvg}
                  alt=""
                />
              )}
            </div>
            {renderNameErrors}
          </div>

          <div className="form-control">
            <div className="form-field">
              <label className="label" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
                onChange={handleChange('email')}
                className={`input 
                  ${errors.email ? 'error' : ''}
                  ${inputEmailIsValid ? 'success' : ''}                  
                `}
                {...(isSubmitting && { disabled: true })}
              />
              {errors.email && (
                <img
                  className="input--icon"
                  src={assets.svgs.errorSvg}
                  alt=""
                />
              )}
              {inputEmailIsValid && (
                <img
                  className="input--icon"
                  src={assets.svgs.successSvg}
                  alt=""
                />
              )}
            </div>
            {renderEmailErrors}
          </div>

          <div className="form-control">
            <div className="form-field">
              <label className="label" htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="text"
                placeholder="Senha"
                onChange={handleChange('password', onlyNumbers)}
                value={data.password || ''}
                className={`input 
                  ${errors.password ? 'error' : ''}
                  ${inputPasswordIsValid ? 'success' : ''}                  
                `}
                {...(isSubmitting && { disabled: true })}
              />
              {errors.password && (
                <img
                  className="input--icon"
                  src={assets.svgs.errorSvg}
                  alt=""
                />
              )}
              {inputPasswordIsValid && (
                <img
                  className="input--icon"
                  src={assets.svgs.successSvg}
                  alt=""
                />
              )}
            </div>
            {renderPasswordErrors}
          </div>

          <div className="form-field">
            <button
              className="button"
              type="submit"
              {...(isAllFieldsEmpty && { disabled: true })}
            >
              Validar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
