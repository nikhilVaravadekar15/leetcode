
export type TProblem = {
    id: string
    order: number
    status?: boolean
    title: string
    difficulty: string
    category: string
    solutions: TSolution[]
}

export type TProblemDB = TProblem & {
    likes: number
    dislikes: number
}

// local problem data
export type TProblemLocal = TProblem & {
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
