import React from "react";
import { GiMeshBall } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { GiLockedBox } from "react-icons/gi";
import { LuListPlus } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { Container, Grid } from "@mui/material";

const Third = () => {
  return (
    <Container>
      <div>
        <div className="heading">
          <h1 style={{ textAlign: "center" }}>Popular Categories</h1>
        </div>

        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <div className="pic1" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <LuListPlus style={{fontSize:"50px"}} />
              <h4 style={{ fontSize: "20px" }}>Trust & Worthy</h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="pic2" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <GiMeshBall  style={{fontSize:"50px"}}/>
              <h4 style={{ fontSize: "20px" }}>Fullfill Service</h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="pic3" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <GiCoffeeCup  style={{fontSize:"50px"}}/>
              <h4 style={{ fontSize: "20px" }}>Food Service</h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="pic4" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <GiLockedBox style={{fontSize:"50px"}} />
              <h4 style={{ fontSize: "20px" }}>Strength</h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="pic5" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <FaHandshakeSimple  style={{fontSize:"50px"}}/>
              <h4 style={{ fontSize: "20px" }}>Trust behind</h4>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="pic6" style={{ border: "1px solid black", padding: "40px", textAlign: "center" }}>
              <CiHeart style={{fontSize:"50px"}} />
              <h4 style={{ fontSize: "20px" }}>Love</h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Third;
