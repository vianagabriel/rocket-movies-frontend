import { FiArrowLeft } from "react-icons/fi";
import { Container, Main, InputContainer, Content, Box } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from "../../components/Textarea";

export function NewMovie(){
  return(
    <Container>
       <Header/>

       <Main>
         <a href="/">
          <FiArrowLeft/>
          voltar
         </a>

         <Content>

         <h2>Novo Filme</h2>

         <InputContainer>
           <Input type='text' placeholder='Título'/>
           <Input type='text' placeholder='Sua nota ( de 0 a 5 ) '/>
         </InputContainer>
         
         <Textarea placeholder='Observações'/>

         <h3>Marcadores</h3>

         <Box>

         </Box>
         </Content>

       </Main>
    </Container>
  )
}