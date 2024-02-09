import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiService";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import "../../App";
import Loading from "../Context/Loading";

const DisplayProduct = () => {
  const [data, setData] = React.useState({});
  const [currentimage, setCurrentimage] = useState();
  const [variant, setVariant] = useState();
  const [size, setSize] = useState({});
  const [stockshow, setStockshow] = useState({});
  const [amountshow, setAmountshow] = useState({});
  const [newImg, setNewImg] = useState([]);

  // useParms to Get Id
  const { productId } = useParams();

  const getApi = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);
        console.log(result.data, "getApi");  
        // numberOfVariants in Api is 0
        if (result.data.numberOfVariants === 0) {
          setNewImg(result.data.variantImages);
          console.log(newImg);

       
        
          result.data.variantImages.forEach((element) => {
            console.log(result.data.variantImages);
            if (element.defaultImage === 1) {
              setCurrentimage(element.imageURL);
            }
          });
        } else {
          getVariantApi();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const getVariantApi = () => {
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        console.log(result.data, "getVariantApi");
        setVariant(result.data.responseModelList);
        result.data.responseModelList.forEach((value) => {
          if (value.defaultVariant === 1) {
            setNewImg(value.variantImages);
            value.variantImages.forEach((val) => {
              console.log(value.variantImages);
              if (val.defaultImage === 1) {
                setCurrentimage(val.imageURL);
                console.log(val.imageURL);
                setSize({ variantsoptions: value.variantsoptions });
                setStockshow({ stock: value.stock });
                setAmountshow({ amount: value.amount });
              }
            });
          }
          value.variantImages.forEach((val) => {
            console.log(value.variantImages);
            if (val.defaultImage === 1) {
              value.imageURL = val.imageURL;
              console.log( val.imageURL ,"url");
            }
          }
          );
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getApi();
    }, 2000);
  }, []);

  useEffect(() => {
      getVariantApi();
  }, []);


  const handleimageChange = (data) => {
    setNewImg(data.variantImages);
    data.variantImages.forEach((element) => {
      if (element.defaultImage === 1) {
        setCurrentimage(element.imageURL);
        setSize({ variantsoptions: element.variantsoptions });
        setStockshow({ stock: element.stock });
        setAmountshow({ amount: element.amount });
      }
    });
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={6} md={6} sm={12}>
              <div>
                {currentimage ? (
                  <img
                    src={currentimage}
                    alt="img"
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                ) : (
                  <Loading/>
                )}
              </div>

              <div style={{ display: "flex", marginTop: "30px", gap: "40px" }}>
                {/* bread image */}
                {newImg &&
                  newImg.map((val) => (
                    <Card key={val.id}>
                      <img
                        src={val?.imageURL}
                        alt="img"
                        className="img2"
                        onClick={() => setCurrentimage(val.imageURL)}
                      />
                    </Card>
                  ))}
                <div></div>
              </div>

              <h2> {data.productName}</h2>
              <p>
                Pizza, a cheesy delight on dough so thin, Baked to perfection, a
                culinary win.
              </p>
              <h5 style={{ color: "red" }}>
                {`${data.stockAvl}`} Stocks left hurry up........
              </h5>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  sx={{
                    backgroundColor: "orange",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "blue",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
                <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "green",
                    },
                  }}
                >
                  BUY NOW
                </Button>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={12}>
              <p>
                In the heart of the kitchen, dough is tossed with pure delight,
                rising to meet its cheesy destiny. The oven's warmth cradles
                this culinary canvas as tomato sauce dances in vibrant spirals,
                creating a saucy masterpiece. A symphony of flavors unfolds,
                melding together in a perfect harmony, delivering the joyous
                creation that is pizza—a delectable delight for all to savor.
              </p>
              <h5 style={{ fontSize: "30px" }}>
                {" "}
                {/* {`₹ ${data.purchasePrice + 100}`} */}
                <p>{amountshow && amountshow.amount}</p>
                <p style={{ color: "green" }}>{size && size.variantsoptions}</p>
                <p style={{ color: "blue" }}>{`Stock:${
                  stockshow && stockshow.stock
                }`}</p>
              </h5>

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginTop: "70px",
                  flexWrap: "wrap",
                }}
              >
                {variant &&
                  variant.map((val) => {
                    return (
                      <div key={val.id} onClick={() => handleimageChange(val)}>
                        <img
                          src={val.imageURL}
                          alt="img"
                          style={{ height: "100px", width: "100px" }}
                        />
                        <p>{val.variantsoptions}</p>
                      </div>
                    );
                  })}
              </div>

              {/* {
                variant && variant.find((a,i)=>{
                  return(
                      <p key={i}>{a.stock}</p>
                  )
                })
              }
              
              */}

              <p style={{ color: "orange" }}>
                {" "}
                {data.discountType} 10% discout in every order
              </p>
              <p>Offers</p>
              <p>
                Buy 2 get 1{" "}
                <span style={{ color: "green", fontWeight: "30px" }}>
                  free free free.....
                </span>
              </p>
              <p>
                Get{" "}
                <span style={{ color: "green" }}>30% discount on Tuesday</span>
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default DisplayProduct;
