gdjs.incorrect1Code = {};
gdjs.incorrect1Code.GDdir1Objects1= [];
gdjs.incorrect1Code.GDdir1Objects2= [];
gdjs.incorrect1Code.GDdir2Objects1= [];
gdjs.incorrect1Code.GDdir2Objects2= [];
gdjs.incorrect1Code.GDBackgroundBlueGrassObjects1= [];
gdjs.incorrect1Code.GDBackgroundBlueGrassObjects2= [];
gdjs.incorrect1Code.GDgear1Objects1= [];
gdjs.incorrect1Code.GDgear1Objects2= [];
gdjs.incorrect1Code.GDNewTextObjects1= [];
gdjs.incorrect1Code.GDNewTextObjects2= [];
gdjs.incorrect1Code.GDnextqObjects1= [];
gdjs.incorrect1Code.GDnextqObjects2= [];
gdjs.incorrect1Code.GDreplayObjects1= [];
gdjs.incorrect1Code.GDreplayObjects2= [];


gdjs.incorrect1Code.mapOfGDgdjs_46incorrect1Code_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.incorrect1Code.GDreplayObjects1});
gdjs.incorrect1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.incorrect1Code.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.incorrect1Code.mapOfGDgdjs_46incorrect1Code_46GDreplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene1-2", false);
}}

}


};gdjs.incorrect1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.incorrect1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.incorrect1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.incorrect1Code.GDdir1Objects1.length = 0;
gdjs.incorrect1Code.GDdir1Objects2.length = 0;
gdjs.incorrect1Code.GDdir2Objects1.length = 0;
gdjs.incorrect1Code.GDdir2Objects2.length = 0;
gdjs.incorrect1Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.incorrect1Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.incorrect1Code.GDgear1Objects1.length = 0;
gdjs.incorrect1Code.GDgear1Objects2.length = 0;
gdjs.incorrect1Code.GDNewTextObjects1.length = 0;
gdjs.incorrect1Code.GDNewTextObjects2.length = 0;
gdjs.incorrect1Code.GDnextqObjects1.length = 0;
gdjs.incorrect1Code.GDnextqObjects2.length = 0;
gdjs.incorrect1Code.GDreplayObjects1.length = 0;
gdjs.incorrect1Code.GDreplayObjects2.length = 0;

gdjs.incorrect1Code.eventsList1(runtimeScene);

return;

}

gdjs['incorrect1Code'] = gdjs.incorrect1Code;
