import { Colors } from "../Constants/Colors";
import { TIMELINE_STEPS, TIMELINE_STEPS_ORDER } from "../Constants/Shipments";
import { TrackingInfo } from "../Typings/TrackingInfo";

// Function to get the current step of the tracking
export const getCurrentStep = (trackingData: TrackingInfo | null) => {
  const status = trackingData?.CurrentStatus.state;
  return TIMELINE_STEPS_ORDER[status || ""] || 0;
};

export const getCurrentStateColor = (
  trackingData: TrackingInfo | null
): string => {
  switch (trackingData?.CurrentStatus.state) {
    case TIMELINE_STEPS.TICKET_CREATED:
      return Colors.Succedeed;
    case TIMELINE_STEPS.PACKAGE_RECEIVED:
      return Colors.Succedeed;
    case TIMELINE_STEPS.OUT_FOR_DELIVERY:
      return Colors.Succedeed;
    case TIMELINE_STEPS.DELIVERED:
      return Colors.Succedeed;
    case TIMELINE_STEPS.NOT_YET_SHIPPED:
      return Colors.Warning;
    case TIMELINE_STEPS.AVAILABLE_FOR_PICKUP:
      return Colors.Warning;
    case TIMELINE_STEPS.WAITING_FOR_CUSTOMER_ACTION:
      return Colors.Warning;
    case TIMELINE_STEPS.IN_TRANSIT:
      return Colors.Warning;
    case TIMELINE_STEPS.DELIVERY_FAILED:
      return Colors.Failed;
    case TIMELINE_STEPS.CANCELLED:
      return Colors.Failed;
    case TIMELINE_STEPS.DELIVERED_TO_SENDER:
      return Colors.Failed;

    default:
      return "black";
  }
};
