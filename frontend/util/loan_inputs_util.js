

// export const fetchResponse = (data, headers) => (
//
//   $.ajax({
//     method: "POST",
//     url: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes',
//     data,
//     headers,
//     crossDomain: true,
//     // xhrFields: {withCredentials: true},
//
//   })
// );

export function fetchResponse(data, inputHeaders){
  let url = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes';
  return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, same-origin, *omit
        headers: {Authorization: "RG-AUTH 5e699c59-b422-16fe-8898-add5279e63bc",
        "Content-Type": "application/json; charset=utf-8"},
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({query: data}), // body data type must match "Content-Type" header
    })
    .then(response => console.log(response)); // parses response to JSON
}
