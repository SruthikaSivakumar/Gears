gdjs.scene1_451Code = {};
gdjs.scene1_451Code.GDdir1Objects1= [];
gdjs.scene1_451Code.GDdir1Objects2= [];
gdjs.scene1_451Code.GDdir2Objects1= [];
gdjs.scene1_451Code.GDdir2Objects2= [];
gdjs.scene1_451Code.GDBackgroundBlueGrassObjects1= [];
gdjs.scene1_451Code.GDBackgroundBlueGrassObjects2= [];
gdjs.scene1_451Code.GDgear1Objects1= [];
gdjs.scene1_451Code.GDgear1Objects2= [];
gdjs.scene1_451Code.GDLEVELObjects1= [];
gdjs.scene1_451Code.GDLEVELObjects2= [];


gdjs.scene1_451Code.mapOfGDgdjs_46scene1_95451Code_46GDdir2Objects1Objects = Hashtable.newFrom({"dir2": gdjs.scene1_451Code.GDdir2Objects1});
gdjs.scene1_451Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dir2"), gdjs.scene1_451Code.GDdir2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene1_451Code.mapOfGDgdjs_46scene1_95451Code_46GDdir2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "correct1", false);
}}

}


};gdjs.scene1_451Code.mapOfGDgdjs_46scene1_95451Code_46GDdir1Objects1Objects = Hashtable.newFrom({"dir1": gdjs.scene1_451Code.GDdir1Objects1});
gdjs.scene1_451Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dir1"), gdjs.scene1_451Code.GDdir1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.scene1_451Code.mapOfGDgdjs_46scene1_95451Code_46GDdir1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "incorrect1", false);
}}

}


};gdjs.scene1_451Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.scene1_451Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.scene1_451Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.scene1_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene1_451Code.GDdir1Objects1.length = 0;
gdjs.scene1_451Code.GDdir1Objects2.length = 0;
gdjs.scene1_451Code.GDdir2Objects1.length = 0;
gdjs.scene1_451Code.GDdir2Objects2.length = 0;
gdjs.scene1_451Code.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.scene1_451Code.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.scene1_451Code.GDgear1Objects1.length = 0;
gdjs.scene1_451Code.GDgear1Objects2.length = 0;
gdjs.scene1_451Code.GDLEVELObjects1.length = 0;
gdjs.scene1_451Code.GDLEVELObjects2.length = 0;

gdjs.scene1_451Code.eventsList2(runtimeScene);

return;

}

gdjs['scene1_451Code'] = gdjs.scene1_451Code;
