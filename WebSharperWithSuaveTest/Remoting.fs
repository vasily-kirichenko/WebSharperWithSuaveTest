namespace WebSharperWithSuaveTest

open System
open WebSharper

module Server =

    [<Rpc>]
    let DoSomething (input: string) =
        let R (s: string) = System.String(Array.rev(s.ToCharArray()))
        async {
            return 
                match Int32.TryParse input with
                | true, x -> sprintf "It's an int = %d" x
                | _ -> sprintf "It's just an unstructured string = %s" input
        }