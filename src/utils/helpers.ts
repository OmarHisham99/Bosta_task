export function formatDateTime(dateString: string | undefined): string {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);

  // Get hours, minutes, and determine AM/PM
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Get date parts
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero based
  const year = date.getFullYear();

  // Get day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Format the final string
  const formattedDate = `${hours}:${strMinutes}${ampm} ${
    month < 10 ? "0" + month : month
  }/${day < 10 ? "0" + day : day}/${year} ${dayOfWeek}`;

  return formattedDate;
}

export function formatTime(timestamp: string, locale: string): string {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  // Handle localization for AM/PM
  const ampmLocalized = locale === "ar" ? (ampm === "am" ? "ص" : "م") : ampm;

  return `${hours}:${minutesStr} ${ampmLocalized}`;
}
