import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/input';
import {Container, Column, Row, Wrapper, Title, TitleLogin, SubTitleLogin, EsqueciText, CriarText} from './styles';

//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// import api from axios package
import { api } from '../../services/api';
import { IFormData } from "./types";

const schema = yup.object({
  email: yup.string().email("Email não é válido").required("Campo obrigatório"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
}).required();


const Login = () => {

  const navigate = useNavigate();

  const { control, register, handleSubmit, watch, formState: { errors } } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange',
    }
  );
  
  //console.log(isValid, errors);

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);

      if(data.length === 1) {
        navigate('/feed');
      } else {
        alert("Email ou senha inválidos");
      }
      
      //console.log("Retorno da API", data)
    } catch (error) {
      alert('Houve um erro:\n' + error + "\nTente novamente")
    }
  };

  const handleClickSignIn = () => {
    navigate('/feed');
  }

  return (
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="email"leftIcon={<MdEmail/>}/>
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant='secondary' type="submit"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText >Criar conta</CriarText>
            </Row>
          </Wrapper>
          
        </Column>
        </Container>
    </>
  )
}

export { Login };