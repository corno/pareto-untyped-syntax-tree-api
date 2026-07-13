import * as p_t from 'pareto-core/interface/transformer'
import * as p_r from 'pareto-core/interface/refiner'
import * as p_s from 'pareto-core/implementation/serializer'

//schemas

export type API = {
    'serializers': {
        'untyped syntax tree': {
            'Node': p_s.Phrase_Serializer_With_Parameter<
                import("./schemas/untyped_syntax_tree.js").Node,
                import("./schemas/untyped_syntax_tree_serialization.js").Parameters
            >
        }

    },
    'transformers': {


    },
    'refiners': {

    },
}