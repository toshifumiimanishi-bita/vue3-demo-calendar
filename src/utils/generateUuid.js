export default function generateUuid() {
  let uuid_fmt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('');
  for (let i = 0, len = uuid_fmt.length; i < len; i++) {
    switch (uuid_fmt[i]) {
      case 'x':
        uuid_fmt[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case 'y':
        uuid_fmt[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return uuid_fmt.join('');
}