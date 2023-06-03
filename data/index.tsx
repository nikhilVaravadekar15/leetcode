import { AiOutlineLogout } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";

type TSlider = {
    title: string
    icon: React.ReactNode
}

const profileMenuItems: TSlider[] = [
    {
        title: "My Profile",
        icon: <RiUserSettingsLine className="h-4 w-4" />,
    },
    {
        title: "Sign Out",
        icon: <AiOutlineLogout className="h-4 w-4" />,
    },
];

export {
    profileMenuItems
}
