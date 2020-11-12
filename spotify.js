// http://developer.spotify.com/
//documentation/web-playback-sdk/quick-start#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/" ;
const clientId = "750acd2aa47d4bb3922c0e437f3b242e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playbacj-state",
];



// pulling access token out
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const  getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        //#accessToken=mysupersecretkey&name=Mikey&
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        
        return initial;
    }, {});
}

