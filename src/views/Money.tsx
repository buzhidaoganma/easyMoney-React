import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import NumberPadSection from "./Money/NumberPadSection";
import TagsSection from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex; //默认是左右结构
  flex-direction: column; //可以使得默认的变成上下结构
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;
