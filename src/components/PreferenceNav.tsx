import { Tooltip } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";

// type PreferenceNavProps = {
//     settings: ISettings;
//     setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
// };

export default function PreferenceNav() {

    const { toggle, fullscreen } = useFullscreen();

    return (
        <div className="w-full h-full flex items-center justify-between bg-dark-layer-2">
            <div className="flex items-center text-white">
                <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
                    <div className="flex items-center px-1">
                        <div className="text-xs text-label-2 dark:text-dark-label-2">JavaScript</div>
                    </div>
                </button>
            </div>
            <div className="flex gap-4 items-center m-2 mr-2">
                <button
                    onClick={() => toggle()}
                    className="preferenceBtn group"
                >
                    <Tooltip label={!fullscreen ? "Enter Full Screen" : "Exit Full Screen"}>
                        <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
                            {
                                !fullscreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />
                            }
                        </div>
                    </Tooltip>
                </button>
                <button className="preferenceBtn group">
                    <Tooltip label="Settings">
                        <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
                            <AiOutlineSetting />
                        </div>
                    </Tooltip>
                </button>
            </div>
        </div>
    );
};
