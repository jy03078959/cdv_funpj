define("components/common/BasePage",function(i,t,e){e.exports={props:["params"],replace:!0,vue:null,data:function(){return{Config:Config}},bindEvent:function(i,t){this.ema.bind(this.className+"."+i,t)},created:function(){Util.log("页面page----",this.$options.className,"created"),this.$options.vue=this,this.$options.ema=EMA.getProxy(),this.ema=this.$options.ema,this.$options.initEvent()},beforeCompile:function(){Util.log("页面page----",this.$options.className,"beforeCompile")},compile:function(){Util.log("页面page----",this.$options.className,"compile")},ready:function(){Util.log("页面page----",this.$options.className,"ready");var i=this;i.Jdom||(i.Jdom={}),$(i.$el).find("[Jid]").each(function(){var t=$(this),e=t.attr("Jid");i.Jdom[e]=t})},attached:function(){var i=this;this.$options.initPageTitle(),EMA.fire(i.$options.needMainMenu?"mainMenu.show":"mainMenu.hide")},detached:function(){Util.log("页面page----",this.$options.className,"detached"),EMA.fire("load.hide")},beforDestroy:function(){Util.log("页面page----",this.$options.className,"beforDestroy")},destroyed:function(){Util.log("页面page----",this.$options.className,"destroyed"),this.$options.ema&&this.$options.ema.dispose()},initEvent:function(){},initPageTitle:function(){document.title=this.pageName}}});