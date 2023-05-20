import { useEffect, useState } from "react";

type EventCallback = (data: any) => void;

interface EventBusType {
  events: Record<string, EventCallback[]>;
  subscribe(eventName: string, callback: EventCallback): void;
  publish(eventName: string, data: any): void;
}

const EventBus: EventBusType = {
  events: {},

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  },

  publish(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach(callback => callback(data));
  }
};

const ComponentA: React.FC = () => {
  const handleClick = () => {
    EventBus.publish('buttonClicked', { message: 'Hello from Component A!' });
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

const ComponentB: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const callback: EventCallback = (data) => {
      setMessage(data.message);
    };

    EventBus.subscribe('buttonClicked', callback);

    return () => {
      EventBus.events['buttonClicked'] = EventBus.events['buttonClicked'].filter(cb => cb !== callback);
    };
  }, []);

  return (
    <div>{message}</div>
  );
};

function EventBusComponent() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

export default EventBusComponent;
