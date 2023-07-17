gdjs.correct2Code = {};
gdjs.correct2Code.GDdir1Objects1= [];
gdjs.correct2Code.GDdir1Objects2= [];
gdjs.correct2Code.GDdir2Objects1= [];
gdjs.correct2Code.GDdir2Objects2= [];
gdjs.correct2Code.GDBackgroundBlueGrassObjects1= [];
gdjs.correct2Code.GDBackgroundBlueGrassObjects2= [];
gdjs.correct2Code.GDgear1Objects1= [];
gdjs.correct2Code.GDgear1Objects2= [];
gdjs.correct2Code.GDcorrectObjects1= [];
gdjs.correct2Code.GDcorrectObjects2= [];
gdjs.correct2Code.GDOnScreenControlsButtonObjects1= [];
gdjs.correct2Code.GDOnScreenControlsButtonObjects2= [];


gdjs.correct2Code.mapOfGDgdjs_46correct2Code_46GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.correct2Code.GDOnScreenControlsButtonObjects1});
gdjs.correct2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.correct2Code.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.correct2Code.mapOfGDgdjs_46correct2Code_46GDOnScreenControlsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene3-1", false);
}}

}


};gdjs.correct2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.correct2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.correct2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.correct2Code.GDdir1Objects1.length = 0;
gdjs.correct2Code.GDdir1Objects2.length = 0;
gdjs.correct2Code.GDdir2Objects1.length = 0;
gdjs.correct2Code.GDdir2Objects2.length = 0;
gdjs.correct2Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.correct2Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.correct2Code.GDgear1Objects1.length = 0;
gdjs.correct2Code.GDgear1Objects2.length = 0;
gdjs.correct2Code.GDcorrectObjects1.length = 0;
gdjs.correct2Code.GDcorrectObjects2.length = 0;
gdjs.correct2Code.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.correct2Code.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.correct2Code.eventsList1(runtimeScene);

return;

}

gdjs['correct2Code'] = gdjs.correct2Code;
