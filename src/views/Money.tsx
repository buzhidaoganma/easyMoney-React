import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
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

const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { records, addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    //obj是部分selected的类型
    setSelected({ ...selected, ...obj });
  };
  const submit = () => {
    addRecord(selected);
    alert("保存成功");
    setSelected(defaultFormData);
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
      <hr />
      {JSON.stringify(selected)}
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
        onOK={submit}
      />
    </MyLayout>
  );
}

export default Money;
