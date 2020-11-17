import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
                    Arcitech is a Community to build apps together and learn
                    together.
                  </p>
                  <br />
                  <p>
                    If you are interested in any technology you are welcome .
                    May be you want to start learning, novice or expert all are
                    Or maybe you are a management enthusiast or a designer . We
                    are ready to make a production ready app
                  </p>
                  <br />
                  <p>
                    Open source development is now the inevitable part of our
                    life. And we would learn to contribute.
                  </p>
                </span>
              ),
            },
            {
              tabIcon: "snu.png",
              tabContent: (
                <span style={{ color: "black" }}>
                  <p>
                    Sister Nivedita University (SNU) at New Town, Kolkata has
                    been established through enactment of The Sister Nivedita
                    University Act, 2017 (West Bengal XLIX of 2017). SNU, being
                    unique of its own kind is built on the path of Sister
                    Nivedita,
                  </p>
                  <br />
                  <p>
                    The university offers educational programs and research in a
                    wide array of subjects, under disciplines like Engineering
                    and Technology, Science, Medicine, Management, Law,
                    Humanities, Language and Literature, Pharmacy, Architecture,
                    Social Sciences, Education, Performing Arts, Sports, Media,
                    Design, etc. Moreover, some unique courses will be
                    introduced with the emphasis on skill development,
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
