(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,UI,Next,Var,Random,Date,Concurrency,Var1,Remoting,AjaxRemotingProvider,List,Doc,View,T,AttrProxy;
 Runtime.Define(Global,{
  WebSharperWithSuaveTest:{
   Client:{
    main:function()
    {
     var rvInput,vFibResult,rnd,vNow,getOrElse,arg00,arg20,arg201,arg10,arg202,arg203,arg101,arg001,arg102;
     rvInput=Var.Create({
      $:0
     });
     vFibResult=Var.Create({
      $:0
     });
     rnd=Random.New();
     vNow=Var.Create(Date.now());
     getOrElse=function(x)
     {
      var _,x1;
      if(x.$==0)
       {
        _="<..>";
       }
      else
       {
        x1=x.$0;
        _=Global.String(x1);
       }
      return _;
     };
     arg00=Concurrency.Delay(function()
     {
      return Concurrency.While(function()
      {
       return true;
      },Concurrency.Delay(function()
      {
       var n;
       n=rnd.Next2(20,39);
       Var1.Set(rvInput,{
        $:1,
        $0:n
       });
       return Concurrency.Bind(AjaxRemotingProvider.Async("WebSharperWithSuaveTest:0",[n]),function(_arg1)
       {
        Var1.Set(vFibResult,{
         $:1,
         $0:_arg1
        });
        Var1.Set(vNow,Date.now());
        return Concurrency.Bind(Concurrency.Sleep(1000),function()
        {
         return Concurrency.Return(null);
        });
       });
      }));
     });
     Concurrency.Start(arg00,{
      $:0
     });
     arg10=rvInput.get_View();
     arg201=List.ofArray([Doc.TextNode("N = "),Doc.TextView(View.Map(getOrElse,arg10))]);
     arg202=Runtime.New(T,{
      $:0
     });
     arg101=vFibResult.get_View();
     arg203=List.ofArray([Doc.TextNode("Fib = "),Doc.TextView(View.Map(getOrElse,arg101))]);
     arg001=function(value)
     {
      return Global.String(value);
     };
     arg102=vNow.get_View();
     arg20=List.ofArray([Doc.Element("h1",[],arg201),Doc.Element("hr",[],arg202),Doc.Element("h3",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextNode("The server responded:")])),Doc.Element("div",List.ofArray([AttrProxy.Create("class","jumbotron")]),List.ofArray([Doc.Element("h1",[],arg203)])),Doc.Element("h4",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextView(View.Map(arg001,arg102))]))]);
     return Doc.Element("div",[],arg20);
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Var=Runtime.Safe(Next.Var);
  Random=Runtime.Safe(Global.WebSharper.Random);
  Date=Runtime.Safe(Global.Date);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Var1=Runtime.Safe(Next.Var1);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  List=Runtime.Safe(Global.WebSharper.List);
  Doc=Runtime.Safe(Next.Doc);
  View=Runtime.Safe(Next.View);
  T=Runtime.Safe(List.T);
  return AttrProxy=Runtime.Safe(Next.AttrProxy);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());

//# sourceMappingURL=WebSharperWithSuaveTest.map