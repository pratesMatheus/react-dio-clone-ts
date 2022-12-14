//import { Link } from 'react-router-dom';
//import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
//import bannerImage from '../../assets/images/banner.png';
import {Container, Column, Title, TitleHighlight} from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
  return (
    <>
      <Header autenticado={true}/> {/* false */}
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># HANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={27} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={89} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={57} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={12} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={90} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
          <UserInfo percentual={10} nome='Matheus Prates' image={'https://avatars.githubusercontent.com/pratesMatheus'}/>
        </Column>
      </Container>
    </>
  )
}

export {Feed};