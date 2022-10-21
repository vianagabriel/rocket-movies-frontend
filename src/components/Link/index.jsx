import { Container } from './styles';

export function Link({ title, icon: Icon, ...rest }){
  return(
    <Container {...rest}>
      {Icon && <Icon/>}
      {title}
    </Container>
  )
}