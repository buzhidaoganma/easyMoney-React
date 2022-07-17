import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};
const NoteSection: React.FC<Props> = (props) => {
  // const [note, setNote] = useState("");
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          // value={note}
          // onChange={(e) => setNote(e.target.value)}
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};

export default NoteSection;
