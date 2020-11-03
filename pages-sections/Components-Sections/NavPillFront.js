import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
   
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="cyan"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    
                    tabIcon: "arcitech.svg",
                    tabContent: (
                      <span style={{ color: "black" }}>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    ),
                  },
                  {
                
                    tabIcon: "snu.png",
                    tabContent: (
                      <span style={{ color: "black" }}>
                        <p>
                          Sister Nivedita University (SNU) at New Town, Kolkata
                          has been established through enactment of The Sister
                          Nivedita University Act, 2017 (West Bengal XLIX of
                          2017). SNU, being unique of its own kind is built on
                          the path of Sister Nivedita,
                        </p>
                        <br />
                        <p>
                          The university offers educational programs and
                          research in a wide array of subjects, under
                          disciplines like Engineering and Technology, Science,
                          Medicine, Management, Law, Humanities, Language and
                          Literature, Pharmacy, Architecture, Social Sciences,
                          Education, Performing Arts, Sports, Media, Design,
                          etc. Moreover, some unique courses will be introduced
                          with the emphasis on skill development,
                          entrepreneurship and women empowerment.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
       
  );
}
