import { TProblemLocal } from '@/types/index';
import { twoSum } from './set/two-sum';
import { jumpGame } from './set/jump-game';
import { search2DMatrix } from './set/search-a-2d-matrix';
import { validParentheses } from './set/valid-parentheses';
import { reverseLinkedList } from './set/reverse-linked-list';

interface ProblemMap {
    [key: string]: TProblemLocal;
}

export const problemMap: ProblemMap = {
    "two-sum": twoSum,
    "reverse-linked-list": reverseLinkedList,
    "jump-game": jumpGame,
    "search-a-2d-matrix": search2DMatrix,
    "valid-parentheses": validParentheses,
};
