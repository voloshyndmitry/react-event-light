type REACT_EVENT_CHANNEL_NAME = string;

type DataType = string | number | object;

type Callback = (data: DataType) => void;

interface Subscribers {
  [key: string]: Callback[];
}

const subscribers: Subscribers = {};

export const subscribe = (
  event: REACT_EVENT_CHANNEL_NAME,
  callback: Callback
) => {
  if (!subscribers[event]) {
    subscribers[event] = [];
  }
  const index = subscribers[event].push(callback) - 1;
  return {
    unsubscribe(): void {
      subscribers[event].splice(index, 1);
    },
  };
};

export const publish = (
  event: REACT_EVENT_CHANNEL_NAME,
  data: DataType
): void => {
  if (subscribers[event]) {
    subscribers[event].forEach((callback) => callback(data));
  }
};

export const useReactEvent = (): [
  (
    event: REACT_EVENT_CHANNEL_NAME,
    callback: Callback
  ) => { unsubscribe: () => void },
  (event: REACT_EVENT_CHANNEL_NAME, data: DataType) => void
] => {
  return [subscribe, publish];
};
