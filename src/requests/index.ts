import {
  getTokenFromCookies,
  setTokenToCookies,
} from "../utils/authentication";
import axios from "axios";

export async function loginAction(reqBody: any) {
  try {
    const apiUrl = `http://35.201.2.209:8000/login`;
    const res = await axios.post(apiUrl, reqBody);
    if (res.status === 200) {
      setTokenToCookies(res.data);
      return Promise.resolve();
    } else {
      return Promise.resolve("Not authorized");
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function getDevicesAction() {
  try {
    const apiUrl = `http://35.201.2.209:8000/devices`;
    const res = await axios.get(apiUrl, {
      headers: {
        Authorization: "Bearer " + getTokenFromCookies(), //the token is a variable which holds the token
      },
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function notifyDone(reqbody) {
  try {
    const apiUrl = `http://35.201.2.209:8000/notify`;
    const res = await axios.post(apiUrl, reqbody, {
      headers: {
        Authorization: "Bearer " + getTokenFromCookies(), //the token is a variable which holds the token
      },
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}
