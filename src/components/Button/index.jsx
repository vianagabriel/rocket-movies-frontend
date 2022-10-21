import { Container }  from './styles';

export function Button({ title, isDark, icon: Icon, ...rest }){
  return (
    <Container
    isDark={isDark}
    type='button'
    {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}