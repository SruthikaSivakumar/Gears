gdjs.incorrect2Code = {};
gdjs.incorrect2Code.GDdir1Objects1= [];
gdjs.incorrect2Code.GDdir1Objects2= [];
gdjs.incorrect2Code.GDdir2Objects1= [];
gdjs.incorrect2Code.GDdir2Objects2= [];
gdjs.incorrect2Code.GDBackgroundBlueGrassObjects1= [];
gdjs.incorrect2Code.GDBackgroundBlueGrassObjects2= [];
gdjs.incorrect2Code.GDgear1Objects1= [];
gdjs.incorrect2Code.GDgear1Objects2= [];
gdjs.incorrect2Code.GDNewTextObjects1= [];
gdjs.incorrect2Code.GDNewTextObjects2= [];
gdjs.incorrect2Code.GDnextqObjects1= [];
gdjs.incorrect2Code.GDnextqObjects2= [];
gdjs.incorrect2Code.GDreplayObjects1= [];
gdjs.incorrect2Code.GDreplayObjects2= [];


gdjs.incorrect2Code.mapOfGDgdjs_46incorrect2Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.incorrect2Code.GDreplayObjects1});
gdjs.incorrect2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.incorrect2Code.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.incorrect2Code.mapOfGDgdjs_46incorrect2Code_46GDreplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene2-2", false);
}}

}


};gdjs.incorrect2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.incorrect2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.incorrect2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.incorrect2Code.GDdir1Objects1.length = 0;
gdjs.incorrect2Code.GDdir1Objects2.length = 0;
gdjs.incorrect2Code.GDdir2Objects1.length = 0;
gdjs.incorrect2Code.GDdir2Objects2.length = 0;
gdjs.incorrect2Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.incorrect2Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.incorrect2Code.GDgear1Objects1.length = 0;
gdjs.incorrect2Code.GDgear1Objects2.length = 0;
gdjs.incorrect2Code.GDNewTextObjects1.length = 0;
gdjs.incorrect2Code.GDNewTextObjects2.length = 0;
gdjs.incorrect2Code.GDnextqObjects1.length = 0;
gdjs.incorrect2Code.GDnextqObjects2.length = 0;
gdjs.incorrect2Code.GDreplayObjects1.length = 0;
gdjs.incorrect2Code.GDreplayObjects2.length = 0;

gdjs.incorrect2Code.eventsList1(runtimeScene);

return;

}

gdjs['incorrect2Code'] = gdjs.incorrect2Code;
