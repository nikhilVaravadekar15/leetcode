import { Tooltip } from "@mantine/core";
import { TbChecks } from "react-icons/tb";
import { TiStarOutline } from "react-icons/ti";
import { TExample, TProblemLocal } from "@/types";
import { AiFillLike, AiFillDislike } from "react-icons/ai";


export default function ProblemDescription({ problem }: { problem: TProblemLocal }) {

    return (
        <div className="bg-dark-layer-1">
            {/* TAB */}
            <div className="flex h-10 w-full items-center pt-1 bg-dark-layer-2 text-white overflow-x-hidden">
                <div className="bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer">
                    Description
                </div>
            </div>
            <div className="flex px-0 py-4 h-[calc(100vh-100px)] overflow-y-auto">
                <div className="px-5">
                    {/* Problem heading */}
                    <div className="w-full">
                        <div className="flex space-x-4">
                            <div className="flex-1 flex gap-1 mr-2 text-lg text-white font-medium">
                                <span>{problem.order}.</span>
                                <span>{problem.title}</span>
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            {
                                problem.difficulty.toLowerCase() === "easy" && (
                                    <div className="w-fit py-0.5 px-2 text-sm cursor-pointer text-white bg-green-500 rounded-2xl">
                                        {problem.difficulty}
                                    </div>
                                )
                            }
                            {
                                problem.difficulty.toLowerCase() === "medium" && (
                                    <div className="w-fit py-0.5 px-2 text-sm cursor-pointer text-white bg-yellow-500 rounded-2xl">
                                        {problem.difficulty}
                                    </div>
                                )
                            }
                            {
                                problem.difficulty.toLowerCase() === "hard" && (
                                    <div className="w-fit py-0.5 px-2 text-sm cursor-pointer text-white bg-red-500 rounded-2xl">
                                        {problem.difficulty}
                                    </div>
                                )
                            }
                            <Tooltip label="Completed">
                                <TbChecks className="ml-4 p-1 h-6 w-6 text-dark-green-s cursor-pointer border border-green-500 rounded-full hover:text-white hover:bg-green-500" />
                            </Tooltip>
                            <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                                <AiFillLike />
                                <span className="text-xs">120</span>
                            </div>
                            <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                                <AiFillDislike />
                                <span className="text-xs">2</span>
                            </div>
                            <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                                <TiStarOutline />
                            </div>
                        </div>
                        {/* Problem Statement(paragraphs) */}
                        <div className="text-white text-sm">
                            <div dangerouslySetInnerHTML={{ __html: problem.problemStatement }}></div>
                        </div>
                        {/* Examples */}
                        <div className="mt-4">
                            {/* Example */}
                            {
                                problem.examples.map((example: TExample, index: number) => {
                                    return (
                                        <div key={index}>
                                            <p className="font-medium text-white ">Example {example.id}: </p>
                                            {
                                                example.image && (
                                                    <img src={example.image} alt={`example image ${example.id}`} draggable={false} />
                                                )
                                            }
                                            <div className="example-card">
                                                <pre>
                                                    <strong className="text-white">Input: </strong> {example.inputText} {" "} <br />
                                                    <strong>Output:</strong> {example.outputText} <br />
                                                    <strong>Explanation:</strong> {example.explanation}
                                                </pre>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* Constraints */}
                        <div className="my-4">
                            <div className="text-white text-sm font-medium">Constraints:</div>
                            <ul className="text-white ml-5 list-disc">
                                <div dangerouslySetInnerHTML={{ __html: problem.constraints }}></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
