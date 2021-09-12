import React from "react";
import { getDevicesAction, notifyDone } from "../../requests";
import { cleanToken } from "../../utils/authentication";
interface Idevices {
  id: number;
  name: string;
}

export default function useDevices(): {
  devices: Idevices[];
  loadingDevices: boolean;
  logout: () => void;
  notify: () => void;
} {
  const [devices, setDevices] = React.useState<Idevices[]>([]);
  const [loadingDevices, setLoadingDevices] = React.useState<boolean>(true);

  React.useEffect(() => {
    let interval;
    const apiCall = async () => {
      const res = await getDevicesAction();
      setDevices(res.data.devices);
      setLoadingDevices(false);
    };
    const initInterval = () => {
      apiCall();
      interval = setInterval(async () => {
        apiCall();
      }, 5000);
    };
    initInterval();
    return () => {
      clearInterval(interval);
    };
  }, []);
  const logout = () => {
    cleanToken();
    window.location.href = "/login";
  };
  const notify = async () => {
    try {
      const reqbody = {
        name: "Md Amdadul Haque",
        email: "amdad77682@gmail.com",
        repoUrl: "https://github.com/amdad77682/meldcx-frontend-developer-test",
        message:
          "Hello! it is my great pleasure to know that i had completed the task. The submitted task is found in defined repoUrl https://github.com/amdad77682/meldcx-frontend-developer-test",
      };
      await notifyDone(reqbody);
      cleanToken();
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };
  return { devices, loadingDevices, logout, notify };
}
