import axios from "axios";

const URL = "https://api.github.com/users/4kauanmota";

const getRepos = async () => {
  const response = await axios.get(URL + "/repos");

  return response;
};

export { getRepos };
