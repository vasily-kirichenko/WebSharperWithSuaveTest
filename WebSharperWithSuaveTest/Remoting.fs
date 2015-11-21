namespace WebSharperWithSuaveTest

open System
open WebSharper

module Server =
    [<Rpc>]
    let calculateFib n = 
        async {
            return 
                match n with
                | _ when n > 42 -> failwith "The number should be less than or equal 42"
                | _ -> Fib.fib n
        }