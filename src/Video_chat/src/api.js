/*eslint-disable*/
const newRoomEndpoint = `${window.location.origin}/api/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available.
 */
async function createRoom() {
  return { url: "https://go-videocall.daily.co/T0JNalEL9C0eP41uowbZ" };
}

export default { createRoom };
