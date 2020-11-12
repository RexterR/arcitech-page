import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import axios from "axios/arcitechBack";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const submitForm = async (event) => {
    event.preventDefault();
    console.log(name, email, message);
    try {
      await axios.post("/message", { name, email, message });
      setEmail("")
      setMessage("")
      setName("")
    } catch (error) {
      alert(error.message);
    }

    alert("Form Submitted Successfully.Thank You");

    router.push("/#header");
  };
  const nameChangeHandler = (event) => {
    const name = event.target.value;

    setName(name);
  };
  const emailChangeHandler = (event) => {
    const email = event.target.value;

    setEmail(email);
  };
  const messageChangeHandler = (event) => {
    const message = event.target.value;

    setMessage(message);
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us </h2>
          <h4 className={classes.description}>
            Want to know about us? Want to sponsor us or anything you want to
            say. Send us message and we will get back to you in less then one
            day.
          </h4>
          <form onSubmit={submitForm}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  name="name"
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: (event) => nameChangeHandler(event),
                  }}
                  value={name}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  name="email"
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: (event) => emailChangeHandler(event),
                  }}
                  value={email}
                />
              </GridItem>
              <CustomInput
                name="message"
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: (event) => messageChangeHandler(event),
                }}
                value={message}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary" type="submit">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
