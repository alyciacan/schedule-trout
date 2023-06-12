const EventBus = {
  on(event_name, callback) {
    document.addEventListener(event_name, event => callback(event.detail));
  },
  dispatch(event_name, data) {
    const dispatch = new CustomEvent(event_name, { detail: data });
    document.dispatchEvent(dispatch);
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default EventBus;