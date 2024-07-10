export interface CurrentStatus {
  state: string;
  timestamp: string;
}

export interface TransitEvent {
  state: string;
  timestamp: string;
  hub?: string;
  reason?: string;
}

export interface NextWorkingDay {
  dayDate: string;
}

export interface TrackingInfo {
  provider: string;
  CurrentStatus: CurrentStatus;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: NextWorkingDay[];
}
