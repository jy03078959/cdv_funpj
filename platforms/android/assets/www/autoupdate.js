/**
 * Created by stoneship on 15/12/13.
 * email:258137678@qq.com
 */
(function () {

    var Updata = function () {
        // Check for Cordova

        var fs = new CordovaPromiseFS({persistent: typeof cordova !== 'undefined'});
        var loader = null;

        function loadIndexHtml() {
            window.pegasus(Manifest.root + '_index.html').then(function (template) {
                $('body').html(template);
                require(['components/page/app']);
            }, function (xhr) {
                console.error('Could not download ' + url + ': ' + xhr.status);
            })
        }

        return {
            updateAvailable: false,
            init: function () {

                loadIndexHtml()
            },
            setConfig:function (server){

                var dataOrg = {
                    fs: fs,
                    localRoot: 'app',
                    serverRoot: server,
                    mode: 'mirror',
                    cacheBuster: true
                }
                loader = window.loader = new CordovaAppLoader(dataOrg);
            },
            check: function (success, error) {
                var me = this;
                if(!loader){
                    console.log("必须初始化 updata的 loader");
                    return
                }
                loader.check().then(function (updateAvailable) {
                    me.updateAvailable = updateAvailable;
                    success(updateAvailable);
                }, error);
            },
            download: function (onProgress,success, error) {
                if(!loader){
                    console.log("必须初始化 updata的 loader");
                    return
                }
                loader.download(onProgress).then(success, error);
            },
            update: function () {
                if(!loader){
                    console.log("必须初始化 updata的 loader");
                    return
                }
                loader.update();
            }
        }

    }

    var updataMg = window.UpdateMg = new Updata();
    updataMg.init();

    window.BOOTSTRAP_OK = true;

   /* Wechat.isInstalled(function (installed) {
        console.log("Wechat installed: " + (installed ? "Yes" : "No"));
    }, function (reason) {
        console.log("Failed: " + reason);
    });*/
  /*  var scope = "snsapi_userinfo";
    console.log("微信验证");*/

   /* Wechat.auth(scope, function (response) {
        // you may use response.code to get the access token.
        console.log(JSON.stringify(response));
    }, function (reason) {
        console.log("Failed: " + reason);
    });
*/
/*
    Wechat.share({
        text: "This is just a plain string",
        scene: Wechat.Scene.TIMELINE   // share to Timeline
    }, function () {
        console.log("Success");
    }, function (reason) {
        console.log("Failed: " + reason);
    });*/

})();