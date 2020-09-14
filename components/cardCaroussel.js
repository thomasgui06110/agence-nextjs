import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import Head from "next/head";

export const CardCarousel = ({ property }) => {
  return (
    <>


      <div className="myCaroussel">
        <MDBCarousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              {property && property.pictures[0] ? (
                <MDBView>
                  <img
                    className="d-block w-100 caroussel-image"
                    src={property.pictures[0]}
                    alt="First slide"
                  />
                </MDBView>
              ) : null}
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              {property && property.pictures[1] ? (
                <MDBView>
                  <img
                    className="d-block w-100 caroussel-image"
                    src={property.pictures[1]}
                    alt="First slide"
                  />
                </MDBView>
              ) : null}
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <style jsx>
          {`
            @media (min-width: 768px) {
              .myCaroussel {
                width: 100%;
              }
              .caroussel-image {
                width: 100%;
                heigth: 400px;
                padding: 0 6px;
                display: block;
              }
            }
            @media (max-width: 768px) {
              .myCaroussel {
                width: 100%;
              }
              .caroussel-image {
                width: 100%;
                heigth: 300px;
                padding: 0 6px;
                display: block;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};
