import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Search } from "semantic-ui-react";
import WeatherByCity from "./WeatherByCity";
import _ from 'lodash';
import { Weather } from "../../models/Weather";
import { WeatherActions } from "../../store/weatherStore";

export default function WeatherSearch() {

    const dispatch = useDispatch();
    const weatherData = useSelector((state: any) => state.weather.Weather);
    const loading = useSelector((state: any) => state.weather.loading);
    const value = useSelector((state: any) => state.weather.value);
    const timeoutRef: undefined | any = useRef()
    const handleSearchChange = useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch(WeatherActions.startSearch(data.value))

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch(WeatherActions.clearSearch());
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result: Weather) => re.test(result.city)
            const result = _.filter(weatherData, isMatch);

            dispatch(WeatherActions.finishSearch({ results: result, searchLabel: result.length === 0 ? 'NoResults' : '' }),
            )
        }, 300)
    }, [dispatch, weatherData])
    return (
        <Grid>
            <Grid.Row textAlign='right' >
                <Grid.Column >
                    <Search onSearchChange={handleSearchChange} showNoResults={false} value={value} loading={loading}
                        onResultSelect={(e, data) => {
                            dispatch(WeatherActions.updateSelection(data.result.city))
                        }} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <WeatherByCity />
            </Grid.Row>
        </Grid>
    )
}