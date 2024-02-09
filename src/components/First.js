import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Grid, TextField } from "@mui/material";
import { FcSearch } from "react-icons/fc";
import "./First.css";
import { TOPIMG } from "../assests/img";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Container>
      <div className="firstpage">
        <h1>
          Start Building Your Own <br /> Career Now
        </h1>
        <Link to="/newPath"><button>click</button></Link>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <div className="barcontent">
              <FormControl sx={{ m: 1, width: "100%", display: "flex" }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>All regions</em>;
                    }
                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>All Regions</em>
                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div>
                <div style={{ display: "flex" }}>
                  <TextField placeholder="search" name="search" />

                  <div>
                    <FcSearch
                      style={{ fontSize: "54px", borderRadius: "5px" }}
                      className="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p>
              No-Offer Don't Worry{" "}
              <span style={{ color: "blue" }}>4000+Job Offer Right Now</span>{" "}
              Get an Offer Soon
            </p>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={TOPIMG} alt="img" height="200px" />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
