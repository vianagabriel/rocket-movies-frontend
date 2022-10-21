import { FiMail, FiLock} from 'react-icons/fi';
import { Background, Container,Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
         placeholder="Email"
         type="text"
         icon={FiMail}
        />
        <Input 
         placeholder="Senha"
         type="password"
         icon={FiLock}
        />

        <Button  title='Entrar' />
        <Link to="/register">Criar conta</Link>
      </Form>

      <Background/>
    </Container>
  );
}