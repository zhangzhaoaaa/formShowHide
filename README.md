#FormShowHide

##背景
在页面开发的过程中，我们经常会遇到根据不同参数或者状态，页面中的表单元素做出隐藏/显示的切换效果，最后提交这些显示出来的表单元素值，隐藏的元素不提交的效果。

##思路
给切换显示的元素制定规则，有必显和切换显示表单元素两种规则，将表单的元素注册到规则中去，显示和隐藏时对元素标记，提交表单时，获取标记为提交状态的元素的值进行提交。

##设计
我们约定每个表单元素外面都有一个父级元素作为容器，该容器默认样式为hideRule，即隐藏状态(display:none;)；元素显示时，将这个容器的样式remove掉，给该表单元素增加一个submitRule的样式作为标记，表单提交时根据此标记，抓取页面元素。

##用法
###属性
* ruleAll:注册必显的表单元素
* rules:注册不同规则下显示的元素
* ruleAll的内容和rules里定义的elements是一样的内容
* rules->type：切换的规则类型
* rules->show:是否显示,true/false
* rules->className:submitRule表示显示和提交,hideRule表示隐藏
* rules->elements:当前规则下需要显示/隐藏的表单元素  

----------
###方法
* switchShow(switchType)：点击切换按钮时触发切换操作
* toggleEle()：元素显示
* showValues()：返回提交元素name:value的json对象
* combineData()：不传参数的话，即是当前注册的已显示的元素的name:value的json对象；传入json对象的话，即将当前显示的元素json值和传入的json对象整合，最后返回整合后的json对象
* Model：传入注册显示的rule对象

---------
`FormShowHide.Model({ruleAll: [
            {id: elementId}
        ], rules: [
            {type: switchType, show: booleean, className: "submitRule", elements: [
                {id: elementId},{name:elementName}
            ]}
        ]}).toggleEle();`

----------
##感谢
感谢您能够驻足我的拙劣代码，这个只是一个想法。
