import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import sivislogo from "../../../assets/images/sivislogo.png";

const CustomCardMui = () => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        alt="sivis logo"
        width="170px"
        image={sivislogo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Smart Simple Safe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SAP-Sicherheit in den besten Händen
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCardMui;
