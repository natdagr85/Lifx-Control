import axios from "axios";

function use(options) {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function toggle (options, power) {
  options.data={duration: 0.5, fast: false, power: power}
    use(options);
}

function colorSelect(options, color) {
  options.data={duration: 0.5, fast: false, power: 'on', color: color}
    use(options);
}

function Control(props) {

  const options = {
    method: 'PUT',
    url: 'https://api.lifx.com/v1/lights/all/state',
    headers: {
      accept: 'text/plain',
      'content-type': 'application/json',
      Authorization: `Bearer ${props.apiToken}`
    },
    data: {}
  };
 return (
    <div>
      <p>Select Your Desired State</p>
      <button className="bttn" onClick={() => (toggle(options, 'on'))}>Power On</button>
      <button className="bttn" onClick={() => (toggle(options, 'off'))}>Power Off</button>
      <button className="bttn" onClick={() => (colorSelect(options, 'white'))}>White</button>
      <button className="bttn green" onClick={() => (colorSelect(options, 'green'))}>Green</button>
      <button className="bttn red" onClick={() => (colorSelect(options, 'red'))}>Red</button>
      <button className="bttn blue" onClick={() => (colorSelect(options, 'blue'))}>Blue</button>
      <button className="bttn cyan" onClick={() => (colorSelect(options, 'cyan'))}>Cyan</button>
      <button className="bttn purple" onClick={() => (colorSelect(options, 'purple'))}>Purple</button>
    </div>
  );
}

export default Control;