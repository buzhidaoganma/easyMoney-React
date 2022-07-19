import Button from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
import { useParams } from "react-router-dom";
import useTags from "useTags";

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id!));
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export default Tag;
