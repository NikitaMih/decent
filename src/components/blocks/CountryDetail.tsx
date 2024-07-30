import { Card, Empty, Flex, Image } from 'antd';
import { Typography } from 'antd';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCountryByName } from 'src/api/services';
import { Loader } from '../ui';

const { Title } = Typography;

const CountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const { data, isLoading, isError } = useQuery('country', () => getCountryByName(country));

  return (
    <Flex gap={20} wrap align='center' justify='center' style={{ width: '100%' }}>
      {isLoading ? (
        <Loader />
      ) : !data || isError ? (
        <Empty />
      ) : (
        <Card style={{ padding: '0 20px' }}>
          <Flex vertical gap={20}>
            <Title>{data?.name?.common}</Title>
            <Image height={250} alt={data?.name?.common} src={data?.flags.svg} />
            <Title level={5}>Столица: {data?.capital}</Title>
            <Title level={5}>Площадь: {data?.area}</Title>
            <Title level={5}>Население: {data?.population}</Title>
            <Title level={5}>Контенент: {data?.continents}</Title>
          </Flex>
        </Card>
      )}
    </Flex>
  );
};

export default CountryDetail;
