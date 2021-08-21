import React, { useEffect, useState } from "react";


const ButtonInstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button onClick={onClick} className="flex transition-colors duration-150 mx-auto px-4 py-2 lg:px-6 lg:py-3 lg:ml-0 lg:mr-auto space-x-4 bg-green-400 dark:bg-green-600 hover:bg-green-500 rounded-lg text-white">
        <svg className="transform scale-125 lg:scale-150 my-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"/>
            <path stroke="currentColor" d="M12 14.25L12 4.75"/>
            <path stroke="currentColor" d="M8.75 10.75L12 14.25L15.25 10.75"/>
        </svg>
        <span className="text-lg lg:text-2xl">Install App</span>
    </button>
  );
};

export default ButtonInstallPWA;