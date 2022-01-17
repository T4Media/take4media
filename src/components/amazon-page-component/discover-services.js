import "./style.scss";

const DiscoverServices = () => {
  return (
    <div className="discover-services">
      <div className="container">
        <h5>Discover services in a growing number of categories</h5>

        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <ul>
              <li>Imaging</li>
              <li>Cataloging</li>
              <li>Account Management</li>
              <li>Advertising Optimization.</li>
              <li>Domestic Shipping</li>
              <li>Training</li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4">
            <ul>
              <li>Enhanced Brand Content</li>
              <li>Compliance</li>
              <li>Accounting</li>
              <li>Taxes</li>
              <li>International Shipping</li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4">
            <ul>
              <li>International Returns</li>
              <li>FBA Preparation</li>
              <li>Storage</li>
              <li>Excess Inventory</li>
              <li>Translation</li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default DiscoverServices;
