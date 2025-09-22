import React from "react";

function ServiceItem({ item }) {
  if (typeof window === "undefined") {
    console.log("Service Item Rendering on Server");
  } else {
    console.log("Service Item Rendering on Client");
  }

  return <div>{item}</div>;
}

export default ServiceItem;
