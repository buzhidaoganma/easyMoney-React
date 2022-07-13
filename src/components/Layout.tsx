import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* flex默认左右结构，下面这句话就是写成上下结构 */
`;
const Main = styled.div`
  flex-grow: 1;
  /* flex-grow表示尽量的高 */
  overflow: auto;
`;

function Layout(props: any) {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
}

export default Layout;
