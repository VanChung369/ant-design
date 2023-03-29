const HEADERS: CONSTANT.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Origin': '*',
};

const HEADERS_MULTIPLE_PART: CONSTANT.headers = {
  ...HEADERS,
  'Content-Type': 'multipart/form-data; boundary=something',
  Accept: 'application/json',
};

export { HEADERS, HEADERS_MULTIPLE_PART };
