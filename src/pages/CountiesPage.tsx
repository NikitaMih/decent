import { CountriesList } from 'src/components/blocks';
import { Typography } from 'antd';

const { Title } = Typography;

const CountiesPage = () => {
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <Title>Countries</Title>
      <CountriesList />
    </div>
  );
};

export default CountiesPage;
