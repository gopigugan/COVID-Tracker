import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";
import "./Infobox.css";

function Infobox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && "infobox--selected"} ${
        isRed && "infobox--red"
      }`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>
        {/* Number of Cases */}
        <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>
          {cases}
          {/* <NumberFormat
            thousandSeparator={true}
            value={cases}
            displayType={"text"}
          /> */}
        </h2>
        {/* Total Cases */}
        <Typography className="infobox__total" color="textSecondary">
          {total} Total
          {/* <NumberFormat
            thousandSeparator={true}
            value={total}
            displayType={"text"}
          /> */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
