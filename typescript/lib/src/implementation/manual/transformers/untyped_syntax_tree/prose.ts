import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../../declarations/transformers/untyped_syntax_tree/prose.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Node: interface_.Node = ($, $p) => $p.depth === 0
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