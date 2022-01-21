import { Doughnut } from "react-chartjs-2";
import { makeStyles, Typography } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";
import { green, grey, yellow } from "@material-ui/core/colors";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const useStyles = makeStyles((theme) => ({
  customDoughnut: {
    position: "relative",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    padding: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteCenter: (props) => ({
    position: "absolute",
    marginLeft: 2,
    "& > h6": {
      fontSize: props.size / 2.5,
      "& > span": {
        fontSize: props.size / 5,
        verticalAlign: "text-top",
      },
    },
  }),
}));

const CustomDonut = ({ vote_average = 0, size }) => {
  const classes = useStyles({ size });
  const data = {
    datasets: [
      {
        data: [vote_average, 10 - vote_average],
        backgroundColor: [
          vote_average >= 7
            ? green["A700"]
            : vote_average >= 4
            ? yellow["A700"]
            : grey[500],
          vote_average >= 7
            ? alpha(green["A700"], 0.3)
            : vote_average >= 4
            ? alpha(yellow["A700"], 0.3)
            : alpha(grey[500], 0.5),
        ],
        pointHoverRadius: 5,
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className={classes.customDoughnut}>
      <Doughnut
        data={data}
        width={size}
        height={size}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: 25,
          tooltips: {
            enabled: false,
          },
          hover: {
            mode: null,
          },
          legend: {
            display: false,
          },
        }}
      />
      <div className={classes.absoluteCenter}>
        <Typography variant="subtitle2">
          {Math.round(vote_average * 10)}
          <span>%</span>
        </Typography>
      </div>
    </div>
  );
};

export default CustomDonut;
