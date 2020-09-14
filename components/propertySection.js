import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
import {priceFormatted} from './helpers'

export const PropertySection = ({ properties }) => {
  return (
    <>
      <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor" >
        Notre catalogue
      </h2>
      <MDBRow>
        {properties &&
          properties.map((property) => (
            <MDBCol md="4" lg="4" key={property._id}>
              <MDBView zoom className= "z-depth-1-half">
                <img className="globalImg" src={property.pictures[0]} alt={property.title} />
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  <strong>{priceFormatted(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          ))}
      </MDBRow>
      <div className="text-center">
          <button className="globalButton" >
              Afficher plus
          </button>
      </div>
      <hr className="my-5"/>
    </>
  );
};
