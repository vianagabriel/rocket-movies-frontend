import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Background, Container,Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
         placeholder="Email"
         type="text"
         icon={FiUser}
        />
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

        <Button className='button' title='Cadastrar'/>
        
        <a href="#">
        <FiArrowLeft size='20'/>
          Volte para o login 
        </a>
      
      </Form>

      <Background/>
    </Container>
  );
}