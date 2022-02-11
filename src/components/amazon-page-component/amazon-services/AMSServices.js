import ServiceCard from "../../cards/serviceCard/serviceCard";
import { FaAdversal, FaConnectdevelop } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { HiDocumentSearch } from "react-icons/hi";
import Heading from "../../common/heading/heading";
import { SiMarketo } from "react-icons/si";
import Fade from "react-reveal/Fade";
import "./AMSServices.scss";
import cat from "../../../images/services/1.jpg";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AmazonServices = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="amazon-ams-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />

        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={cat} alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-beside-image">
              <h2>Creative mobile app development agency</h2>
              <h6>
                We help a diverse clientele build result-driven mobile apps for
                different industries.
              </h6>

              <Box sx={{ width: "100%" }} style={{ marginTop: "5rem" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    indicatorColor="red"
                  >
                    <Tab label="E-Commerce" {...a11yProps(0)} />
                    <Tab label="Social" {...a11yProps(1)} />
                    <Tab label="Marketplaces" {...a11yProps(2)} />
                    <Tab label="Food" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <h4>E-Commerce</h4>
                  <p>
                    We build marketplaces with intuitive vendor and client
                    profiles, interactive user interface, multiple payment
                    options, product listings, simple checkout, and more.
                  </p>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <h4>Social</h4>
                  <p>
                    We build marketplaces with intuitive vendor and client
                    profiles, interactive user interface.
                  </p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <h4>Marketplaces</h4>
                  <p>
                    We build marketplaces with intuitive vendor and client
                    profiles, interactive user interface, multiple payment
                    options, product listings, simple checkout, and more.
                  </p>
                </TabPanel>{" "}
                <TabPanel value={value} index={3}>
                  <h4 style={{ color: "white" }}>Food</h4>
                  <p>
                    We build marketplaces with intuitive vendor and client
                    profiles, interactive user interface, multiple payment
                    options, product listings, simple checkout, and more.
                  </p>
                </TabPanel>
              </Box>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={300} big>
              <ServiceCard
                heading="Amazon AMS Services (Ads/PPCmanagement)"
                icon={<GiArchiveResearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={400} big>
              <ServiceCard
                heading="Storefront Management"
                icon={<HiDocumentSearch />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <Fade duration={2000} delay={500} big>
              <ServiceCard
                heading="Amazon POST Management (To increase brand followers)"
                icon={<FaAdversal />}
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonServices;
