import axios from "axios";

const URL = "/informations/curiosities.json";

interface curiosity {
  type: string;
  text: string;
}

const getCuriosities = async (): Promise<Array<curiosity>> => {
  return await fetch(URL)
    .then((data) => data.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
};

export { getCuriosities };
