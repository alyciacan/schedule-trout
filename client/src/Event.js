import moment from 'moment'

class Event {
  constructor(title, start, end) {
    this.start = moment(start).toDate();
    this.end = moment(end).toDate();
    this.title = title;
  }
}

export default Event