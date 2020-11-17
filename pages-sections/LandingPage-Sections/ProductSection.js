import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ChatRounded from "@material-ui/icons/ChatRounded";
import CodeRounded from "@material-ui/icons/CodeRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import DeveloperModeRoundedIcon from "@material-ui/icons/DeveloperModeRounded";
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Who are we? What we do?</h2>
          <h5 className={classes.description}>
            We want to build a community of the developers Who want to build
            projects for community. Maybe you are web developer, app developer
            or ML enthuciast, if you want to find like minded people to build
            any fullstack project this is the place. We build Open source full
            stack projects. Using Various modern technology.Students from all
            undergraduate or graduate programs with an interest in growing as a
            developer are welcome. By joining us, students grow their
            knowledge in a peer-to-peer learning environment and build solutions
            for local businesses and their community.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Connect"
              description="Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors."
              icon={GroupRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Learn"
              description="Learn about a wide range of technical topics where new skills are gained through hands-on workshops, in-person training and project building activities."
              icon={DeveloperModeRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Code"
              description="Get hands-on experience and guidance from the community members"
              icon={CodeRounded}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Talks"
              description="Get updated with latest devlopment world,news and announcement"
              icon={ChatRounded}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Grow"
              description="Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back to your community by helping others learn as well."
              icon={WorkRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Forum"
            description="All are invited to join communities and mailing lists designed to help program members share learnings and best practices."
            icon={ForumRoundedIcon}
            vertical
          />
        </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
