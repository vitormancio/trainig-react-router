import './styles.scss'

export function Register () {
    return (
        <div className='wrap-register'>
        <h1>Formulário de cadastro</h1>
        <input type="text" placeholder="Isira seu nome"/>
        <input type="password" placeholder="Insira sua senha" />
        <button type='button'> Register</button>
        </div>
    )
}