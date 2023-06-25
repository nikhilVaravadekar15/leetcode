
export type TSlider = {
    title: string
    icon: React.ReactNode
}

export type TProblem = {
    id: string
    status?: boolean
    title: string
    difficulty: string
    category: string
    solutions: TSolution[]
}

// local problem data
export type TProblemLocal = TProblem & {
    order: number
    examples: TExample[]
    constraints: string
    starterCode: string
    problemStatement: string
    starterFunctionName: string
    handlerFunction: ((fn: any) => boolean) | string
};

export type TExample = {
    id: number;
    inputText: string;
    outputText: string;
    explanation?: string;
    image?: string;
};

export type TSolution = {
    language: string
    link: string
}

export type TEmail = {
    email: string
}

export type TUserauth = TEmail & {
    password: string
}

export type TSignup = TUserauth & {
    fullname: string
}
