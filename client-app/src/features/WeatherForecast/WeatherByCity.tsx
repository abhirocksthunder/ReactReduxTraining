import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Icon, Label, Table } from 'semantic-ui-react';
import { Weather } from '../../models/Weather';
import { WeatherActions } from '../../store/weatherStore';
import agent from '../api/agent';

export default function WeatherByCity() {

    const dispatch = useDispatch();

    const fetchWeatherData = async () => {
        const response = await agent.WeatherForecast.list();
        dispatch(WeatherActions.getInitialData(response));
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const initialWeather: Weather[] = useSelector((state: any) => state.weather.Weather);
    const results : Weather[]= useSelector((state: any) => state.weather.results);
    const searchLabel: string= useSelector((state: any) => state.weather.searchLabel);

    const weatherData = results?.length > 0 ? results : initialWeather;
    console.log(weatherData);

    const [cityOrder, setOrder] = useState('ascending');
    const [tempCOrder, setTempCOrder] = useState('ascending');
    const [tempFOrder, setTempFOrder] = useState('ascending');
    const [summaryOrder, setSummaryOrder] = useState('ascending');

    const sortByCity = () => {        
        let sortedData;
        if (cityOrder === 'ascending') {
            sortedData = Array.from(weatherData).sort((a, b) => a.city.localeCompare(b.city));
            setOrder('descending');
        }
        else {
            sortedData = Array.from(weatherData).sort((a, b) => b.city.localeCompare(a.city));
            setOrder('ascending');
        }
        dispatch(WeatherActions.updateSelection(sortedData));
    }
    const sortByTemperatureC = () => {        
        let sortedData;
        if (tempCOrder === 'ascending') {
            sortedData = Array.from(weatherData).sort((a, b) => a.temperatureC - b.temperatureC);
            setTempCOrder('descending');
        }
        else {
            sortedData = Array.from(weatherData).sort((a, b) => b.temperatureC - a.temperatureC);
            setTempCOrder('ascending');
        }
        dispatch(WeatherActions.updateSelection(sortedData));
    }
    const sortByTemperatureF = () => {        
        let sortedData;
        if (tempFOrder === 'ascending') {
            sortedData = Array.from(weatherData).sort((a, b) => a.temperatureF - b.temperatureF);
            setTempFOrder('descending');
        }
        else {
            sortedData = Array.from(weatherData).sort((a, b) => b.temperatureF - a.temperatureF);
            setTempFOrder('ascending');
        }
        dispatch(WeatherActions.updateSelection(sortedData));
    }
    const sortBySummary = () => {        
        let sortedData;
        if (summaryOrder === 'ascending') {
            sortedData = Array.from(weatherData).sort((a, b) => a.summary.localeCompare(b.summary));
            setSummaryOrder('descending');
        }
        else {
            sortedData = Array.from(weatherData).sort((a, b) => b.summary.localeCompare(a.summary));
            setSummaryOrder('ascending');
        }
        dispatch(WeatherActions.updateSelection(sortedData));
    }

    if(searchLabel === 'NoResults' ) return (
        <div>
            <Container textAlign='center'>
            No results found for given search!
            </Container>
        </div>
    )

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell><Label size='big' basic>City</Label><Button icon onClick={sortByCity} floated='right'><Icon name='sort'></Icon></Button></Table.HeaderCell>
                    <Table.HeaderCell><Label size='big' basic>Temperature C</Label><Button icon onClick={sortByTemperatureC} floated='right'><Icon name='sort'></Icon></Button></Table.HeaderCell>
                    <Table.HeaderCell><Label size='big' basic>Temperature F</Label><Button icon onClick={sortByTemperatureF} floated='right'><Icon name='sort'></Icon></Button></Table.HeaderCell>
                    <Table.HeaderCell><Label size='big' basic>Summary</Label><Button icon onClick={sortBySummary} floated='right'><Icon name='sort'></Icon></Button></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {weatherData.length> 0 && weatherData.map(data => (
                    <Table.Row key={data.id}>
                        <Table.Cell>{data.city}</Table.Cell>
                        <Table.Cell>{data.temperatureC}</Table.Cell>
                        <Table.Cell>{data.temperatureF}</Table.Cell>
                        <Table.Cell positive={data.summary === 'Hot' ? true : false} >{data.summary}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}