import { assets } from '@/assets/assets-links'
import { useMemo } from 'react'

type InputProps = {
  id: string
  value: string
  onChange: CallableFunction
  errors: string[]
  isValid: boolean
  isSubmiting: boolean
}

export function Input(props: InputProps) {
  const renderErrors = useMemo(
    () =>
      props.errors && (
        <div className="form--error">
          <span className="text-error">Senha inválida</span>
          <ul>
            {props.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ),
    [props.errors]
  )

  return (
    <>
      <div className="form-control">
        <div className="form-field">
          <label className="label" htmlFor={props.id}>
            Senha
          </label>
          <input
            id={props.id}
            name={props.id}
            type="text"
            placeholder="Senha"
            onChange={props.onChange()}
            value={props.value || ''}
            className={`input 
                  ${props.errors ? 'error' : ''}
                  ${props.isValid ? 'success' : ''}                  
                `}
            {...(props.isSubmiting && { disabled: true })}
          />
          {props.errors && (
            <img className="input--icon" src={assets.svgs.errorSvg} alt="" />
          )}
          {props.isValid && (
            <img className="input--icon" src={assets.svgs.successSvg} alt="" />
          )}
        </div>
        {renderErrors}
      </div>
    </>
  )
}
