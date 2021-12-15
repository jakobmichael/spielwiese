import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, CardMedia } from "@mui/material";
import muiLogo from "../../../assets/images/MUI_Logo.png";
import Grid from "@mui/material/Grid";

const CustomCardMui = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        component="img"
                        alt="sivis logo"
                        width="3000px"
                        image={muiLogo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            MUI Core - MUI X
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            react based framework referring to Googles Material
                            Design
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <a href="https://mui.com/about/">Learn More</a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={8}>
                <Card sx={{ maxWidth: 445 }}>
                    <CardHeader title="MUI Compact" />

                    <CardContent>
                        <Typography variant="body1" color="text.secondary">
                            react components styled after material design
                            guidelines
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Roboto font
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            12-column grid system
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            mobile first, catchy animations
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            intuitive to use
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CustomCardMui;
