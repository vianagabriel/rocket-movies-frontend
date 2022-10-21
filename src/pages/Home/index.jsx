import { ButtonAdd, Container, Content, Section } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import { MovieCard } from '../../components/MovieCard';


export function Home() {
  return (
    <Container>
      <Header />
        <Content>
          <h2>Meus filmes</h2>
          <ButtonAdd to='/new'>
           <Button  title='Adicionar filme' icon={FiPlus} />
          </ButtonAdd>
        </Content>
       <Section>
        <MovieCard data={{
          title: 'Interestellar',
          rating: '5',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta...',
          tags: [
            {id: '1', name: 'Comédia'},
            {id: '2', name: 'Infantil'},
            {id: '3', name: 'Aventura'},
          ]
        }}/>

       <MovieCard data={{
          title: '101 Dalmatas',
          rating: '4',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta...',
          tags: [
            {id: '1', name: 'Comédia'},
            {id: '2', name: 'Infantil'},
            
          ]
        }}/>
            <MovieCard data={{
          title: 'Velozes e furiosos',
          rating: '3',
          description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta...',
          tags: [
            {id: '1', name: 'Ação'},
            {id: '2', name: 'Aventura'},
            {id: '3', name: 'Suspense'},
          ]
        }}/>
       </Section>
    </Container>
  );
}
       

        


      
   






