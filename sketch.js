var listSize = 5;
var maxHeight = 45;
var rectWidth;
var rectHeightScale;
var list = new Array(listSize);
list = list.fill(0);
list = list.map(x => Math.floor(Math.random()*maxHeight)+1);
var sortedList = list.slice();
sortedList.sort(greaterThan);

function setup(){
	createCanvas(windowWidth*199/200, windowHeight*195/200);
	rectWidth = width/listSize;
	rectHeightScale = height/maxHeight;
	frameRate(10);
}

function draw(){
	clear();
	for(var i = 0; i < listSize; i++){
		if(list[i] == sortedList[i])
			fill(0,255,0);
		else
			fill(255,255,255);
		rect(i*rectWidth, height - list[i]*rectHeightScale, rectWidth, list[i]*rectHeightScale);
	}
	if(!checkSame(list,sortedList))
	list = shuffle(list);
}

function greaterThan(x,y){
	return x-y;
}
function checkSorted(x,y){
	if(x > y)
		return true;
	return false;
}
function checkSame(original,sorted){
	for(var i = 0; i < listSize; i++){
		if(original[i] != sorted[i])
			return false;
	}
	return true;
}