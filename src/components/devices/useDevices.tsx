import React from "react";
import { getDevicesAction, notifyDone } from "../../requests";
import { cleanToken } from "../../utils/authentication";
interface Idevices {
  id: number;
  name: string;
}

export default function useDevices(): {
  devices: Idevices[];
  logout: () => void;
  notify: () => void;
} {
  const [devices, setDevices] = React.useState<Idevices[]>([]);

  React.useEffect(() => {
    let interval;
    const initApiAll = () => {
      interval = setInterval(async () => {
        const res = await getDevicesAction();
        setDevices(res.data.devices);
      }, 5000);
    };
    initApiAll();
    return () => {
      clearInterval(interval);
    };
  }, []);
  const logout = () => {
    cleanToken();
    window.location.href = "/login";
  };
  const notify = async () => {
    const reqbody = {
      name: "Md Amdadul Haque",
      email: "amdad77682@gmail.com",
      repoUrl: "https://github.com/amdad77682/meldcx-frontend-developer-test",
      message: "",
    };
    await notifyDone(reqbody);
    window.location.href = "/login";
  };
  return { devices, logout, notify };
}
