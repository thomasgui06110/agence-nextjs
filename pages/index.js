
import { Layout } from "../components/layout";
import api from "../auth/axios";
import { PropertyVip } from "../components/propertyVip";
import { MDBContainer } from "mdbreact";
import { Carousel } from "../components/caroussel";
import { PropertySection } from "../components/propertySection";
import { Features } from "../components/features";
import Head from 'next/head'

export default function Home({ propertiesVip, properties }) {
  return (
    <>
    <Head>
      <title>Agence Next JS Cannes</title>
    </Head>
    <Layout footer>
      <Carousel />
      <MDBContainer>
        <PropertyVip properties={propertiesVip} />
        <PropertySection properties={properties} />
        <Features />
      </MDBContainer>
    </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const { data: propertiesVip } = await api.get("/api/properties/vip");
  const { data } = await api.get("/api/properties?limit=6");
  const properties = data.data;

  return {
    props: {
      propertiesVip,
      properties
        },
  };
};
