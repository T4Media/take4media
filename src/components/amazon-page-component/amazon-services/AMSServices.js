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
import { client } from "../../../client";
import { useState, useEffect } from "react";

const AmazonServices = () => {
  const [AMSServices, setAMSServices] = useState();
  useEffect(() => {
    client
      .getEntries({
        content_type: "amazonAmsServices",
        select: "fields",
      })
      .then((res) => {
        setAMSServices(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img src={cat} alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
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
                    {AMSServices &&
                      AMSServices.map((ams, i) => (
                        <Tab label={ams.fields.serviceName} {...a11yProps(i)} />
                      ))}
                  </Tabs>
                </Box>
                {AMSServices &&
                  AMSServices.map((ams, i) => (
                    <TabPanel value={value} index={i}>
                      <h4>{ams.fields.serviceName}</h4>
                      <p>{ams.fields.serviceDescription}</p>
                    </TabPanel>
                  ))}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonServices;
