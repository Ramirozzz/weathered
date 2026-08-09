export const formatForecastDay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
  });
};

export const formatForecastDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

export const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
