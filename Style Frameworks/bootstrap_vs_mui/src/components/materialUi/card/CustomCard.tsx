import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import sivislogo from "../../../assets/images/sivislogo.jpg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          Das Ziel der SIVIS ist es, aus der Kombination von intelligenter
          Produktentwicklung, qualifizierter Beratung und effektiver
          Projektumsetzung ganzheitliche Software-Lösungen im SAP Umfeld
          anzubieten.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
