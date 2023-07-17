gdjs.IntroCode = {};
gdjs.IntroCode.GDdir1Objects1= [];
gdjs.IntroCode.GDdir1Objects2= [];
gdjs.IntroCode.GDdir2Objects1= [];
gdjs.IntroCode.GDdir2Objects2= [];
gdjs.IntroCode.GDBackgroundBlueGrassObjects1= [];
gdjs.IntroCode.GDBackgroundBlueGrassObjects2= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDNewText2Objects1= [];
gdjs.IntroCode.GDNewText2Objects2= [];
gdjs.IntroCode.GDStartButtonObjects1= [];
gdjs.IntroCode.GDStartButtonObjects2= [];
gdjs.IntroCode.GDGEARObjects1= [];
gdjs.IntroCode.GDGEARObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.IntroCode.GDStartButtonObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.IntroCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene1-1", false);
}}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDdir1Objects1.length = 0;
gdjs.IntroCode.GDdir1Objects2.length = 0;
gdjs.IntroCode.GDdir2Objects1.length = 0;
gdjs.IntroCode.GDdir2Objects2.length = 0;
gdjs.IntroCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.IntroCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewText2Objects1.length = 0;
gdjs.IntroCode.GDNewText2Objects2.length = 0;
gdjs.IntroCode.GDStartButtonObjects1.length = 0;
gdjs.IntroCode.GDStartButtonObjects2.length = 0;
gdjs.IntroCode.GDGEARObjects1.length = 0;
gdjs.IntroCode.GDGEARObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
