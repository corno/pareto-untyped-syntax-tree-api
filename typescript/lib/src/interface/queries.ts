import * as p_ from 'pareto-core/interface/query_interface'

//schemas
import type * as s_parse_file from "./schemas/parse_file.js"

export namespace queries {

    export type parse_file = p_.Query_Interface<
        s_parse_file.Result,
        s_parse_file.Error,
        s_parse_file.Parameters
    >

}

export namespace functions {

}