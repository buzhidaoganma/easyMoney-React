import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NoteSection from "./Money/NoteSection";
import NumberPadSection from "./Money/NumberPadSection";
import TagsSection from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex; //默认是左右结构
  flex-direction: column; //可以使得默认的变成上下结构
`;

type Category = "-" | "+";
function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });

  const onChange = (obj: Partial<typeof selected>) => {
    //obj是部分selected的类型
    setSelected({ ...selected, ...obj });
  };
  return (
    <MyLayout>
      {selected.tagIds.join(",")}
      <hr />
      {selected.note}
      <hr />
      {selected.category}
      <hr />
      {selected.amount}
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOK={() => {}}
      />
    </MyLayout>
  );
}

export default Money;
