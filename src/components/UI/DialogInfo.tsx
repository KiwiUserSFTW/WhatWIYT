import React from 'react';
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { Typography, Card, CardContent, DialogContent, DialogActions, Dialog, Button} from '@mui/material';


interface DialogInfoProps {
    data: any[];
    setDialogOpen: Function;
    dialogOpen: boolean;
}
const DialogInfo: React.FC<DialogInfoProps> = ({ data, setDialogOpen, dialogOpen }): any => {
    const { dialogId } = useTypedSelector(state => state.tools);
    let currentData: any = {};

    if (!dialogId || !data) return <> </>
    currentData = data.find(obj => obj.id === dialogId);

    if (!currentData) return <> </>
    const DateConvert = (prop: any): string => {
        const date = new Date(prop);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes}`
    }

    const handleClickClose = () => {
        setDialogOpen(false)
    }
    const celsium = '°C'
    const DataDialogInfo = {
        sys: {
            sunrise: DateConvert(currentData.sys.sunrise),
            sunset: DateConvert(currentData.sys.sunset)
        },
        main: {
            feelsLike: currentData.main.feels_like,
            tempNow: currentData.main.temp,
            tempMax: currentData.main.temp_max,
            tempMin: currentData.main.temp_min
        },
        sky: {
            clouds: currentData.weather.description,
            icon: `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`
        }
    }

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth='lg'
                open={dialogOpen}
                onClose={handleClickClose}
                sx={{}}
            >
                <DialogContent >
                    <Card>
                        <CardContent sx={{ backgroundColor: '#C4F9F6', display: 'grid', gridTemplateColumns: '1fr 2.5fr 1fr', justifyItems: 'center' }}>
                            <Typography sx={{ typography: 'body1' }}>
                                sun: <br />
                                sunrise   {DataDialogInfo.sys.sunrise} <br />
                                sunset    {DataDialogInfo.sys.sunset}    <br />
                            </Typography>
                            <Typography sx={{ typography: 'body1' }}>

                            </Typography>
                            <div style={{ flexGrow: '1', backgroundColor: '#ACAEFF', borderRadius: '5%' }}>

                                <img src={DataDialogInfo.sky.icon} />

                            </div>


                        </CardContent>
                        <CardContent sx={{ backgroundColor: '#F7FFB3', display: 'grid', gridTemplateColumns: '1fr 2.5fr 1fr', justifyItems: 'center' }}>
                            <Typography sx={{ typography: 'body1' }}>
                                temperature: <br />
                                now: {DataDialogInfo.main.tempNow}{celsium}<br />
                                feels like: {DataDialogInfo.main.feelsLike}{celsium}<br />
                                max: {DataDialogInfo.main.tempMax}{celsium}<br />
                                min: {DataDialogInfo.main.tempMin}{celsium}<br />
                            </Typography>



                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} autoFocus>
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
// Todo: router dialog
export default DialogInfo;