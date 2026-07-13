import * as interface_ from "./interface/api.js"

import * as ser_untyped_syntax_tree from "./_implementation/serializers/untyped_syntax_tree.js"


export const api: interface_.API = {
    'serializers': {
        'untyped syntax tree': {
            'Node': ser_untyped_syntax_tree.Node,
        }
    },
    'transformers': {


    },
    'refiners': {
    }
}