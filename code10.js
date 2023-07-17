gdjs.LevelsCode = {};
gdjs.LevelsCode.GDdir1Objects1= [];
gdjs.LevelsCode.GDdir1Objects2= [];
gdjs.LevelsCode.GDdir2Objects1= [];
gdjs.LevelsCode.GDdir2Objects2= [];
gdjs.LevelsCode.GDBackgroundBlueGrassObjects1= [];
gdjs.LevelsCode.GDBackgroundBlueGrassObjects2= [];
gdjs.LevelsCode.GDNewTextObjects1= [];
gdjs.LevelsCode.GDNewTextObjects2= [];
gdjs.LevelsCode.GDNewText2Objects1= [];
gdjs.LevelsCode.GDNewText2Objects2= [];
gdjs.LevelsCode.GDLevel1Objects1= [];
gdjs.LevelsCode.GDLevel1Objects2= [];
gdjs.LevelsCode.GDGEARObjects1= [];
gdjs.LevelsCode.GDGEARObjects2= [];
gdjs.LevelsCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.LevelsCode.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.LevelsCode.mapOfGDgdjs_46LevelsCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.LevelsCode.GDLevel1Objects1});
gdjs.LevelsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.LevelsCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LevelsCode.mapOfGDgdjs_46LevelsCode_46GDLevel1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene1-1", false);
}}

}


};gdjs.LevelsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.LevelsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LevelsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelsCode.GDdir1Objects1.length = 0;
gdjs.LevelsCode.GDdir1Objects2.length = 0;
gdjs.LevelsCode.GDdir2Objects1.length = 0;
gdjs.LevelsCode.GDdir2Objects2.length = 0;
gdjs.LevelsCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.LevelsCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.LevelsCode.GDNewTextObjects1.length = 0;
gdjs.LevelsCode.GDNewTextObjects2.length = 0;
gdjs.LevelsCode.GDNewText2Objects1.length = 0;
gdjs.LevelsCode.GDNewText2Objects2.length = 0;
gdjs.LevelsCode.GDLevel1Objects1.length = 0;
gdjs.LevelsCode.GDLevel1Objects2.length = 0;
gdjs.LevelsCode.GDGEARObjects1.length = 0;
gdjs.LevelsCode.GDGEARObjects2.length = 0;
gdjs.LevelsCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.LevelsCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.LevelsCode.eventsList1(runtimeScene);

return;

}

gdjs['LevelsCode'] = gdjs.LevelsCode;
