import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../interface/schemas/untyped_syntax_tree.js"
import type * as s_out from "../../../interface/schemas/prose.js"
namespace declarations {
    export type Node = p_.Transformer_With_Parameter<
        s_in.Node,
        s_out.Phrase,
        {
        'depth': number
    }
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Node: declarations.Node = ($, $p) => $p.depth === 0
    ? sh.ph.literal("...") :
    sh.ph.composed([
        sh.ph.literal(`Node: ${$.kind}`),
        sh.ph.indent(
            sh.pg.sentences(
                p_.from.list($.children).map(
                    ($) => sh.sentence([
                        Node($, {
                            'depth': $p.depth - 1,
                        })
                    ]),
                )
            )
        )
    ])