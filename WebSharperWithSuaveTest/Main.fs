namespace WebSharperWithSuaveTest

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI.Next
open WebSharper.UI.Next.Server
open WebSharper.UI.Next.Html

type EndPoint =
    | [<EndPoint "/">] Fibonacci
    | [<EndPoint "/about">] About

module Templating =
    type MainTemplate = Templating.Template<"Main.html">

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             liAttr [if endpoint = act then yield attr.``class`` "active"] [
                aAttr [attr.href (ctx.Link act)] [text txt]
             ]
        [
            li ["Fibonacci" => EndPoint.Fibonacci]
            li ["About" => EndPoint.About]
        ]

    let Main ctx action title body =
        Content.Page(
            MainTemplate.Doc(
                title = title,
                menubar = MenuBar ctx action,
                body = body
            )
        )

module Site =
    let homePage ctx =
        Templating.Main ctx EndPoint.Fibonacci "Fibonacci" [
            div [client <@ Client.main() @>]
        ]

    let aboutPage ctx =
        Templating.Main ctx EndPoint.About "About" [
            h1 [text "About"]
            p [text "This is a template WebSharper client-server application."]
        ]

    let main =
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.Fibonacci -> homePage ctx
            | EndPoint.About -> aboutPage ctx
        )

    open WebSharper.Suave
    open Suave.Web

    do startWebServer defaultConfig (WebSharperAdapter.ToWebPart main)
