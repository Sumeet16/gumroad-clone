import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import InfoCardSection from "../../components/InfoCardSection/InfoCardSection";

const Collaborators = () => {
  return (
    <div className="dashboard_container flex_row">
      <Sidebar />

      <div className="dashboard_info_section" style={{ marginTop: 0 }}>
        <div>
          <p className="big-heading">Collaborators</p>
        </div>
        <div className="dashboard_summary_report_section">
					<InfoCardSection title={'Best selling'} imageSrc={'./images/collaborate.png'} >
					<h2 className="heading2">No collaborators yet</h2>
              <p>
                Share your revenue with the people who helped create your
                products.
              </p>
							<a className="underline">Learn more about collaborators</a>
					</InfoCardSection>
	        </div>
      </div>
    </div>
  );
};

export default Collaborators;
