import { Card } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ICountry } from 'src/type';

const { Title } = Typography;

const CountryCard = ({ country }: { country: ICountry }) => {
  return (
    <Link to={`/${country.name.common}`}>
      <Card
        hoverable
        style={{ width: 240, height: 400 }}
        cover={<img alt={country.flag} height={200} src={country.flags.svg} />}
      >
        <Title level={3}>{country.name.common}</Title>
        <Title level={5}>Capital: {country.capital}</Title>
      </Card>
    </Link>
  );
};

export default CountryCard;
