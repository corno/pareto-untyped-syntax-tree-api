import * as p_i from 'pareto-core/interface/schema'

export type Untyped_Syntax_Tree = {
    'root': Node
    'trailing comments': Comments
}

export type Node = {
    'kind': string
    'children': p_i.List<Node>
    'comments': Comments
    'location': Location
    'text': string
}

export type Location = {
    'line': number
    'column': number
}

export type Keyword = null

export type Comments = p_i.List<string>