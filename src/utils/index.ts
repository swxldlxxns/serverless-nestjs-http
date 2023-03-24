export function log(type: 'INFO' | 'ERROR', data: object): void {
  switch (type) {
    case 'INFO':
      console.info(data);
      break;
    case 'ERROR':
      console.error(data);
      break;
  }
}
