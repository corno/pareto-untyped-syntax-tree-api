import * as p_di from 'pareto-core/interface/data'

//schemas
import type * as s_ust from "./untyped_syntax_tree.js"

export type Parameters = {
    'data': string
}

export type Error =
| ['syntax errors', {
    'messages': p_di.List<string>
}]

export type Result = {
    'untyped syntax tree': s_ust.Untyped_Syntax_Tree
}