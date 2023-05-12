import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useAcrion';
import { Box, Grid } from "@mui/material";
import Pallete from './UI/Pallets';


const MapsPalete: React.FC = () => {
    const { data, loading, error, codes } = useTypedSelector(state => state.maps);
    const { load } = useTypedSelector(state => state.tools);
    const { getWeatherByCodes } = useAction();
    const { getCityCode } = useAction();
    const initialNames = 'Kyiv';
    useEffect(() => {
        getCityCode(initialNames)
    }, [])

    useEffect(() => {
        getWeatherByCodes(codes)
    }, [codes, load]);


    if (loading) {
        return <> load</>
    } else if (error) {
        return <> error</>
    }

    return (
        <>
            <Box sx={{ display: "grid", alignItems: "center", width: "100%", flexGrow: 1 }}>
                <Grid sx={{ display: "flex" }}>
                    <Pallete data = {data} />
                </Grid>
            </Box>
        </>
    )
}

export default MapsPalete;