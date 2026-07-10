
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/data/prose"
import type * as d_in from "../../../interface/data/untyped_syntax_tree.js"


export type Node = p_.Transformer_With_Parameter<
    d_in.Node,
    d_out.Phrase,
    {
        'depth': number
    }
>

