import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { CountryDetail } from 'src/components/blocks';

const CountryPage = () => {
  const { country } = useParams<{ country: string }>();
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            title: country,
          },
        ]}
      />
      <CountryDetail />
    </div>
  );
};

export default CountryPage;
