(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.HighLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003345").s().p("AiQLuIAA3bIEgAAIAAXbg");
	this.shape.setTransform(14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HighLight, new cjs.Rectangle(0,-75,28.9,150), null);


// stage content:
(lib.LightSpectrum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var line = new createjs.Shape();
		var highlight = new lib.HighLight();
		stage.addChild(highlight);
		stage.addChild(line);
		
		line.graphics.setStrokeStyle(1).beginStroke("rgba(255,255,255,1)");
		line.graphics.moveTo(-1,offset);
		var x = 0;
		var change = 0.0;
		var offset = 200;
		var divide = 28.9;
		var text = new createjs.Text("Type", "20px Arial", "#ffffff");
		text.x = 250;
		text.y = 80;
		stage.addChild(text);
		
		highlight.y = offset;
		
		var textS = new createjs.Text("Size", "15px Arial", "#ffffff");
		textS.x = 250;
		textS.y = 100;
		stage.addChild(textS);
		
		createjs.Ticker.addEventListener("tick", handleTick);
		createjs.Ticker.setFPS(60);
		
		function handleTick(event) {
		    if (!event.paused) {
				change += .1;
				line.graphics.clear();
				line.graphics.setStrokeStyle(1).beginStroke("rgba(255,255,255,1)");
				line.graphics.moveTo(-1,offset);
		        for(x = 0; x < 550; x++){
					line.graphics.lineTo(x,(Math.sin(Math.exp(x/100) + change) * 50 + offset));
				}
				stage.update();
		    }
		}
		stage.mouseMoveOutside = false;
		stage.on("stagemousemove", function(evt) {
			if(evt.rawX < divide){
				text.text = "ELF Radio";
				textS.text = "3Hz to 30hz";
				highlight.x = 0;
			}
			else if(evt.rawX < divide * 2){
				text.text = "SLF Radio";
				textS.text = "30Hz to 300Hz";
				highlight.x = divide;
			}
			else if(evt.rawX < divide * 3){
				text.text = "ULF Radio";
				textS.text = "300Hz to 3kHz";
				highlight.x = divide * 2;
			}
			else if(evt.rawX < divide * 4){
				text.text = "VLF Radio";
				textS.text = "3kHz to 30kHz";
				highlight.x = divide * 3;
			}
			else if(evt.rawX < divide * 5){
				text.text = "LF Radio";
				textS.text = "30kHz to 300kHz";
				highlight.x = divide * 4;
			}
			else if(evt.rawX < divide * 6){
				text.text = "MF Radio";
				textS.text = "300kHz to 3MHz";
				highlight.x = divide * 5;
			}
			else if(evt.rawX < divide * 7){
				text.text = "HF Radio";
				textS.text = "3MHz to 30MHz";
				highlight.x = divide * 6;
			}
			else if(evt.rawX < divide * 8){
				text.text = "VHF Radio";
				textS.text = "30MHz to 300MHz";
				highlight.x = divide * 7;
			}
			else if(evt.rawX < divide * 9){
				text.text = "UHF Microwave";
				textS.text = "300MHz to 3GHz";
				highlight.x = divide * 8;
			}
			else if(evt.rawX < divide * 10){
				text.text = "SHF Microwave";
				textS.text = "3GHz to 30GHz";
				highlight.x = divide * 9;
			}
			else if(evt.rawX < divide * 11){
				text.text = "EHF Microwave";
				textS.text = "30GHz to 300GHz";
				highlight.x = divide * 10;
			}
			else if(evt.rawX < divide * 12){
				text.text = "Far Infared";
				textS.text = "300GHz to 3THz";
				highlight.x = divide * 11;
			}
			else if(evt.rawX < divide * 13){
				text.text = "Mid Infared";
				textS.text = "3THz to 30THz";
				highlight.x = divide * 12;
			}
			else if(evt.rawX < divide * 14){
				text.text = "Near Infared";
				textS.text = "30THz to 300THz";
				highlight.x = divide * 13;
			}
			else if(evt.rawX < divide * 15){
				text.text = "Near Ultraviolet";
				textS.text = "300THz to 3PHz";
				highlight.x = divide * 14;
			}
			else if(evt.rawX < divide * 16){
				text.text = "Extreme Ultrviolet";
				textS.text = "3PHz to 30PHz";
				highlight.x = divide * 15;
			}
			else if(evt.rawX < divide * 17){
				text.text = "Soft X-ray";
				textS.text = "30PHz to 300PHz";
				highlight.x = divide * 16;
			}
			else if(evt.rawX < divide * 18){
				text.text = "Hard X-ray";
				textS.text = "300PHz to 3EHz";
				highlight.x = divide * 17;
			}
			else if(evt.rawX < divide * 19){
				text.text = "Gama Ray";
				textS.text = "3EHz to 30EHz";
				highlight.x = divide * 18;
			}
			var b = text.getBounds();
			text.x = (550/2 - b.width/2); 
			
			var b2 = textS.getBounds();
			textS.x = (550/2 - b2.width/2); 
		});
		
		// 0 -> 550
		// 10^6 -> 10^19
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABkkrIAABkIMgHzAAAkrIAABkIuDHz");
	this.shape.setTransform(400.6,303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#222222","#FF0000","#FFFF00","#00FF00","#00FFFF","#FF00FF","#222222"],[0.384,0.443,0.51,0.537,0.576,0.635,0.702],-294.9,0,251.6,0).s().p("AwFDIIAAmPMAgLAAAIAAGPg");
	this.shape_1.setTransform(400.1,353);

	this.text = new cjs.Text("", "20px 'SinkinSans-200XLight'", "#454545");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(849,89.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egq9gfPMBV7AAAMAAAA+fMhV7AAAg");
	this.shape_2.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,199,902,402);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#222222",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;