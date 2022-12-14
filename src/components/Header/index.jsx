import { Input } from '../Input';
import { AreaLogout, Container, InputContainer } from './styles';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <Container>
       <h2>RocketMovies</h2>
       <InputContainer>
         <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
       </InputContainer>
       <AreaLogout>
         <div>
           <p>Gabriel Viana</p>
           <span>sair</span>
         </div>
         <Link to='/profile'>
            <img  src="https://github.com//vianagabriel.png" alt="foto do usuário" />
         </Link>
       </AreaLogout>
    </Container>
  )
}



