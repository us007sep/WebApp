import { AppBar, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, colors, Fab, Grid, InputBase, makeStyles, TextField, Theme, Toolbar, Typography } from "@material-ui/core";
import { props } from "cypress/types/bluebird";

const abc = makeStyles(({
    searchBox:{
        backgroundColor:'white'
    }
}));

interface Istyle{
    backgroundColor:string;
}

const xyz = makeStyles<Theme,Istyle>({
    searchBox:{
        backgroundColor: props => props.backgroundColor
    }
});

export default function MaterialUI(){
    const style = abc();
    const styleWithProps = xyz({
        backgroundColor:'white'
    });
    // MaterialUI is a css type library for react for styling
    return(
        <>
        <TextField variant="outlined"/>
        <Button>Test</Button>
        <Button variant="contained">Test</Button>
        <br></br><br></br>
        <Fab color="primary" aria-label="Add" variant="extended">Testing Fab</Fab>
        <Typography variant="h4">Hello</Typography>
        <CircularProgress></CircularProgress>

        <Grid container spacing={5}> 
            {/* 12 is the max size in a grid */}
            <Grid item xs={11}>One</Grid> 
            <Grid item>Two</Grid>
            <Grid item>Three</Grid>
        </Grid>

        <Card>
            <CardActionArea>
                <CardMedia component="img" image="https://reqres.in/img/faces/2-image.jpg"/>
                <CardContent>
                    <Typography variant="h4">
                        Sam Smith
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>

        <AppBar>
            <Toolbar>
                <InputBase className={style.searchBox} />
                <InputBase className={styleWithProps.searchBox} />
                <InputBase className={xyz({
                    backgroundColor:'wheat'
                }).searchBox} />
                <Button>Search</Button>
            </Toolbar>
        </AppBar>
        </>
    )
}