import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardTilesComponent = (props) => {
  return (
    <Card variant="outlined">
      <>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.count} Task
          </Typography>
        </CardContent>
      </>
    </Card>
  );
};

export default CardTilesComponent;
