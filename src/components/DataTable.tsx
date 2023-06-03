import React from 'react'
import {
    Table,
    Pagination,
    Group,
    Code,
    Tooltip
} from '@mantine/core';
import { TbChecks } from 'react-icons/tb'
import { problems } from '@/data';
import { TProblem, TSolution } from '@/types';
import Link from 'next/link';


export default function DataTable() {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section className="h-full w-full flex flex-col justify-between">
            <Table
                fontSize="md"
                verticalSpacing="md"
                horizontalSpacing="sm"
                className="rounded-lg overflow-hidden"
            >
                <thead className="text-black cursor-pointer bg-slate-200 hover:bg-slate-300">
                    <tr className="text-lg font-bold">
                        <th>Id.</th>
                        <th>Title</th>
                        <th>Difficulty</th>
                        <th>Category</th>
                        <th>Solution</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        problems.map((problem: TProblem, index: number) => (
                            <tr
                                key={problem.id}
                                className="bg-slate-800 hover:bg-slate-700 text-white"
                            >
                                <td className="w-[5%]">
                                    <span
                                        className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 tracking-tighter"
                                    >
                                        {index + 1}
                                    </span>
                                </td>
                                <td className="w-[39%]">
                                    <Link
                                        href={""}
                                        className="hover:text-blue-400 hover:border-b-2 hover:border-b-blue-400"
                                    >
                                        {problem.title}
                                    </Link>
                                </td>
                                <td className="w-[15%]">
                                    {
                                        problem.difficulty.toLowerCase() === "easy" && (
                                            <div className="w-fit py-0.5 px-2 text-sm cursor-pointer bg-green-500 rounded-2xl">
                                                {problem.difficulty}
                                            </div>
                                        )
                                    }
                                    {
                                        problem.difficulty.toLowerCase() === "medium" && (
                                            <div className="w-fit py-0.5 px-2 text-sm cursor-pointer bg-yellow-500 rounded-2xl">
                                                {problem.difficulty}
                                            </div>
                                        )
                                    }
                                    {
                                        problem.difficulty.toLowerCase() === "hard" && (
                                            <div className="w-fit py-0.5 px-2 text-sm cursor-pointer bg-red-500 rounded-2xl">
                                                {problem.difficulty}
                                            </div>
                                        )
                                    }
                                </td>
                                <td className="w-[17%]">
                                    {problem.category}
                                </td>
                                <td className="w-[17%]">
                                    <Group position="left">
                                        {
                                            problem.solutions.map((solution: TSolution, index: number) => {
                                                return (
                                                    <Link key={index} href={solution.link}>
                                                        <Code color="orange">{solution.language}</Code>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Group>
                                </td>
                                <td className="w-[7%]">
                                    {
                                        problem.status && (
                                            <Tooltip label="Completed">
                                                <TbChecks className="ml-4 p-1 h-6 w-6 text-green-500 cursor-pointer border border-green-500 rounded-full hover:text-white hover:bg-green-500" />
                                            </Tooltip>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Pagination
                total={10}
                radius="xl"
                position="center"
                styles={(theme) => ({
                    control: {
                        '&[data-active]': {
                            backgroundImage: theme.fn.gradient({ from: 'orange', to: 'pink' }),
                        },
                        '&[type]': {
                            color: theme.white
                        },
                    },
                })}
            />
        </section>
    )
}
