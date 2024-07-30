import { Flex } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const Empty = () => (
  <Flex align='center' style={{ marginTop: '150px' }}>
    <Title>Данные не найдены</Title>
  </Flex>
);

export default Empty;
