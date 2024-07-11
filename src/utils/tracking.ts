import { TIMELINE_STEPS, TIMELINE_STEPS_ORDER } from "../Constants/Shipments";
import { TrackingInfo } from "../Typings/TrackingInfo";

// Function to get the current step of the tracking
export const getCurrentStep = (trackingData: TrackingInfo | null) => {
  switch (trackingData?.CurrentStatus.state) {
    case TIMELINE_STEPS.TICKET_CREATED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.TICKET_CREATED];
    case TIMELINE_STEPS.PACKAGE_RECEIVED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.PACKAGE_RECEIVED];
    case TIMELINE_STEPS.OUT_FOR_DELIVERY:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.OUT_FOR_DELIVERY];
    case TIMELINE_STEPS.CANCELLED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.CANCELLED];
    case TIMELINE_STEPS.NOT_YET_SHIPPED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.NOT_YET_SHIPPED];
    case TIMELINE_STEPS.AVAILABLE_FOR_PICKUP:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.AVAILABLE_FOR_PICKUP];
    case TIMELINE_STEPS.WAITING_FOR_CUSTOMER_ACTION:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.WAITING_FOR_CUSTOMER_ACTION];
    case TIMELINE_STEPS.DELIVERED_TO_SENDER:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.DELIVERED_TO_SENDER];
    case TIMELINE_STEPS.IN_TRANSIT:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.IN_TRANSIT];
    case TIMELINE_STEPS.DELIVERY_FAILED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.DELIVERY_FAILED];
    case TIMELINE_STEPS.DELIVERED:
      return TIMELINE_STEPS_ORDER[TIMELINE_STEPS.DELIVERED];
    default:
      return 0;
  }
};

export const getCurrentStateColor = (trackingData: TrackingInfo | null) : string=> {
  switch (trackingData?.CurrentStatus.state) {
    case TIMELINE_STEPS.TICKET_CREATED:
      return "green";
    case TIMELINE_STEPS.PACKAGE_RECEIVED:
      return "green";
    case TIMELINE_STEPS.OUT_FOR_DELIVERY:
      return "green";
    case TIMELINE_STEPS.CANCELLED:
      return "red";
    case TIMELINE_STEPS.NOT_YET_SHIPPED:
      return "orange";
    case TIMELINE_STEPS.AVAILABLE_FOR_PICKUP:
      return "orange";
    case TIMELINE_STEPS.WAITING_FOR_CUSTOMER_ACTION:
      return "orange";
    case TIMELINE_STEPS.DELIVERED_TO_SENDER:
      return "red";
    case TIMELINE_STEPS.IN_TRANSIT:
      return "orange";
    case TIMELINE_STEPS.DELIVERY_FAILED:
      return "red";
    case TIMELINE_STEPS.DELIVERED:
      return "green";
    default:
      return "blue";
  }
};
