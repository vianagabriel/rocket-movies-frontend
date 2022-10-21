import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from '../../components/Link';


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/" title='voltar' icon={FiArrowLeft}/>
       
      </header>
      <Form>

        <Avatar>
          <img
            src="https://github.com/vianagabriel.png"
            alt="foto do usuário"
          />

          <label htmlFor='avatar'>
            <FiCamera />

            <input
              id='avatar'
              type='file'
            />
          </label>
        </Avatar>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
        />
        <Input
          placeholder='Email'
          type='text'
          icon={FiMail}
        />
        <Input
          placeholder='Senha atual'
          type='password'
          icon={FiLock}
        />
        <Input
          placeholder='Nova Senha'
          type='password'
          icon={FiLock}
        />

        <Button className='btnForm' title='Salvar' />
      </Form>
    </Container>
  )
}