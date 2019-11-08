/**
 * Created by Designer on 2018/2/5.
 */
$(function () {
    //jQuery请求公共方法
    function sendRequest(url, method, data, callback, contentType, async) {
        var options = {
            url:  url,
            type: method,
            dataType:'json',
            data: data,
            success: function (result) {
                try{
                    result.message=JSON.parse(result.message);
                }catch(e){

                }
                if(result.code=='430000'){

                }else{
                   /* alert(result.message);*/
                }
                callback&&callback(result);
            },
            timeout: 20000,
            error: function (xhr, textStatus) {

            }
        };
        if (typeof async != 'undefined') {
            options.async = async;
        }
        if ((method.toUpperCase() == 'PUT' || method.toUpperCase() == 'POST') && contentType == "json") {
            options.data = JSON.stringify(data);
            options.dataType = 'json';
            options.contentType = 'application/json';
        } else {
            options.data = data;
        }
        $.ajax(options);
    }

    /*数据接口定义*/
    var basicUrl='http://dxyadm.shopreplus.com/';
    window.api={
        //添加联系记录
        addContact:function (data,callback) {
            sendRequest(basicUrl+'/unl/off/adem','POST',data,function (resp) {
                callback&&callback(resp);
            });
        },
        
    }
})