# React Event Channel

A simple and lightweight package to facilitate an event-driven architecture in React applications, allowing components to subscribe to and publish events with ease.

## Installation

Install the package via npm:

```bash
npm install react-event-light -S
```

## Usage

### Importing

First, import the `useEventLight` hook into your React component:

```javascript
import { useEventLight } from "react-event-channel";
```

### Subscribing to Events

You can subscribe to an event to listen for any data that gets published on that event channel. Here is an example of how to subscribe and handle incoming data:

```javascript
import React, { useEffect } from "react";
import { useEventLight } from "react-event-channel";

function MyComponent() {
  const [subscribe, publish] = useEventLight();

  useEffect(() => {
    const subscription = subscribe("my-event", (data) => {
      console.log("Received data:", data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subscribe]);

  return <div>Check your console for event data.</div>;
}

export default MyComponent;
```

### Publishing to Events

To publish data to an event channel, so that all subscribers to that channel can receive and process the data, use the publish function like this:

```javascript
import React from "react";
import { useEventLight } from "react-event-channel";

function PublisherComponent() {
  const [, publish] = useEventLight();

  const sendData = () => {
    publish("my-event", { message: "Hello from PublisherComponent!" });
  };

  return <button onClick={sendData}>Send Event</button>;
}

export default PublisherComponent;
```

## API

- subscribe(event: REACT_EVENT_LIGHT_CHANNEL_NAME, callback: Callback): Subscribe to an event. Returns an object with an unsubscribe method to stop listening for the event.
- publish(event: REACT_EVENT_LIGHT_CHANNEL_NAME, data: DataType): Publish data to all subscribers of the specified event.

## TypeScript Support

This package includes TypeScript definitions to enhance development experience with type checking.

Enjoy using React Event Channel for your event-driven React applications!
