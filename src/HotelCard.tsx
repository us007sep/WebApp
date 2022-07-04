import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { props } from "cypress/types/bluebird";
import { IHotel } from "./HotelReducer";

const useStyle=makeStyles({
    cardmedia:{
        height:372,
        width:440
    }
})

export default function HotelCard(prop:IHotel){
    const style=useStyle();
    return(
    <Card key={prop.id}>
        <CardActionArea>
            <CardMedia component="img" image={prop.featured_image} className={style.cardmedia}/>
            <CardContent>
                <Typography variant="h5">{prop.name} </Typography>
                <Typography variant="body2">{prop.cuisines}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}