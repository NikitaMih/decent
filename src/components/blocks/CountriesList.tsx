import { useQuery } from 'react-query';
import { Flex } from 'antd';
import { getCountries } from 'src/api/services';
import { CountryCard, Empty, Loader } from 'src/components/ui';
import { ICountry } from 'src/type';

const CountriesList = () => {
  const { data, isLoading, isError } = useQuery('countries', getCountries);

  return (
    <Flex gap={20} wrap align='center' justify='center' style={{ width: '100%' }}>
      {isLoading ? (
        <Loader />
      ) : !data.length || isError ? (
        <Empty />
      ) : (
        data?.map((country: ICountry, index: number) => <CountryCard key={index} country={country} />)
      )}
    </Flex>
  );
};

export default CountriesList;
