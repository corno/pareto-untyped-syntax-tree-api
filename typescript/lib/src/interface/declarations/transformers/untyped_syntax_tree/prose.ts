
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import type * as d_in from "../../../data/untyped_syntax_tree.js"


    export type Node = p_i.Transformer_With_Parameter<
        d_in.Node,
        d_out.Phrase,
        {
            'depth': number
        }
    >

