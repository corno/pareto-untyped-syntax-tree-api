import * as p_ from 'pareto-core/interface/query_action'


//data types
import type * as d_parse_file from "../data/parse_file.js"

export namespace queries {

    export type parse_file = p_.Query_Action<
        d_parse_file.Result,
        d_parse_file.Error,
        d_parse_file.Parameters
    >

}

export namespace functions {

}