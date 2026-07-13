import * as p_ from 'pareto-core/interface/schema'

//schemas
import type * as s_ust from "./untyped_syntax_tree.js"

export type Parameters = {
    'data': p_.List<number>
}

export type Error =
| ['syntax errors', {
    'messages': p_.List<string>
}]

export type Result = {
    'untyped syntax tree': s_ust.Untyped_Syntax_Tree
}