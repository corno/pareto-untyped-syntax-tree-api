
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_out from "pareto-fountain-pen/interface/data/prose"
import type * as s_in from "../../../interface/schemas/untyped_syntax_tree.js"


export type Node = p_.Transformer_With_Parameter<
    s_in.Node,
    s_out.Phrase,
    {
        'depth': number
    }
>

