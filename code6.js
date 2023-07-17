gdjs.scene2_452Code = {};
gdjs.scene2_452Code.GDdir1Objects1= [];
gdjs.scene2_452Code.GDdir1Objects2= [];
gdjs.scene2_452Code.GDdir2Objects1= [];
gdjs.scene2_452Code.GDdir2Objects2= [];
gdjs.scene2_452Code.GDBackgroundBlueGrassObjects1= [];
gdjs.scene2_452Code.GDBackgroundBlueGrassObjects2= [];
gdjs.scene2_452Code.GDgear1Objects1= [];
gdjs.scene2_452Code.GDgear1Objects2= [];
gdjs.scene2_452Code.GDgear1_952Objects1= [];
gdjs.scene2_452Code.GDgear1_952Objects2= [];
gdjs.scene2_452Code.GDgear2Objects1= [];
gdjs.scene2_452Code.GDgear2Objects2= [];
gdjs.scene2_452Code.GDNewTextObjects1= [];
gdjs.scene2_452Code.GDNewTextObjects2= [];
gdjs.scene2_452Code.GDNewSpriteObjects1= [];
gdjs.scene2_452Code.GDNewSpriteObjects2= [];


gdjs.scene2_452Code.mapOfGDgdjs_46scene2_95452Code_46GDdir2Objects1Objects = Hashtable.newFrom({"dir2": gdjs.scene2_452Code.GDdir2Objects1});
gdjs.scene2_452Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dir2"), gdjs.scene2_452Code.GDdir2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene2_452Code.mapOfGDgdjs_46scene2_95452Code_46GDdir2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "correct2", false);
}}

}


};gdjs.scene2_452Code.mapOfGDgdjs_46scene2_95452Code_46GDdir1Objects1Objects = Hashtable.newFrom({"dir1": gdjs.scene2_452Code.GDdir1Objects1});
gdjs.scene2_452Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dir1"), gdjs.scene2_452Code.GDdir1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene2_452Code.mapOfGDgdjs_46scene2_95452Code_46GDdir1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "incorrect2", false);
}}

}


};gdjs.scene2_452Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.scene2_452Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.scene2_452Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.scene2_452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene2_452Code.GDdir1Objects1.length = 0;
gdjs.scene2_452Code.GDdir1Objects2.length = 0;
gdjs.scene2_452Code.GDdir2Objects1.length = 0;
gdjs.scene2_452Code.GDdir2Objects2.length = 0;
gdjs.scene2_452Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.scene2_452Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.scene2_452Code.GDgear1Objects1.length = 0;
gdjs.scene2_452Code.GDgear1Objects2.length = 0;
gdjs.scene2_452Code.GDgear1_952Objects1.length = 0;
gdjs.scene2_452Code.GDgear1_952Objects2.length = 0;
gdjs.scene2_452Code.GDgear2Objects1.length = 0;
gdjs.scene2_452Code.GDgear2Objects2.length = 0;
gdjs.scene2_452Code.GDNewTextObjects1.length = 0;
gdjs.scene2_452Code.GDNewTextObjects2.length = 0;
gdjs.scene2_452Code.GDNewSpriteObjects1.length = 0;
gdjs.scene2_452Code.GDNewSpriteObjects2.length = 0;

gdjs.scene2_452Code.eventsList2(runtimeScene);

return;

}

gdjs['scene2_452Code'] = gdjs.scene2_452Code;
