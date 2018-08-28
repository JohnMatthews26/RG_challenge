import key from '../../key';

export const fetchId = data => (
  $.ajax({
    method: "POST",
    url: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes',
    data,
    headers: key
  })
);
