// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAeF4KKmjjZrUmzCfmeRMKTGShBsJSGOkb8ySa73wU51Y3lqAhPhcMXJWW8jYvTAwMMPvlQV8VOCe2XYLwAzbKsl20J14rxjMdEOIpbGOWG49GjsOIy4FyPFbdzPccxo5fZzmgg7mllkzRrVQsIpNNm9Bn0BHbAQNgpJSnCPoAwd4o6K3gsSD6v0zcvmysHJSi9_GUUc7B6tkit48Lnah5bNGwP-WUywNcRlPC1s6KBW-tOdUnaEaeP2s2nCpL7ayjjdAFRvLE';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
