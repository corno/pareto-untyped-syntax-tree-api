import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../untyped_syntax_tree/schema.js"
import type * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"
import type * as s_parameters from "../schema.js"

namespace declarations {
    export type Node = p_.Transformer_With_Parameter<
        s_in.Node,
        s_out.Phrase,
        s_parameters.Parameters
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"

export const Node: declarations.Node = ($, $p) => $p.depth === 0
    ? sh.ph.text("...") :
    sh.ph.composed([
        sh.ph.text(`Node: ${$.kind}`),
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