import React, { useState, useEffect } from "react";
import Image from "next/image";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CircularProgress from "@material-ui/core/CircularProgress";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

//axios call
import axios from "axios/arcitechBack";
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgSplRounded,
    classes.imgFluid
  );
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const res = axios
      .get("/getMembers")
      .then((res) => {
        setTeam(res.data.members);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const TeamJSX =
    Array.isArray(team) && team
      ? team.map((member) => (
          <GridItem xs={12} sm={12} md={4} key={member._id}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={member.profileImage}
                  alt="Profile Image"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                {member.name}
                {console.log(member)}
                <br />
                <small className={classes.smallTitle}>
                  {member.role || "Developer"}
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>{member.about}</p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))
      : null;
  const TeamReturn = loading ? <CircularProgress /> : TeamJSX;
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>{TeamReturn}</GridContainer>
      </div>
    </div>
  );
}
