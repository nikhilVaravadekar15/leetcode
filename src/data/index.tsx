import { AiOutlineLogout } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { TProblem, TSlider } from "../types";

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

const problems: TProblem[] = [
    {
        id: "1",
        status: false,
        title: "Two sum",
        difficulty: "Easy",
        category: "Array",
        solutions: [
            {
                language: "js",
                link: ""
            },
            {
                language: "py",
                link: ""
            }
        ]
    },
    {
        id: "2",
        status: true,
        title: "Reverse linked list",
        difficulty: "Medium",
        category: "Linked list",
        solutions: [
            {
                language: "js",
                link: ""
            }
        ]
    },
    {
        id: "3",
        status: false,
        title: "Jump games",
        difficulty: "Hard",
        category: "Dynamic programming",
        solutions: [
            {
                language: "py",
                link: ""
            }
        ]
    },
    {
        id: "4",
        status: false,
        title: "Valid parentheses",
        difficulty: "Easy",
        category: "Array",
        solutions: [
            {
                language: "js",
                link: ""
            },
            {
                language: "py",
                link: ""
            }
        ]
    },
    {
        id: "2",
        status: true,
        title: "Search a 2d matrix",
        difficulty: "Medium",
        category: "Array",
        solutions: [
            {
                language: "js",
                link: ""
            }
        ]
    }
]

export {
    profileMenuItems,
    problems
}
