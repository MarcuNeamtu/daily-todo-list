import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        {props.children}
      </Card>
    </Background>
  );
  
}

export default Layout;


const Background = styled.div`
  background: #F5F5F5;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 1000px;
  height: 500px;
  top: 400px;
  left: 300px;
  background: #FFFFFF;
  position: absolute;
  top: 40px;
  left: 300px;
`;




