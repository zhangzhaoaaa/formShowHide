(function(root,factory){
    root.FormShowHide = factory({});
}(this,function(FormShowHide){
    var model={};
    FormShowHide.toggleEle=function(){//元素显示
        var ruleShow=[];
        var ruleAllHide=[];
        for (var k=0,len=model.rules.length;k<len;k++){
            if (!model.rules[k]["show"]){
                ruleAllHide=ruleAllHide.concat(model.rules[k]["elements"]);//need hide elemnets
            }else{
                ruleShow=ruleShow.concat(model.rules[k]["elements"]);//need show elements
            }
        }
        for (var i=0,lenx=ruleAllHide.length;i<lenx;i++){
            if (ruleAllHide[i]["id"]){
                $('#'+ruleAllHide[i]["id"]).removeClass("submitRule").parent().addClass("hideRule");//hide others
            }else if(ruleAllHide[i]["name"]){
                $("input[name="+ruleAllHide[i]["name"]+"]").each(function () {
                    $(this).removeClass("submitRule").parent().addClass("hideRule");//hide others
                });
            }
        }
        ruleShow=ruleShow.concat(model.ruleAll);//concat rule and ruleAll show elements
        for (var i=0,lenx=ruleShow.length;i<lenx;i++){
            if (ruleShow[i]["id"]){
               console.log(ruleShow[i]["id"]);
                $('#'+ruleShow[i]["id"]).addClass("submitRule").parent().removeClass("hideRule");
            }else if (ruleShow[i]["name"]){
                console.log(ruleShow[i]["id"]);
                $("input[name="+ruleShow[i]["name"]+"]").each(function () {
                    $(this).addClass("submitRule").parent().removeClass("hideRule");
                });
            }
        }
        model.ruleShow=ruleShow||[];
    };
    FormShowHide.switchShow=function(key){//页面切换事件
        for (var k=0,len=model.rules.length;k<len;k++){
            if (model.rules[k]["type"]===key){
                model.rules[k]["show"]=true;
                model.rules[k]["className"]="submitRule";
            }else{
                model.rules[k]["show"]=false;
                model.rules[k]["className"]="hideRule";
            }
        }
        return this;
    };
    FormShowHide.showValues=function(){//获取提交表单元素，组成name:value的json对象
        var fields = $(".submitRule").serializeArray();
        var serializeObj={};
        var str=$(".submitRule").serialize();
        $(fields).each(function(){
            if(serializeObj[this.name]){
                if($.isArray(serializeObj[this.name])){
                    serializeObj[this.name].push(this.value);
                }else{
                    serializeObj[this.name]=[serializeObj[this.name],this.value];
                }
            }else{
                serializeObj[this.name]=this.value;
            }
        });
        return serializeObj;
    };
    FormShowHide.combineData= function () {//整合表单其他元素
        var retData = this.showValues()||{};
        for (var i= 0,len=arguments.length;i<len;i++){
            $.extend(retData,arguments[i]);
        }
        return retData;
    }
    FormShowHide.Model = function(options) {//FormShowHide的模型对象
        var ops = options || (options = {});
        model = $.extend({},ops);
        return this;
    };
    return FormShowHide;
}));