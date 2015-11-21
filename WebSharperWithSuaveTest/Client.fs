namespace WebSharperWithSuaveTest

open WebSharper
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html

[<JavaScript>]
module Client =
    open System
    open WebSharper.JavaScript

    let calculateFib nStr =
        async {
//            let n = try JS.ParseInt nStr 
//                    with e -> failwithf "%s is not an integer: %O" nStr e
            let! res = Server.calculateFib (int nStr)
            return string res
        }

    let main () =
        let rvInput = Var.Create ""
        let submit = Submitter.CreateOption rvInput.View
        let vFibResult =
            submit.View.MapAsync (function
                | None -> async.Return ""
                | Some input -> calculateFib input)

        div [
            Doc.Input [] rvInput
            Doc.Button "Send" [] submit.Trigger
            hr []
            h3Attr [attr.``class`` "text-muted"] [text "The server responded:"]
            divAttr [attr.``class`` "jumbotron"] [h1 [textView vFibResult]]
        ]
