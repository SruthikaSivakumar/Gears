gdjs.correct1Code = {};
gdjs.correct1Code.GDdir1Objects1= [];
gdjs.correct1Code.GDdir1Objects2= [];
gdjs.correct1Code.GDdir2Objects1= [];
gdjs.correct1Code.GDdir2Objects2= [];
gdjs.correct1Code.GDBackgroundBlueGrassObjects1= [];
gdjs.correct1Code.GDBackgroundBlueGrassObjects2= [];
gdjs.correct1Code.GDgear1Objects1= [];
gdjs.correct1Code.GDgear1Objects2= [];
gdjs.correct1Code.GDcorrectObjects1= [];
gdjs.correct1Code.GDcorrectObjects2= [];
gdjs.correct1Code.GDOnScreenControlsButtonObjects1= [];
gdjs.correct1Code.GDOnScreenControlsButtonObjects2= [];


gdjs.correct1Code.mapOfGDgdjs_46correct1Code_46GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.correct1Code.GDOnScreenControlsButtonObjects1});
gdjs.correct1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.correct1Code.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.correct1Code.mapOfGDgdjs_46correct1Code_46GDOnScreenControlsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "scene2-1", false);
}}

}


};gdjs.correct1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.correct1Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.correct1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.correct1Code.GDdir1Objects1.length = 0;
gdjs.correct1Code.GDdir1Objects2.length = 0;
gdjs.correct1Code.GDdir2Objects1.length = 0;
gdjs.correct1Code.GDdir2Objects2.length = 0;
gdjs.correct1Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.correct1Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.correct1Code.GDgear1Objects1.length = 0;
gdjs.correct1Code.GDgear1Objects2.length = 0;
gdjs.correct1Code.GDcorrectObjects1.length = 0;
gdjs.correct1Code.GDcorrectObjects2.length = 0;
gdjs.correct1Code.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.correct1Code.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.correct1Code.eventsList1(runtimeScene);

return;

}

gdjs['correct1Code'] = gdjs.correct1Code;
