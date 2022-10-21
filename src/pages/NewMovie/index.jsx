import { FiArrowLeft } from 'react-icons/fi';
import { Container, Main, InputContainer, Content, Box, Submit } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link'; 

export function NewMovie(){
  return(
    <Container>
       <Header/>

       <Main>
         <Link to='/' title='voltar'  icon={FiArrowLeft} />

         <Content>

         <h2>Novo Filme</h2>

         <InputContainer>
           <Input type='text' placeholder='Título'/>
           <Input type='number' placeholder='Sua nota ( de 0 a 5 ) '/>
         </InputContainer>
         
         <Textarea placeholder='Observações'/>

         <h3>Marcadores</h3>

         <Box>
           <TagItem value='Aventura'/>
           <TagItem placeholder='Novo marcador' isNew/>
         </Box>

         <Submit>
           <Button title='Excluir filme' isDark />
           <Button title='Salvar alterações' />
         </Submit>
         </Content>

       </Main>
    </Container>
  )
}