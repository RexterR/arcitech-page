import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EventRoundedIcon from "@material-ui/icons/EventRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/eventStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgCardTop);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Join us In those exciting events</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={`https://i.morioh.com/139b757e13.png`}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Full stack Development using MEAN stack(MongoDB,Angular,Express
                and NodeJS).And Deployment
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  In this modern world of web development the demand of building
                  UI based frontend arcitecture, API based Backend and robust
                  and modern Database is all time high. So we decided to start a
                  30 day series to cover them all by learning MEAN stck
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button  color="success" startIcon={<EventRoundedIcon />} disabled>
                  <span className={classes.date}>05-06-2020, 7:00 PM</span>
                </Button>

                <Button color="primary">Event Link</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={`https://blog.edx.org/wp-content/uploads/2015/10/Untitled-design-11-e1446056015181.jpg`}
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Full stack Development using MERN stack(MongoDB,React,Express
                and NodeJS).And Deployment
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  In this modern world of web development the demand of building
                  UI based frontend arcitecture, API based Backend and robust
                  and modern Database is all time high. So we decided to start a
                  30 day series to cover them all by learning MERN stck
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button color="success" disabled startIcon={<EventRoundedIcon />}>
                  <span className={classes.date}>05-06-2020, 7:00 PM</span>
                </Button>
                <Button color="primary">Event Link</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
