
export type TSlider = {
    title: string
    icon: React.ReactNode
}

export type TProblem = {
    id: string
    status: boolean
    title: string
    difficulty: string
    category: string
    solutions: TSolution[]
}

export type TSolution = {
    language: string
    link: string
}