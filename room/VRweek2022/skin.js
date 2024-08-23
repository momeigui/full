// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: sky01.ggsk
// Generated 2022-03-18T10:55:32

function pano2vrSkin(player,base) {
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__11=document.createElement('div');
		el.ggMarkerNodeId='{node9}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u5317\u6b27\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 59px;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__11.onclick=function (e) {
			player.openNext('{node9}');
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__11);
		el=me.__10=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u8f7b\u5962\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 108px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__10.onclick=function (e) {
			player.openNext('{node21}');
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__10);
		el=me.__9=document.createElement('div');
		el.ggMarkerNodeId='{node27}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u65b0\u4e2d\u5f0f\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 157px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__9.onclick=function (e) {
			player.openNext('{node27}');
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__9);
		el=me.__8=document.createElement('div');
		el.ggMarkerNodeId='{node54}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u73b0\u4ee3\u65f6\u5c1a\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 205px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__8.onclick=function (e) {
			player.openNext('{node54}');
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		el.ggMarkerNodeId='{node62}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u73b0\u4ee3\u7b80\u7ea6\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 253px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__7.onclick=function (e) {
			player.openNext('{node62}');
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__7);
		el=me.__6=document.createElement('div');
		el.ggMarkerNodeId='{node82}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u7b80\u7f8e\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 303px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__6.onclick=function (e) {
			player.openNext('{node82}');
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggMarkerNodeId='{node93}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="\u65e5\u5f0f\u6309\u94ae";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='bottom : 354px;';
		hs+='height : 0px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__5.onclick=function (e) {
			player.openNext('{node93}');
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__5);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_enter_vr';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAfpUlEQVR4nO2deXBU173nv7cXdUugtQUSEhJawOwkQAAHzGKPvAzjBWwzNW+ceiaBJIbYVTh24odjpwY8ybxH/CZlE8fzosIxgXH5maSInTE2GKMFSQiBACEhQI02hJCQ6JZaavWivsv74zZjAi3d293n3NsS51P1K+mP2/f8zjm/3z377wAMBoPBYDAYDAaDoR2c3grcA0wCkA8gO/h/elBsAJIAWADE3fYXAIYB+G/7OwDAAeBmUHoBdAJoDf7PoARzEDKYAcwEsCAocwAUAMgDMIFy2kMA2gC0AGgEcD4olwDwlNMe9zAHiYypAB4AsALAcgDz8M3XP1YYBtAAoApARVA6ddWIMW5JAbABwAcA2gFIY1TaAOwJ5iWFZAEx7j2mAfgnAMchd1X0Nm'+
			'7SEgjm7Z+CeWUwFEkCsAlAKQAR+huxViIG8/yDYBkwGP8fE4C1AD4G4IH+xqq3eIJlsTZYNox7lHkAfgugG/obZaxKd7CM5kVYxowxyFIAn+He6kJFKyKAT4NlxxinrAbwFfQ3trEuR4JlyRgn/GfIawB6G9Z4k+MAHgujHhgxxlMATkN/QxrvcjpY1owxwiwAX0N/w7nX5Giw7BkxSgKA/wV5c5/exnKvih/Ar4N1wYgh1kHeRqG3gTCRpS1YJwydKQDwOfQ3CCah5f9B3urP0BgjgF8A8EJ/I2AyuniDdWUMWZMM4mRB3jekd8UzCU9KAUy5qzYZRHkEQA/0r2wmkcmNYB0yCGOEPDvCtoeMfREB/Aqsy0WMbADl0L9imZCVMsjdZUYUPAY5KIHelcmEjvQAeBSMiHgFrEt1L4gI4KdgqIYD8BvoX3FMtJVdYEFE'+
			'FDEB2Av9K4uJPvIhYuwUYyx5bAKAA5CPeo4bcnJybixfvrwzPj5eIPne4eFhrqmpKeXs2bP5giCMpxmhzwH8V8hHfxlB0gCcgP5fMGLCcZx45MiRUkmSRIkiPp/vysyZM8dyKKJQUhW0CQaAHMgRAfWuFKLy+9//vpSmY9xOa2vruPq4BOUC5AB9uqJ3FysX8mm/HJ31II7f72+Li4vL0yItnuevmc1m3Y2JAh2QI1he1UsBg14JQw7gfATj0DkAwGg0WrVKi+O4mBrYEiQHwGHIgb51QS8HmQB5MDZTp/QZY4dZAA6BfhDwkOjhIGYAfwELIcNQz1IAf4ZsO5qitYNwAP4Itr2AET6PQQ4erum4WWsH+VcAz2mcJmP88D0Ab2uZoJYO8hqAlzVMjzE++SmAn2uVmFYOsg7AP2uUFmP88y/QKCiEFg6SB3ncwWCQ5A'+
			'PItkUV2g5iBvDvYLcZMciTCtm2qM5s0XaQXWDTuQx6LIXc3aIGTQd5CsA2iu9nMAB54udJWi+n5SDTwMYdDO34EJTuWaThILfGHakU3s1ghCIV8rVxxMcjNBzkfwJYRuG9DMZo3A/gLdIvJe0g88EO4DP04xUQvk+RpINwAH6PGDtTzLinMEG2QWKQdJDnIR9uYTD0ZCVkWyQCKQdJhbzmwWDEArtAaHGalIP8CsAkQu9iMKJlMmSbjBoSDvIdAD8m8B4GgyQvAFgc7UuiHVAbALwPfc+2xyRLliwZslgsTVqk5ff7x1NcLFLcss37IYc31YVN0D88DBMmo8kPEAXRHF80AmiCfE8ggxGrNEMODhJRZMtoulj/HTHmHJmZmY758+d3LV682JWdnc2npKRIycnJSExM5BITEw0TJkwwJiQkmOLi4kwGg0HvmGBjClEU'+
			'peHhYd7j8fBDQ0PC4OCgODg4KLlcLvT393OdnZ2m2tralPPnz2feuHFDtzA9ISgE8A8A9kfy40iNhIMc+W52hL+PGpvN1vfkk09e2bBhg+f+++9PS0lJyeM4LlEvfRjfIEnSYH9/f1t1dbXzwIEDCZ999tl0h8Oh5968Rsgr7JJWCT4LHfqTNpvNuWvXrvK+vr7zEuWYtwyiiH19fed37dpVbrPZnHrYDoBnCNm+Ks5SykRIWblyZWNLS0u1JEnDetc0I2r8LS0t1StWrLiopQ0BqCVo/6PyXzTKkDR//vwWu91+QmKtxXhEbGpqOjF37txWrewJGl2tUUU7I0ajkT906FCpJEm83rXIoE7gb3/7W4nRaORp2xWAynCNPdxB+oMAjoWbSDhkZmberK+vv5aenv5tmukwYove3t6z8+fPz9VgBuxBAKVqHw53BfyFMJ'+
			'8Pi1WrVl28du1agDnHvcekSZMWdnZ2Dq9cufIi5aTCsuFwWpBkAN0AqIT1nzt3blt9fX0yx3HsqO49jCRJzvnz5w9cuHAhj1ISPgAZAAbUPByOg2wGUByJRkpkZmbebG9v98bFxRG5K0SSpEG/39/jdrvd/f39XofDEfD5fJLf75d8Ph+Gh4clSZLYQmEYcBwnxcXFcVarFRaLhbNarZzNZjOnpKTET5w4caLFYplMah1qeHi4Y9q0afHd3d3pJN4Xgs0A9qh5MBwjKQOwKiJ1RiEhIcHT3d3dlpiYOCeS30uS1N/e3n750KFDvqNHjybX1NRM6ezszCCtJ0OZqVOn9ixZsuR6UVGRa+3atdZp06bN5DguonMZg4ODjZmZmXkejyeBtJ6QbXkNyRfmQd4RSXxmIXjRZbh46uvrK5944olzBoNBoKEXk+jFYDAITz31'+
			'1NnGxsZKSZK84Vby4cOHSynpJoJwmKA3aCi6ePFiuyRJgTDKTDh16tTxzMzMXkoFx4SSTJkypae2trZckiQhjPoOLFq0yE5Jp1+AIJdpKOlwOOrUlhTP811FRUX1lAqLiUZSVFRUz/N8t9p6dzgcdZR0uQRCLKOh4DPPPHNGbSG53e5L2dnZ3ZQKionGkp2d3e12uy+prf+nn376DCVdiMSN3k1Dufb29pNqCofn+U7mHONPcnJyunme71JjA62trScp6fEuCNBGWrEZM2ZcldT1RYXVq1dfoFQ4THSWoqKiekndPjth+vTpHRR0aEWUzKZRMAcOHChR8+U4ffp0Oe1KYqKvnD179rgaWzhw4EAJJR1mIQp+SkOpwcHBRhVl4mWzVeNfMjMzeyUVU8ADAwONlHSI6t7Mr0grlJWVdUNS0aw2NDRUal1ZTPSR4DqJEu'+
			'KUKVN6KKR/BKMw2mZFC+QwjkTZvHlzE1Ss4G/fvn0C6bQZscn27dvVrJZzQdshzSrIth42K0Dha1FdXV2u9KkQBMHBcRyVlXsmsSccx4mCIDiU7KKqqorWmHQ5RmC0FoRKIOrZs2enKT3T0tLSJLHNhPcMkiRxra2tiq2DGtuJkBFtfTQHWUFaC4PBICYlJeUrPffZZ58Nk06bEdt8+umninWekpKSZzAYaERJHNHWR3OQEZudSJk9e/ZVAIr9zUOHDsVSXCWGBnz55Zdq6nxC0IZIM6KDjBQ4Lg8AcSP91re+5YCKy9/PnDkzlXTao5GRkeFcsGBB14wZM9wzZszwA0BTU5PlypUrE+vq6qb09PTQato1JVQ+7Xa7xW63657P2trabDXPLViwwEHhMJUN8u7edrU/eAIUBkNvvfWW4qKQIAg0pvLukunTp1/bs2dP'+
			'aV9fn9Jqruh0Ouv+8Ic/lObn53dqoRtJKSws7CwuLi5VEUtM7OvrO19cXFxaWFioSz4FQehVso8dO3Ycp5T+4wiDX9BQ4pNPPilRKoD+/n6qO3azsrJuVlRUlEvhbbO/xXBJSUn55MmT9Qp+ployMzMdZWVlkeYzUFZWVp6ZmenQUuf+/v56JcU+/vjjEkrpv44w+HcaStTU1ChO8XZ0dJyiVQG//vWvK0RRHIrAYP4OURQH33zzTerhjyKVHTt2VIqi6CaQT/eOHTs0W7Dt7Ow8paRTTU0NranejxEGDTSUaG1tVdzB29DQUEE6XbPZHAi2GkQ5evRomclkipkTjSaTiS8tLSWez5KSknKTyUQ9btWFCxcqlHRpbW2tppR+A8LAQ0OJnp6es0oFUFZWVkbaaDo6OmrImMrdNDc3VxuNRt2dxGg0CmqPEERCe3v7Sd'+
			'r5LC8vL1PSo6enh9bZkCGEINQ0byaA+FAPR0t8fLxiyKCenh6i89xHjhypnDp16hKS77ydgoKCZX/961+P03q/Wj7//PPy3NxcIgeAQpGbm7v00KFDVPOppu7V2FCEJEAOB/R3hHKQPEoKIC4uTtHxuru7iV3n9stf/rLywQcfJB6J5U4ef/zx1a+88soJ2umMxKuvvlrx6KOPrqGdziOPPLL6tddeq6L1fjV1bzabaUQ5uUWemof+AZSaUDXTeNu3bycyBklLS+sXRbGPTAdDGUEQepOSkty0ym4kSU5OHlCzj4kUoig6UlJSBmjk5fXXX1ccg1BeBvhvdzpDKI8lErwtFBzHmZWe6erqiiOR1r59+85FGpMpEgwGQ3pxcfFprdK7xYcfflhrMBg0W+DjOC7tgw8+OEPj3WrqXo0NRcFdth/KQWhFswPkew1HZWBg'+
			'INqbd5GRkeFcu3btsmjfEy4bNmxYkpqaqiqkJQnS09P71q1bp3k+169fv8Rms/WTfq/Kuqd5o+9dth/KQajtg+I4TrGPGQgEoh6DbN26tRGUYgiPBsdxCZs2bQprujAaXnjhhUZQmlBRIOHHP/7xBdIv5XlecQe3GhuKgrtsX1MHgYpLQwVBiHqb+/e///2IDsCQ4Ec/+pFmd8Zv2rQp6tY2UjZv3kw8bZUfR5p5VuUgNPuzis2jmq/IaFgsluGcnJz50bwjGqZPnz7faDRSv7jebDbzeXl5uuUzPz9/fnCRlBgq655mF0uVgyRTVEAxc4IgRPUFzsnJ6YUO3atbcBw3IbhXiypZWVk3oeLoAEUSgjoQg+d5NXVP00Husv1QClExLrVf1WhbkIKCgr5ofk+C/Px8B+00CgoKqDuhEvn5+UR1UOkgnMFgkEimext3dc'+
			'1DKURkmvVOgnfQKRJtCzJ9+vSQWwa0pLCwcFCDNNy009BaB7UfR7W2FAF32X4oY6QywA3u41Ek2kG61+vVbJA8ig40uwGapaGEz+cjWtYqWxDVthQB+rUgZrNZVRcr2hbEbrcTueUoGq5cuUJzHHcrjVjIZxLJ96l1EJPJRGsSRFULQiWaSPCiG0WibUHa2tp0Px579epV6mfq29vbdT+3T1oHtR9Hii3IXemHUihAI2We51XNX8fFxUWV+a6urnRJknQbwAqCcKOvr496C9LT05MmiiLRWaRwEEWxt7e3l+iFqxaLRVXd8zxPq3t5V2SVUA7ip5FyIBBQlSmr1RqVgwiCYKirq6N9lfCInDx5skmSaE2yfIMoityZM2eIXQITLrW1tZdEUSTa27BaraoG34FAgNZi4V22H8pBqMSk4nle1SYztV+R0Xjvvfdobmgb'+
			'lXfffVezkKm7d+/Wbb1n9+7dxLe4qP04qrWlCFBl+1SO2wKQJBVBq9etW3c22nTi4+O9PM/fiH5zd3gEAoHOuLi4YVrld6dYLBY/z/PXtc4nz/PXLRaLn3R+nnzyyXMqkqcZkrb+TmcI1YLQnF9XHN+QaEG8Xq91165dl6N9T7i8+eabbcPDw5q1Xn6/P27nzp3NWqV3i507d7b4/X7is53x8fFq6p7KGDmIKts/BEoeKopiv9Ln4fnnn68hkZbJZOJ9Pl9r9N9LdXg8nst6nE03Go28x+Np0iqfXq/XTiufGzduVIwdIIpiP8Xy/PxOZwjVglDbJiEIguIqd1JSEpFVUp7njWvXrvWA0qTDHXiKioqkaNdwIkEQBGNRUREPwKtBct6HH36Yp5XPpKQkxRZEEASaPZy7bF9TBwkEAh6lZ6ZOnUqsCT127Nic1157rZ'+
			'bU+0biJz/5SX1VVdVM2umMRFVV1ext27ado53Oyy+/fK6ioiKqK8tGQ03dq7GhKFBl+2+CUhPmdDrPKzWh+/fvLyGd7t69e0vJdDDu5r333iMapigaKS4uppbP4uLiUtr6f/TRRyVKejidTlr3pksA3oAKNtFSQE3kvK+//ppKRbz00ksnJEnykDAWSZIkURSHNm/eTOt64ohl69at1ZIkRR098jaGtmzZQitY29/JsWPHFB2cZuRNAD+ACh6ipYCau+jq6uqIR1a8JcuXL780MDBwIVqL6evrq//Od75j18JoIpFly5ZddrlcDdHm0+VyNSxbtuyyVnrX19crRjW5cOECNfsA8CBUUEBLgcOHD+v9hZA4jpNefPHFEz6fry1cg/H5fM0//OEPT3Icp7sTqMnnli1bqn0+X0sE+WzZsmVLtdb5VNPD+OKLL0op6qB4'+
			'uRMgn/mlEof1d7/7nWJoSbfbfUmLyjAYDOLq1asbP/3001KPx2OXJMkXylY8Hs/lv/zlL6UPPPDAxbHgGHcKx3HSqlWrGg8ePFganA4eMZ8HDx4sXbVqVaNe+XS73ZeU7GP37t20xnw8wjjv3kZDiRdffPGEUgGIokglKJmScBwn2Wy2vsWLF9sXLVp0JS0trX8sOoTafC5atOhKrOVTFMVBJfvYunXrCUrptyIEI3nMRcg37hDl8uXLimcYOI5LnDx5slPr244kSYLD4UhxOByaBZvTg1jNZ0ZGhoPjOMXt82psKEJCbnAdacHnPA0N7Ha7qu3R8+bN66aRPiN2UVvnzc3NtD6cIW1eUwe5evVqJlSs+C5cuJB41D5GbLNw4UKXise8V69evSsCOyH0dxBRFA1ut1vxosTVq1eza6DvMVatWqVY5263u00URVrbec'+
			'JykEugtIeppaVFcTl/yZIlup+3ZmjLkiVLFM+3Nzc30zop6gcQcvf3SA4SAEAlUvnJkycVNyNmZGQU0EibEbuoqXM1thMhpzDCNvrRmqsKGpqUlpZOVHqG47jUWbNm0bgwnhGDzJ49u13NVRVqbCdCRrT10RykkoIiKCkpyVXz3LPPPssc5B5hw4YNHWqeKy0tVWU7ERCRracBoHK80ev1XlFaELLb7TF7zTITsmK32xUXkL1eL629byKAEZcfRmtBnKA0m1VTU9Op9ExhYeFcs9lM83glIwYwm82BwsLCuUrPqbGZCDkPYMR4zkpTZl+S1UVm3759itE4OI5LWrdu3V2H6Bnji/Xr19dzHKc4a7l3715akey/iObHq0GhWUtJSXFJksSr6GbR2nfDJEbkypUrit0rSZL45ORkWnv0Rr0FWSnwlxnATQBEY7ACgMPh'+
			'OJ+WlrZA4TE+Ly+vt729fQrp9LXEYDCIqamprsmTJw9mZma6MzMzvampqQGr1SparVbJarWKFotFsljk2Ml+vx9+v5/z+XwGv9/P+f1+g8vlMnZ3dyd0d3cn9Pb2Jt28eTNZbbTKWCUvL+96a2trBhTu/HA6nedtNpuSrUTCAORLc0acPlYq4ACAowCeJqgUAOCdd94Z2LFjh9Jjpj/96U/21atXx7yDpKWl9a9cubJtzZo1A/PmzZPy8/MtkydPTp4wYcIkg8FggzwQJBqqU5Ikl8/nu9Hb2+tqa2vzNjY2SsePH59QXl6ee+3atckk06LB3r17rwDIUnrut7/9La2LUb/CKM6hlmdBoWlLSEgYEkXRpaZ51fJUm1rJzc29vnPnznK73X4iEAh0qsiHpgiCcLOrq+t0cXFx6eLFi2Pu9ON3v/vdS5KKbrYoiv3x8f'+
			'EeSno8AwJYII/yiStYWVmpeIBKkiTJ4/HYbTabk1IhqRKTyeRft25d7RdffFGiZRwqUvA8f/306dPlW7durabYn1cl6enpDq/Xa1ejd0VFBa0DUk4QvAvn32gouWzZsstqK9jtdl8sLCy8RqmwRpR58+Y1f/nllyWCIPREbp4xh7ehoaHi8ccfpxkhJKTMmDHjqtvtVl3vFHsP/0fB5sPiAVoF1traWq22sERRdG3bto36AqLVavVu3769wuFw1EVmf2MHn8/X/P7775emp6c7aJfrq6++WimK4oBa3VpaWmhGU1mhyvLDoJmGooWFhdekMMPUnDt37nhWVtYN0rosXbr0cllZWZkoin1hW9rYx1tfX1/52GOPnec4jugOiuzs7O6GhgbFiCV3MJSfn99Jw+YAXAnX+NWwg5Ky0v79+0siqFBfdXV1+YIFCyJ23JSU'+
			'FNe6devOHjlypNTv94cd5WS8wvP89fLy8rINGzbUpqamRhwLd8GCBc0nT54sl0IHihiVffv2ldKyNwD/Q63Rh3MBynQA9jCeV43FYvG7XK4ui8WSF8nvJUly9fX1tV+6dKn/xo0bksfjkTweDzc0NMR5vV4uOTlZSktLE1NSUrjk5GQuJycnfsqUKdlGo1FxipEBCILQdePGjc729naPy+WS+vv7JafTaXC5XFx8fLyUkJCAW5KRkcHNnj07OTU1dRrHcRHdtOX3+1uTkpKyh4eHqdyXCdmWVUXFD/eGoCoA3w1bHRUsXLiwuba2dhLHccQXJWOQQLAvPiwIAi9JEi+KoiCKIg8ABoPBZDAYjBzHmYxGo5HjuDiDwZAISjcQxxKSJA0sXLjwZl1dHa0zQVUIY/wR7krsB6DkIGfPni1cv379uYMHD07nOI7Wvn8tGB'+
			'oYGGhvbW112u12obGx0dTQ0DCxpaUlsaenJ9HpdCYODQ1ZIa/ghoXVavXZbLaB9PR0d25u7uDcuXPdc+bM4e+77z5DQUHBRJvNlhtclByTSJLkXr9+fUtdXd23KSbzR4rvhgUArYGTBEBasWLFRZ7nu8n2qukhCIKjsbGx8o033qiYM2dOW/A2X2rloyRZWVk9GzdurCkvLy8bS+Mqnue7V6xYcZFy+VyDBq3wy5QzIdlsNmdTU1OV3pU2EoODgxf3799fEoxCSPNKsKhl5syZHW+//fbxzs7OWkmSBL3LLhRNTU1VGi0Eb1Nv5pGTAKBXg8xIP//5zyvV3EqlBaIo9ldWVpYtX76c9leOmuTn51//5JNPyvS41zAUoij2/+xnP9PqYFxP0HY14XUNMiQBkKZNm3a9q6urVq9KdDqd519//fUKivuBNBej0chv3Lix'+
			'pqOjo0bSqVXp6uo6k5eX16VhvrePYs/ESQKl/Vkjyfe+971Tbrf7ohaVFwgEOr766qvyRYsWUVkcjSXJz8/v/POf/1yi5hg0CQYHBxufe+650xrnsw8Ujmwo8RYBxcOWhx9+uKGmpqacZDdBFEWXw+E499FHH5UuXbo05na+aiVz585t3bNnT2lPT88ZURSdpMqX5/nrJ0+eLH/ooYeoXTGuIDsRIeGug9yODUA7gAlRvCMq7rvvvo5HHnmkc+nSpb5Zs2YZExMTjVar1WS1Wk0Wi8VsNpvjTCaTKRAI+L1er39oaGh4YGCAd7lcQkdHh3js2LEJZWVlWc3Nzdl65SGWmTZtWteaNWuuFRUVDeXm5hqSk5ONSUlJpgkTJsTFx8dbzGZzHM/zfCAQCPj9/oDP5+N9Ph8/ODgoXLp0SaipqbEeOXIku6mpKUfHbLgB5I'+
			'Hi3Zuj8TZi4MvHhMko8htEQTQtCCCHBroMID3K9zAYNOgFMAvy2Y+IGPUssAq8kJuup6J8D4NBg5cAnIjmBdG2ILfeUQFgOYF3MRikqMI355gihoSDAMC3ANQi+haJwSCBAGARCAQ+JGXQNyCPR+4n9D4GIxreBfAnEi8i1YIA8kLMJQAxH6KHMa7pgjwwJxIqiORtPQMAXiX4PgYjEl4BIecAyLYgtzgK4D9ReC+DocTXAIpIvpCGg+QAOIsIDgQxGFHgAPBtyGc+iEHjQsQOAM8jyuk1BiMMJAD/CMLOAdCblrVD3qNFPPYQgxGC3wB4n8aLaXSxbmECUA5KZ9gZjCBVkK/poHLBJ00HAeTxyDnIayQMBmmckMcdqu44jARal7Lfgo1HGLSQINsWNecAtNka0gQgEWyvFoMs/wrgPb2VIIUZwGHofzaAyfiQwwg/'+
			'pltE0B6D3M5EAMcALNEwTcb44xSAhyCfFKSOlg4CAJMgb42/T+N0GeODJshLBze1SlBrBwHk88FVYJsaGeFxHfI4tl3LRGnPYoWiDcCjAFw6pM0Ym/QDeAwaOwegj4MAQD2AJwD4dEqfMXbwAXgSss3cczwFeQVU71kRJrEpPFi8AzwN+Suhd2UwiS3xQbYNBoA1kMckelcKk9iQfsj7qxi38W3IxyX1rhwm+koX5CAgjBAUQN4qr3clMdFH7ADywRiVyZBDCOldWUy0ldPBumeoIBHy2Xa9K42JNvJVsM4ZYRAHebem3pXHhK78LljXjAjZADbDNR6lH8CzYBChAHIfVe9KZUJGTgXrlEGQOADvQP/KZRKdvAPWpaLKemh8PyITItIXrDuGBuQBqIT+lc5EnVQG64yhIRyAH0KOqKe3ATAJLY5gHelx7ogRJB3AHg'+
			'Ai9DcIJrKIwTphV/PFEMsB1EF/47jX5RxYBJuYxQhgG+Tw93obyr0mA8GyZ7eMjQGyAPwRQAD6G854l0CwrLNU1QwjpsiDHNSYHcgiL75g2eaprAtGDJMF4H8DGIL+hjXWZShYlqzFGIdMAvArsL1dkUh/sOzYzNQ9QAqA1wE0Q3/Di3VpDpZVckQlzRjzPADg38C2r9wufcEyeSCKcmWMMyyQt19/BmAY+hup1jIM4NNgGViiLEvGOCcdwEsATgAQoL/x0hIhmMeXwMYWjAiZBOA5AP8XctBkvY06WukBsD+YJ+YUCrBNZOFhALAA8laKFUGZpqtGyrRCDhZeGfxbD3mvFEMFzEGiJwtyTK/5kJ1nAYCZkC8N0pIAgMsAzt8m5yDHmWJECHMQOhgBTIUc4ykv+Hcq5C7NLbEBSIKyIwUg73NyQO7i3ZJrkFuHtuDf'+
			'a5DHFAyCMAfRHw7yEVQLvjmKOgzAj29m0xgMBoPBYDAYjPHCfwAtqWExjJzcdwAAAABJRU5ErkJggg==';
		me._enter_vr__img.ggOverSrc=hs;
		el.ggId="enter_vr";
		el.ggDx=-31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 28px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggOverSrc;
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggNormalSrc;
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._enter_vr);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 1131px;';
		hs+='position : absolute;';
		hs+='top : 524px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		var clonedNormalElement = new SkinElement__15_Class(this,me.__11);
		me.__11__normal = clonedNormalElement.__15;
		me.__11__normal.style.visibility='inherit';
		me.__11__normal.style.left='0px';
		me.__11__normal.style.top='0px';
		me.__11.ggMarkerNormal=me.__11__normal;
		me.__11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__14_Class(this,me.__11);
		me.__11__active= clonedActiveElement.__14;
		me.__11__active.style.visibility='hidden';
		me.__11__active.style.left='0px';
		me.__11__active.style.top='0px';
		me.__11.ggMarkerActive=me.__11__active;
		me.__11.ggMarkerInstances.push(clonedActiveElement);
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__active,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__active);
		}
		if (me.__11.firstChild) {
			me.__11.insertBefore(me.__11__normal,me.__11.firstChild);
		} else {
			me.__11.appendChild(me.__11__normal);
		}
		for (var i = 0; i < me.__11.childNodes.length; i++) {
			me.__11.ggMarkerInstances.push(me.__11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__13_Class(this,me.__10);
		me.__10__normal = clonedNormalElement.__13;
		me.__10__normal.style.visibility='inherit';
		me.__10__normal.style.left='0px';
		me.__10__normal.style.top='0px';
		me.__10.ggMarkerNormal=me.__10__normal;
		me.__10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__12_Class(this,me.__10);
		me.__10__active= clonedActiveElement.__12;
		me.__10__active.style.visibility='hidden';
		me.__10__active.style.left='0px';
		me.__10__active.style.top='0px';
		me.__10.ggMarkerActive=me.__10__active;
		me.__10.ggMarkerInstances.push(clonedActiveElement);
		if (me.__10.firstChild) {
			me.__10.insertBefore(me.__10__active,me.__10.firstChild);
		} else {
			me.__10.appendChild(me.__10__active);
		}
		if (me.__10.firstChild) {
			me.__10.insertBefore(me.__10__normal,me.__10.firstChild);
		} else {
			me.__10.appendChild(me.__10__normal);
		}
		for (var i = 0; i < me.__10.childNodes.length; i++) {
			me.__10.ggMarkerInstances.push(me.__10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__16_Class(this,me.__9);
		me.__9__normal = clonedNormalElement.__16;
		me.__9__normal.style.visibility='inherit';
		me.__9__normal.style.left='0px';
		me.__9__normal.style.top='0px';
		me.__9.ggMarkerNormal=me.__9__normal;
		me.__9.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__17_Class(this,me.__9);
		me.__9__active= clonedActiveElement.__17;
		me.__9__active.style.visibility='hidden';
		me.__9__active.style.left='0px';
		me.__9__active.style.top='0px';
		me.__9.ggMarkerActive=me.__9__active;
		me.__9.ggMarkerInstances.push(clonedActiveElement);
		if (me.__9.firstChild) {
			me.__9.insertBefore(me.__9__active,me.__9.firstChild);
		} else {
			me.__9.appendChild(me.__9__active);
		}
		if (me.__9.firstChild) {
			me.__9.insertBefore(me.__9__normal,me.__9.firstChild);
		} else {
			me.__9.appendChild(me.__9__normal);
		}
		for (var i = 0; i < me.__9.childNodes.length; i++) {
			me.__9.ggMarkerInstances.push(me.__9.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__18_Class(this,me.__8);
		me.__8__normal = clonedNormalElement.__18;
		me.__8__normal.style.visibility='inherit';
		me.__8__normal.style.left='0px';
		me.__8__normal.style.top='0px';
		me.__8.ggMarkerNormal=me.__8__normal;
		me.__8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__19_Class(this,me.__8);
		me.__8__active= clonedActiveElement.__19;
		me.__8__active.style.visibility='hidden';
		me.__8__active.style.left='0px';
		me.__8__active.style.top='0px';
		me.__8.ggMarkerActive=me.__8__active;
		me.__8.ggMarkerInstances.push(clonedActiveElement);
		if (me.__8.firstChild) {
			me.__8.insertBefore(me.__8__active,me.__8.firstChild);
		} else {
			me.__8.appendChild(me.__8__active);
		}
		if (me.__8.firstChild) {
			me.__8.insertBefore(me.__8__normal,me.__8.firstChild);
		} else {
			me.__8.appendChild(me.__8__normal);
		}
		for (var i = 0; i < me.__8.childNodes.length; i++) {
			me.__8.ggMarkerInstances.push(me.__8.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__3_Class(this,me.__7);
		me.__7__normal = clonedNormalElement.__3;
		me.__7__normal.style.visibility='inherit';
		me.__7__normal.style.left='0px';
		me.__7__normal.style.top='0px';
		me.__7.ggMarkerNormal=me.__7__normal;
		me.__7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__4_Class(this,me.__7);
		me.__7__active= clonedActiveElement.__4;
		me.__7__active.style.visibility='hidden';
		me.__7__active.style.left='0px';
		me.__7__active.style.top='0px';
		me.__7.ggMarkerActive=me.__7__active;
		me.__7.ggMarkerInstances.push(clonedActiveElement);
		if (me.__7.firstChild) {
			me.__7.insertBefore(me.__7__active,me.__7.firstChild);
		} else {
			me.__7.appendChild(me.__7__active);
		}
		if (me.__7.firstChild) {
			me.__7.insertBefore(me.__7__normal,me.__7.firstChild);
		} else {
			me.__7.appendChild(me.__7__normal);
		}
		for (var i = 0; i < me.__7.childNodes.length; i++) {
			me.__7.ggMarkerInstances.push(me.__7.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__2_Class(this,me.__6);
		me.__6__normal = clonedNormalElement.__2;
		me.__6__normal.style.visibility='inherit';
		me.__6__normal.style.left='0px';
		me.__6__normal.style.top='0px';
		me.__6.ggMarkerNormal=me.__6__normal;
		me.__6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement__1_Class(this,me.__6);
		me.__6__active= clonedActiveElement.__1;
		me.__6__active.style.visibility='hidden';
		me.__6__active.style.left='0px';
		me.__6__active.style.top='0px';
		me.__6.ggMarkerActive=me.__6__active;
		me.__6.ggMarkerInstances.push(clonedActiveElement);
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__active,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__active);
		}
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__normal,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__normal);
		}
		for (var i = 0; i < me.__6.childNodes.length; i++) {
			me.__6.ggMarkerInstances.push(me.__6.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement__0_Class(this,me.__5);
		me.__5__normal = clonedNormalElement.__0;
		me.__5__normal.style.visibility='inherit';
		me.__5__normal.style.left='0px';
		me.__5__normal.style.top='0px';
		me.__5.ggMarkerNormal=me.__5__normal;
		me.__5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement___Class(this,me.__5);
		me.__5__active= clonedActiveElement.__;
		me.__5__active.style.visibility='hidden';
		me.__5__active.style.left='0px';
		me.__5__active.style.top='0px';
		me.__5.ggMarkerActive=me.__5__active;
		me.__5.ggMarkerInstances.push(clonedActiveElement);
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__active,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__active);
		}
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__normal,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__normal);
		}
		for (var i = 0; i < me.__5.childNodes.length; i++) {
			me.__5.ggMarkerInstances.push(me.__5.childNodes[i]);
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_position_mouseover = function(){
		if(hotspotTemplates['position']) {
			var i;
			for(i = 0; i < hotspotTemplates['position'].length; i++) {
				if (hotspotTemplates['position'][i]._tt_ht_node && hotspotTemplates['position'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['position'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_position(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._position=document.createElement('div');
		el.ggId="position";
		el.ggDx=34;
		el.ggDy=-214;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._position.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._position.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._position.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._position.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
			me._tt_ht_node.ggVisible=true;
			me.elementMouseOver['position']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._position.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility='hidden';
			me._tt_ht_node.ggVisible=false;
			me.elementMouseOver['position']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._position.ontouchend=function (e) {
			me.elementMouseOver['position']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._position.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAWJUlEQVR4nO2de7QdRZWHf1vFKCAgSgImzkINBkQQBIJARBCNSHgICOMDEdAZZVjKckARlSGjg/hYoIBmBhR5qhgQFEJ4CJoQIDKgAREDE0TGJIAhgzBEiOD4zR/dF/vW6dP3nHu6u/qcs7+1ep3bdaurdlft3VXdVbVLchzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcXrFYgswbACvlrS5pHUlvTg91s38StJTkp7O/I78/aCZPVCzyEONG0hFANtI2k7SNElbpr/TJK3TY9LPSrovPe5Nf+80s7t7TNfJwQ2kJIBNJc2QtJekWZJeWbMIyyVdLelGSTeb2SM15z+QuIH0APAGSe+S9GYlhtEkbpS0SNKPzOyu2ML0K24gXQK8XNKBSgxjny4vv1'+
			'/SUiVdo8eUvFf8Kf0dOaTkXWTkWC/93VhJV20rSVO7zHe+pB9JusLMVnd57VDjBtIhwD5KjOJASS8fI/qzSp7eNykxhqWSlprZsyXJso4SQ9lKidHsrqQVG+v9ZrWkK5S0KvPLkMUZcoBDgGso5nHgauCzwB6pAtct5zpp3p9NZXl8DJmvAQ6pW05nQAAOBxYUKNhTwNw03stiyxsCvCyVbW4qazsWAIfHltfpE4CjgNsKFOoq4KPAlNiydgowJZX5qoL7ug04KrasTkMB3jKGAp0H7BRbzl4BdkrvpegB8JbYcjoNAZgMfK1AYS4ZRIVJHwiXFNz314DJseV0IgIcAzzYRkGuBPaOLWPVAHun95rHg8AxsWV0agaYBFzYRil+ARwWW8a6AQ5L7z2PC4FJsWV0agCYCdyVowSrgE8DE2LLGAtgQloGq3LK5y5gZmwZ'+
			'nQoBjm/zhPwm8JrY8jUF4DVpmeRxfGz5nJJJn4x5XaongQ/Flq+pAB9KyyivyzW0Le1AAWwC3JRTyXcAM2LL13SAGWlZhdwEbBJbPqcHgFcDD+RU7veAibHl6xeAiWmZhTxAsgDM6TeA7YBncir15Niy9SvAyTnl+QywXWzZnC4Ads+pSIBPxZat3wE+1aZsd48tm9MBabcqj4/Glm1QIJnXlYd3t5oMsFmbits1tmyDBrBrm7LeLLZsTg7ARsDSnApbP7Zsgwqwfk55LwU2ii2bk4FknGNeTmV5RVVM+mAKmYePkzQH4NKcSup23bYzToCpOeV/aWy5yqDv16STfLadHQTvamaLI4gzboCNJW2hxDnD+sFhktakx58yv8vMbGUUgQOAXSTdGgTPNrN/jSFPWfS1gQAHSro8CD7AzK6MIU8nAOtKmi7pLUoMYqr+Zh'+
			'jj4WlJy5R4TLlf0mJJi83sD71L2x3A/pJ+HAQfZGZX1C3L0EMyoe7+oFn/bGy5QoANgIOBU4Gf5XRFqmIJ8A3gCGr8/EriNCLL/fhE0PoBLg8q4qrYMmUB3gHMAVZWbAid8GcS5w3vB9ar4d7DpcthK+9UCa1THlaTeDmMLdffpbItqVTde2M5cBYwvcJyeANJnWTxKT51kBb+mqDwo46SA1sBX8lRiqZzEbBnRWUSjravoQEPsYEnrdQs50eUZXuShUVPV67K1XI5sG8F5XN+kM9FZefhZCB52c3yKDAtghzrACfR2pL1O9+ixBdqYBpJHWU5uKz0nQzA84DFQWHXPjsXOJBix3L9zsPAsSWWVzj7dzHwvLLSd1KAE4KCvrnm/CcB51avn43hJ5Q0yRO4OUj7hDLSdVKAV5I82bLsX2P+7TyhDDpPUsIHEGD/IN2H'+
			'gbo3GBpcgC8GBXxujXm384QyTPw7Pc6KprX1/WJZdTTUAFvQ6sp/h5rybudcbhi5BXhjD2W5Q5De48AWZdbXUEKr39yza8r3pzUoXb+xAtijhzI9O0jvayVW2fABbAusDQq18tYDuKcGZetX/sI4jYTWVmQtsG3J1VcqTf/c9k+SsgtvzjGzX1SZIfA/kl5XZR59zvMl/Ww8RpLW3TmZoAlK6rixNHa6O8n6iGUaPQ18xyoNBHhK0ourSn8A2drMftPNBSQ9gDsyQY9J2sLMHitVspJocgvyTo02josrNo675MbRLfcAXbW2aR1enAnaWEldN5KmG0iWeVVlBPxQUqP7wg1mcbdGota6bKyBNLKLldO9ekjSNDNbU0FecyX5bq+9cY+kQzvtbpGMqdwn6RVpUGO7WU1tQcLu1byKjOMUuXGUwdaSvtJp5LQus61IY7'+
			'tZTTaQLFeXnQHJVJXPlJ3uEDMLOKmL+GGdNtJAGtfFAtaRtFzSyJZfv5X0WjP7a4l5TJR0o6TXl5Wm8xwzzewnY0UimdH7X5JGptf/QdIrzezZKoXrlia2IG/X34xDkhaUaRwpp8iNoypOATYYK1JapwsyQZOU1H2jaKKBhEtAS/VvBXxA0ofLTNMZxU5q9VPWjrBuK1n+2wv9YCALykqYxLFyN/1kZ3x8Ating3gLgnM3kCKATSVl51rdY2a/LTGLk5Q4aXOq53PAC4sipHV7TyZoh1QHGkOjDEStfdBFZSUMHCTp6LLSc8ZkF0mf6yBeWMeNeg95QWwBAkJfTdeXmPaJJaZVFXdJukLSivRYnv4iaXJw7JUeTeYk4AozW1IQ53pJ2VWL0yU1xvtJ0wwk9FByZxmJAh+UtGMZaVXAYklXKRkMvbsg3r3pMcKp6TvV'+
			'fpL2TX+byJGSigwkrOPavdT0DcDvM2sFni4x3YWlrYYojxuAd5V4j9OBCyLfUx5rgNeOIXvWr9jvyyqTgQJYNyjYoqdON+m+uy5N6JDbgMPLuLc297sXrX6LY/OlMWQOXbWuW1X5dEuTXtLDpnVpSekeVVI6ZXCOme1sZhdWlYGZ3WhmB0k6vqo8xsGRwOSC/4d13Zhu1kAbCLCbmjPHZ7aZfaSuzMzsNEmzJD1ZV54FTJR0aMH/3UA6oIoWpLQ+fo9sHWOnJTObb2YbSLq97rxzKKoLN5AOCPudD/eSGPB8SQf0kkZJTOl2WWrZmNl0JZ+MY7I7yTZteYQv5v4OkkO43PVPPaZ3gOKPmh/YlD0ElWz5Fpt2D6xHg/PGLH1ukoGET42nekwvdutxqpn9KLIMz2Fmv5P0nshitKuT1cG5tyA5hE+NXg3krT1e3ws/N7'+
			'PGLcYysx9ImhNRhC3zullm9qSktZkgb0FyKK0FAXaUNKU3cXri6xHzHouvS/pjxPzf1CY824p4C5JDmS1IKW77x8kV6ZO6kZjZMknfjyhCuxf1rIF4C5JDuPz3/3pIK6aBNLn1GOHGiHm3M5DsA7ExcwSbZCDh156JPaQVy0B+YGY3Rcq7GzaMmPcU8rd52yzzd69fMEujSQbyUHC+yXgSIVlwE2tzln4wDkmKvSgpb7fbrEylu3gaL00ykLAFGZeBSNq+V0F6YH7EvLthj8j5T82eABtq9HuHtyA5lNKCSNquV0HGyS/N7MFIeXcMidfKmZHFCAdwwxbNW5AcQgMZ7ztIrBbkykj5dksTJm9ODc43C87dQHIIu1jjfY+IZSChgTeVrIGsbRurWsIWZKfg/Jd1CTIWjTEQMwsVbOdu00gnKIZPp7poypyrtgBTNNpA'+
			'Snfp2iGTGe3xJDSQW+sUpojGGEhKdu/z6UC338PXK1OYLmm8gUg6VqOdgt+geKPqWe+ZWQO508xW1S1MO5pmILdk/l5HrU+Wsehpq+IeabSBkOxQ+/FM0O8kXa54ck+SJGCqpM0z4Y36VN40AwldUfaTgTRh5V4Rx0rKdmvOTJ/UseQeaUFCbzNNWNz1HE0zkPDlrFsDidnFesXYUeIA7C0p6yjidklnpn8XrRWvkhEDCScv3hFGjEmjDMTMlmu0K8pufVnFbEFiKVoh6Yv5l4PgMzMe82PJPTL28bZM2BIzuzcvciwaZSAp/5n5e0ugm3lVT5QtTBc00kAk/UCj91+8xswuliRgkpJtnWPwROpUY+tM2E8jydKWJhpI2M3qxmNgT+vYe6RxBgJcp9ETN/9X0hcy5zFlXqnRrYfkBtIRtwXnHRuImT2q3qbJ90LMOW'+
			'AtAKerdUrJcWaW/RASU+aHNNpAHlYDDaSRAPMDT3sdT48AVpTrFLBjel0iXBrAaTnyfTUn3tyayyjLnsH5xXn3EpsmtiCSdFlwvn8X18bqZr0YiD6bF/iOpH8Ogi8zs08G8SZIekdtgrWyTXD+syhS9CPAhoxuCVaQ7K3dybXfruX51575JINftQJMpbXlBchdXgvsW2upjOYG4JYg7FV1l1knNLIFMbMnNLoVmazO30XG3GG1Yt4paSFwMsn2BJUCbAacLGmhWmfqHm1m721zaUy3SI9o9MeD76ZuiZxOAWYET5gfdnjdlKoff12wkooMhdQw0jzyaNstBd5Wy923Z1Fw3oQp+P0HcGNQkOEOVO2uu72eeu6YlcAc4OASyuTgNK12hnEvyfhCURrz6rntXNYE5wt6LZOhBTg6KMwzOrzu9Hrqui3PFvzvMZKvR4cA'+
			'2wJtV04Cm6RxDkmveawg3aeBL1O8zYCAD5Rxgz3wYHD+D93qhZNCoiAPZwpzNTDmnCcShYrN9V3E/QvJh4jb02NFGtYp5wJ5jhDCctkc+FUX6VbB2szf99OgzXL6EuBLQQF/soNrXgqsqqvG27ASOAj4cYV5/BjoeCNP4LoKZRkPtW8JMXAAWwF/zhRqRxt7AudFqfLR3JHK8irgY+R/hu2W+WlaXX0WpRnl8bvM32sZY+/CJhB6M2wkwDmSsn3V95lZoftM4N2SLq1UsM6YY2bHjJwA6ykZ+NxeieeWienvyCEl2wGMHKvS3yWSrjSzrl3iAPso3vLaLN+XNPLZeXaMTYUGEmC34Ek0r4NrXsToXXNjcm4d5dSmHI6KffMZdgT2APaIVR4DC3BZUNj7dnDNnNpVoD03A1vWUVbpvU8gf05WLBbUde9l0siR9DZcEJ'+
			'z/YwfXNKFbMcJukhZRw2dNki7VDWqdkxWTjgZ6nR4Afho8lTppRcI9uJvAIuDvKyifGcAlke8tjz9Sw7SbKuinFkQaXysSXtMEZki6BLiaZOCuJ2/rwCySDxmLJJVueCVwmZnFXMw2PAC3BU+nwlYE2IjRnxebyJPA5cD7uiiHvUhmLjflQ0QRe/de83Hoi8+8WYDDJF2UCbrKzArXi5DMdp1dpVwls0LJts0r0gMlM5onK/GeMlnShGjSdcft6TbUfUnfGYgkAddIyj6V9jOztp9+gc2VjCNsVLFoTisfNLMLYwsxXvrtHWSEs4LzwneRdFuC86sSxmnLtf1sHFKfGoiZzdfojSj3Aw5vFz+liS/rg05Hs6+bTF8aSErYihxHMo0jFzO7U9I3qhXJyXChmV0bW4he6VsDSd3XzMkEbSvpuDEu+4biOpcbFp7RALQe'+
			'Uh8bSMpZSpyhjXAcsHW7yGZ2n7wVqYMzzawxm+D0Ql8bSOrHNdvV2kCdtSK/r0woZ4UGpPWQ+txAUs6QtCxzfiQwq11kM3tE3opUyRlmtiK2EGXR9waSuhs9LQjupBW5uxqJhppf6m/bKgwEfW8gkmRmZ0u6PhO0J/CxgvhPy1uRKjjDzJ6JLUSZ9OVIeh7ATEnXZYIekfRmM7u/4JpFSiYOOr1zrZkNnH+rgWhBJMnMrpd0diZoU0mfGeMyb0XKY2BezLMMTAsiScAWSjYCzfqaOtTM2q5NB66WtE/Vsg04F5rZB2MLUQUD04JIkpktU+sL+4kUO772VqQ3BmZQMI+BMpCU0zR6p9TtVdDVMrNrNHpel9MdAzMomMdAdbFGAA5Vsjdflt3NbFGb+Ltq9B7tTmeskLTLII17hAxiCyIzm6vW2bsnFsS/VQP2/b4mBm'+
			'pQMI+BNJCUzytZlTfCO4vGRiSdIqlRWxD3AY3c9KZMBrKLNQLwYUnfygQVjo3kLOd1innczF4aW4gqGeQWRGb2bY1+AS8cG0n3D2/kZpINZUFsAapmoFsQSSLxZrhA0qRMcNuxkTT+QiU+c532/FHSnmZ2V2xBqmSgWxDpuSnxnw+C246NpPFPqVyw/mf2oBvHUAFcGvhq+uIY8WNuU9Z0hsaN6MB3sUYAtlHS1do4E1w0NrKLpJskvaB66fqK1Uq6Vr+OLUgdDHwXawQzu1s5Xa2C+Isl/VulQvUns4fFOIYSWrdEa+sBHXgBcGvd/ZcGM7fOumoCQ9PFGgHYQUlXa+Ql/RlJbyvoas2SNOaGPUPAKiVdq9/EFqROhqaLNYKZ/UJSduuvF0o6FXhRm/hXy6ehSEnXaqiMY6ihdUPN0wviTgSW1tydaRI+23nYAN7E'+
			'6D27Ad5bEP+w+vWyETwETKuzbpyGAHwmUIYHgakF8b9Vu3rGp5NNipxBBbghUIii5bkTgbvr19FofLfOunAaCLA78NdAMT5ZEH//+vU0CstJ1vg7ww5wcqAcf6FgL2/glLq1NQIfqrEKnKYDXBkoyGIKtlOgtWs2SPT1pjdOBQBbASsCRWnrrQPYGVhTu+pWz38Dr66z7J0+gfxPuYcVxD+2Xt2thSPrLHOnzwBODxRmOQXjAMD36tfhyjivzrJ2+hDghcDCQHEuL4j/KuCB2lW5fO4GNq2zrJ0+hWSU/clAgT5dEP+9tatz+Qyc42mnQoBjcpTo7QXxv16zQpfJWE6+HacV4NxAkZYAm7SJux7w89pVu3eGbo2HUxLAJiRGkaXtiyzw1vr1uyeWAQPv/M2pEOAdOYr18YL4n6hXx3vioDrL0hlQaJ31uxbYvSB+P8'+
			'z6DdfnO874AS4LFOznwAZt4r4EuLl2le+cq+ouP2fAAabSOt7xHwXxpwOP1a76Y7MCeF2dZecMCcChOQr3kYL4R9Sr+x3xvjrLzBkygC8FCvcEsHNB/K/UbwNt+WqdZeUMKcA1geItBCYUxG+CG9MbgKFz8+REAJhG6/tI0dT41+bEr5PVwBvrLCNnyAH2y1HEIwriH1CvTYzCVwc69QMcHyjiKmC7gvgn1m8b+DbXTjxoHRS8foz4F9VoHDcD69ZVFo7TAskkxXD9yFkF8TcEFtVgHKuB6XWWhePkAmwPPBIoaJHX+G1I1n5XiY93OM0BeE+Okr6rIP6sCo3jX+q8d8fpCFr9a60Ati2If3QFxnFBnffsOF0BfDdQ2JuAlxTEP7VE47gF2LDO+3WcriBZZHVHoLjnj3FNaFTj4Q8kmwM5TrMBZtDq9KHtewHwInr/'+
			'snVonffoOD0BHJWjxB8oiD+N8X/ZcqcLTv9B68zfx4HdCuLPHIdxfKfOe3KcUgHmBgq9BNisIP6HuzCOhcD67dJynMZDMtIevrT/cIxrvtCBcawE3lDXfThOZQA70rr89ptjXHPBGAZycF3yO07lAO/PUfKiL1vPAxa0MY4T6pTdcWoBOClH2YvWtJ+QE39OnTI7Tq0A5+Uo/T458fIc1s2LIbPj1Aqt0+MfBV6f+f/rSEbGs/wqpsyOUyskG/Nk+TXJWpENaN1q+nFgcmyZHac2gJfmdKGuA67NCfeFT87wAeySYwwhbdeUOM7AAxxZYBzHxJbPcaJDvovSI2LL5Ujuaa8hADMljeyme5+ZFXpHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcZx+4f8BaC0s+YbWGbUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._image_2__img.ggOverSrc=hs;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.onmouseover=function (e) {
			me._image_2__img.src=me._image_2__img.ggOverSrc;
		}
		me._image_2.onmouseout=function (e) {
			me._image_2__img.src=me._image_2__img.ggNormalSrc;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._position.appendChild(me._image_2);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggDy=33;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['position'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._position.appendChild(me._tt_ht_node);
		me.__div = me._position;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'position';
			hsinst = new SkinHotspotClass_position(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_position_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['position']) {
			var i;
			for(i = 0; i < hotspotTemplates['position'].length; i++) {
				hotspotTemplates['position'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement__18_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs=basePath + 'images/_18.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u73b0\u4ee3\u65f6\u5c1a_\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 401px;';
		hs+='position : absolute;';
		hs+='top : 205px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__18.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement___Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__=document.createElement('div');
		els=me.____img=document.createElement('img');
		els.className='ggskin ggskin__';
		hs=basePath + 'images/_.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u65e5\u5f0f\u70b9\u51fb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 549px;';
		hs+='position : absolute;';
		hs+='top : 423px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__12_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs=basePath + 'images/_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u8f7b\u5962\u98ce\u683c_\u70b9\u51fb\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 165px;';
		hs+='position : absolute;';
		hs+='top : 259px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
		hs=basePath + 'images/_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u7b80\u7f8e\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 442px;';
		hs+='position : absolute;';
		hs+='top : 354px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__16_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
		hs=basePath + 'images/_16.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u65b0\u4e2d\u5f0f_\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 320px;';
		hs+='position : absolute;';
		hs+='top : 207px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__16.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__0_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin__0';
		hs=basePath + 'images/_0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u65e5\u5f0f\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 529px;';
		hs+='position : absolute;';
		hs+='top : 363px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__4_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__4=document.createElement('div');
		els=me.__4__img=document.createElement('img');
		els.className='ggskin ggskin__4';
		hs=basePath + 'images/_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u73b0\u4ee3\u7b80\u7ea6_\u70b9\u51fb\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 486px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__3_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__3=document.createElement('div');
		els=me.__3__img=document.createElement('img');
		els.className='ggskin ggskin__3';
		hs=basePath + 'images/_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u73b0\u4ee3\u7b80\u7ea6_\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 485px;';
		hs+='position : absolute;';
		hs+='top : 204px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__14_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin__14';
		hs=basePath + 'images/_14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5317\u6b27\u98ce\u683c_\u70b9\u51fb\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 249px;';
		hs+='position : absolute;';
		hs+='top : 260px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__14.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__13_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__13=document.createElement('div');
		els=me.__13__img=document.createElement('img');
		els.className='ggskin ggskin__13';
		hs=basePath + 'images/_13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u8f7b\u5962\u98ce\u683c_\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 209px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__17_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__17=document.createElement('div');
		els=me.__17__img=document.createElement('img');
		els.className='ggskin ggskin__17';
		hs=basePath + 'images/_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u65b0\u4e2d\u5f0f_\u70b9\u51fb\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 323px;';
		hs+='position : absolute;';
		hs+='top : 259px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__17.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__1_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin__1';
		hs=basePath + 'images/_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u7b80\u7f8e\u70b9\u51fb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 436px;';
		hs+='position : absolute;';
		hs+='top : 414px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__15_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs=basePath + 'images/_15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5317\u6b27\u98ce\u683c_\u5e38\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 248px;';
		hs+='position : absolute;';
		hs+='top : 209px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__15.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement__19_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
		hs=basePath + 'images/_19.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u73b0\u4ee3\u65f6\u5c1a_\u70b9\u51fb\u6001";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 259px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__19.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._enter_vr.logicBlock_visible();
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_position_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};