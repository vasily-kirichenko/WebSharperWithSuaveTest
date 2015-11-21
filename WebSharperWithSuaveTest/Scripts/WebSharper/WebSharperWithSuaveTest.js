(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Concurrency,Remoting,AjaxRemotingProvider,UI,Next,Var,Submitter,WebSharperWithSuaveTest,Client,View,List,Doc,T,AttrProxy;
 Runtime.Define(Global,{
  WebSharperWithSuaveTest:{
   Client:{
    calculateFib:function(nStr)
    {
     return Concurrency.Delay(function()
     {
      return Concurrency.Bind(AjaxRemotingProvider.Async("WebSharperWithSuaveTest:0",[nStr<<0]),function(_arg1)
      {
       return Concurrency.Return(Global.String(_arg1));
      });
     });
    },
    main:function()
    {
     var rvInput,submit,arg00,arg10,vFibResult,arg20,arg201,arg202,arg203;
     rvInput=Var.Create("");
     submit=Submitter.CreateOption(rvInput.get_View());
     arg00=function(_arg1)
     {
      var _,input;
      if(_arg1.$==1)
       {
        input=_arg1.$0;
        _=Client.calculateFib(input);
       }
      else
       {
        _=Concurrency.Return("");
       }
      return _;
     };
     arg10=submit.get_View();
     vFibResult=View.MapAsync(arg00,arg10);
     arg201=function()
     {
      return submit.Trigger();
     };
     arg202=Runtime.New(T,{
      $:0
     });
     arg203=List.ofArray([Doc.TextView(vFibResult)]);
     arg20=List.ofArray([Doc.Input(Runtime.New(T,{
      $:0
     }),rvInput),Doc.Button("Send",Runtime.New(T,{
      $:0
     }),arg201),Doc.Element("hr",[],arg202),Doc.Element("h3",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextNode("The server responded:")])),Doc.Element("div",List.ofArray([AttrProxy.Create("class","jumbotron")]),List.ofArray([Doc.Element("h1",[],arg203)]))]);
     return Doc.Element("div",[],arg20);
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Var=Runtime.Safe(Next.Var);
  Submitter=Runtime.Safe(Next.Submitter);
  WebSharperWithSuaveTest=Runtime.Safe(Global.WebSharperWithSuaveTest);
  Client=Runtime.Safe(WebSharperWithSuaveTest.Client);
  View=Runtime.Safe(Next.View);
  List=Runtime.Safe(Global.WebSharper.List);
  Doc=Runtime.Safe(Next.Doc);
  T=Runtime.Safe(List.T);
  return AttrProxy=Runtime.Safe(Next.AttrProxy);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());

//# sourceMappingURL=WebSharperWithSuaveTest.map