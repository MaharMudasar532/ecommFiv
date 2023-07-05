import React from "react";
import RequestForm from "./section/request_form";

const Request = () => {
  const req_obj = {
    form_data: {
      title: "Request a sales note",
      para: "create sales note to inform your clients with your latests offers ",
      button: "Submit your sale note",
      para_2:
        "By using our services, you have accepted the  of Wafaa - loyalty cards wallet",
      para_3: "of Wafaa - loyalty cards wallet",
      link: "TERMS & CONDITIONS",
      percent: "30% de reduction, hair ",
      small: "Beauty salon - Oran",
    },
  };
  return (
    <>
      <RequestForm data={req_obj?.form_data} />
    </>
  );
};

export default Request;
