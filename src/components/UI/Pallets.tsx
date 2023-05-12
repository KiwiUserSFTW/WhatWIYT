import React, { useState } from "react"
import { Typography} from "@mui/material"
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAcrion";
import DialogInfo from "./DialogInfo";
import {Card, CardActions, CardContent, Button} from "@mui/material"

interface PalleteProps {
    data: any[];
}

const Pallete: React.FC<PalleteProps> = ({ data }): any => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const { edit, dialogId } = useTypedSelector(state => state.tools);
    const { deleteCity, setDialogId } = useAction();

    const handleClick = (id: string, e: any) => {
        if (edit) {
            deleteCity(Number(id))
        }
        if (!edit) {
            setDialogOpen(true);
            setDialogId(Number(id));
        }
    }
    return (
        <>
            {data.map(e =>
                <div key={e.id} style={{margin:'10px', borderRadius: "10px", minWidth:'15%'}}>
                <Card>
                    <CardContent>
                        <Typography variant = "h6" color="text.secondary" gutterBottom>
                           {e.name}
                        </Typography>
                        
                        <Typography variant="body1">
                            {Math.floor(e.main.temp) + '°C'} <br />
                            {e.weather[0].description}
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => handleClick(e.id, e)} sx = {{color:edit? `#AC54FF`: 'black'}} size="small">{edit? 'Delete' : 'More info'}</Button>
                       
                    </CardActions>
                </Card>
                </div>
            )
            }
            {edit == false ? <DialogInfo data={data} setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} /> : <></>}
        </>

    )
}

export default Pallete;