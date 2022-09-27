import axios from 'axios'

componentDidMount() {
    axios.get('http://api.weatherstack.com/current?access_key=48bcd1a88c1f0c17cd9ba191e59168bf&query=Cairns')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }