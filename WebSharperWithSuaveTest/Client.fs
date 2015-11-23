namespace WebSharperWithSuaveTest

open WebSharper
open WebSharper.UI.Next
open WebSharper.UI.Next.Html

[<JavaScript>]
module Client =
    open System

    let main () =
        let rvInput = Var.Create None
        let vFibResult = Var.Create None
        let rnd = Random()
        let vNow = Var.Create DateTime.Now
        let getOrElse x = match x with Some x -> string x | None -> "<..>"

        async {
            while true do
                let n = rnd.Next(20, 39)
                rvInput.Value <- Some n
                let! res = Server.calculateFib n
                vFibResult.Value <- Some res
                vNow.Value <- DateTime.Now
                do! Async.Sleep 1000
        } |> Async.Start


        div [
            h1 [text "N = "; textView (rvInput.View |> View.Map getOrElse)]
            hr []
            h3Attr [attr.``class`` "text-muted"] [text "The server responded:"]
            divAttr [attr.``class`` "jumbotron"] 
                    [h1 [text "Fib = "; textView (vFibResult.View |> View.Map getOrElse)]]
            h4Attr [attr.``class`` "text-muted"] [textView (vNow.View |> View.Map string)]
        ]
