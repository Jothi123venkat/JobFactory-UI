import React from "react";
import { SIDEIMG } from "../assests/img2";
import { Container, Grid } from "@mui/material";
import { GiShakingHands } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { GiMeshBall } from "react-icons/gi";

const Second = () => {
  return (
   <Container>
     <div className="wholepage">
      <div>
        <h1 style={{ textAlign: "center" }}>
          Welcome to <span style={{ color: "blue" }}>Jobs</span>factory
        </h1>
      </div>
      <Container>
        <Grid
          container
       
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{textAlign:"center"}}
        >
          <Grid item xs={12} md={6}>
            <img
              src={SIDEIMG}
              alt="img"
              style={{ width: "100%", maxWidth: "350px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="wholecard1">
                  <div className="card1">
                    <GiShakingHands style={{ fontSize: "70px" }} />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="wholecard1">
                  <div className="card2">
                    <FaPeopleGroup style={{ fontSize: "70px" }} />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="wholecard2">
                  <div className="card1">
                    <TiMessages style={{ fontSize: "70px" }} />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className="wholecard2">
                  <div className="card2">
                    <GiMeshBall style={{ fontSize: "70px" }} />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
   </Container>
  );
};

export default Second;
