import React from "react";
import "styled-components/macro";
import { keyframes } from "styled-components";
import useDevices from "./useDevices";

const Rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);}
`;

export default function Devices() {
  const { devices, logout } = useDevices();

  return (
    <div
      css={`
        background: #ff7143;
        height: 100vh;
      `}
      className="flex items-center justify-center relative"
    >
      {devices.length > 5 ? (
        <span
          className="border border-gray-400 rounded-full absolute block"
          css={`
            width: 340px;
            height: 340px;
          `}
        ></span>
      ) : null}
      <span
        className="border border-gray-400 rounded-full absolute block"
        css={`
          width: 230px;
          height: 230px;
        `}
      ></span>
      <div className="w-64 h-64 relative">
        {devices.slice(0, 5).map((device) => {
          return (
            <span
              key={device.id}
              className={`w-32 h-8 block absolute left-0`}
              css={`
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                transform: rotate(
                  ${(360 / devices.slice(0, 5).length) * device.id}deg
                );
                transform-origin: right 0px;
              `}
            >
              <span className="w-8 h-8 rounded-full bg-white block"></span>
            </span>
          );
        })}

        <div
          className="text-center text-white absolute"
          css={`
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
          `}
        >
          <h1 className="text-6xl font-thin leading-none">{devices.length}</h1>
          <h4 className="uppercase leading-none">
            Devices <br />
            Online
          </h4>
        </div>
      </div>
      {devices.length > 5 ? (
        <div
          className="absolute "
          css={`
            width: 370px;
            height: 370px;
          `}
        >
          {devices.slice(5, devices.length).map((device) => {
            return (
              <span
                key={device.id}
                className={`h-8 block absolute left-0`}
                css={`
                  width: 185px;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                  transform: rotate(
                    ${(360 / devices.slice(5, devices.length).length) *
                    device.id}deg
                  );
                  transform-origin: right 0px;
                `}
              >
                <span className="w-8 h-8 rounded-full bg-white block"></span>
              </span>
            );
          })}
        </div>
      ) : null}
      <div className="absolute bottom-0 p-4  bg-transparent w-full">
        <div className="flex items-center justify-center">
          <button className=" px-4 py-2 mr-4 rounded-md bg-white ">
            Notify
          </button>
          <button
            onClick={logout}
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
