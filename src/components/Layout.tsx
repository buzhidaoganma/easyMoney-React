import { ReactNode, useEffect, useRef } from "react";
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

type Props = {
  children: ReactNode;
  className?: string;
  scrollTop?: number;
};
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {
        return;
      }
      mainRef.current.scrollTop = props.scrollTop!; //1
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0,
}; //组件名.defaultProps可以设置组件中的默认值，配合//1  ！告诉TS我又默认值
export default Layout;
