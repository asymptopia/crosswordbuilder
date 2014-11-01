/***************************************************************************

	Author			:Charles B. Cossé 
	
	Website			:http://www.asymptopia.org
	
	Email			:ccosse@asymptopia.org
					
	Copyright		:(C) 2001-2010 Asymptopia Software.
	
	Package			:Asymptopia Math Crossword Builder
	
	Version			:3.2
	
	License			:Gnu Public License (GPL)
	
 ***************************************************************************/

STR_BG_COLOR="gold";
STR_INACTIVE_TAB_COLOR="gold";
STR_FG_TEXT_COLOR="0000AA";
STR_ACCENT_COLOR="FFAA00";

var W_NAV=800;
var NAV_TOP=20;
var BORDER=20;
var BG_COLOR="AAAAAA";

function NavButtons(tabLabelNames,cbNames){
	
//	tabLabelNames=new Array("configure","generatekey","generatepuzzle","generatehints","help","about");
	
	//tab table
	tabTable=document.createElement("table");
	//tabTable.width=window.document.width;
	tabTable.style.backgroundColor="000000";
	tabTable.style.fontSize="12px";
	tabTable.width = W_NAV-2*BORDER;
	tabTable.name="tabTable";
	tabTable.cellSpacing=1;
	tabTable.cellPadding=0;
	tabTable.align="center";

	//create tabs
	var tabRow=tabTable.insertRow(0);
	for(var i=0;i<cbNames.length;i++){
		cmd=cbNames[i]+'Tab=tabRow.insertCell('+i+')';
		eval(cmd);
		cmd=cbNames[i]+'Tab.style.width='+(W_NAV/tabLabelNames.length);
		eval(cmd);
		cmd=cbNames[i]+'Tab.style.backgroundColor=\"FFFFFF\"';
		eval(cmd);
		cmd=cbNames[i]+'Label=document.createTextNode(\"'+tabLabelNames[i]+'\")';
		eval(cmd);
		cmd=cbNames[i]+'Tab.appendChild('+cbNames[i]+'Label)';
		eval(cmd);
	}
	
	//set tab cell attrs
	var tabs=tabRow.childNodes;
	for(var i=0;i<tabs.length;i++){
		tabs[i].name=tabLabelNames[i];
		tabs[i].id=tabLabelNames[i]+"Tab";
		tabs[i].style.backgroundColor=STR_INACTIVE_TAB_COLOR;
		tabs[i].style.color=STR_FG_TEXT_COLOR;
		//tabs[i].style.fontWeight="bold";
		tabs[i].align="center";
		
		if(navigator.appName=="Microsoft Internet Explorer"){
			tabs[i].attachEvent("onmouseover",turnOn);
			tabs[i].attachEvent("onmouseout",turnOff);
			tabs[i].attachEvent("onclick",callback_switcher);
		}
		else{
			tabs[i].addEventListener("mouseover",turnOn,false);
			tabs[i].addEventListener("mouseout",turnOff,false);
			tabs[i].addEventListener("mousedown",callback_switcher,false);			
		}
	}
	
	g=document.createElement("img");
	g.src="http://www.google.com/intl/en/images/logo.gif";

	var winwidth = window.document.width || window.document.body.clientWidth;
	
	nav_fg_div=document.createElement("div");
	nav_fg_div.style.position="absolute";
	nav_fg_div.style.top=0;
	nav_fg_div.style.width=W_NAV;
	nav_fg_div.style.height=60;
	nav_fg_div.style.backgroundColor="FFFFFF";
	
	nav_in_div=document.createElement("div");
	nav_in_div.style.position="absolute";
	nav_in_div.appendChild(tabTable);
	nav_in_div.style.top=20;
	nav_in_div.style.width=W_NAV;
	nav_in_div.style.height=20;
	nav_in_div.style.backgroundColor="FFFFFF";

	nav_bg_div=document.createElement("div");
	nav_bg_div.style.position="absolute";
	nav_bg_div.style.top=5;
	nav_bg_div.style.width=W_NAV;
	nav_bg_div.style.height=60;
	nav_bg_div.style.left=5;
	nav_bg_div.style.backgroundColor="000000";
	
	total_div=document.createElement("div");
	total_div.style.position="absolute";
	total_div.style.top=NAV_TOP;
	total_div.style.width=W_NAV+5;
	total_div.style.height=65;
	total_div.style.left=(winwidth-W_NAV)/2.;
	total_div.style.backgroundColor=BG_COLOR;
	total_div.appendChild(nav_bg_div);
	total_div.appendChild(nav_fg_div);
	total_div.appendChild(nav_in_div);
	
	return(total_div);
}
function turnOffAll(e){
/*
	var tgt=document.getElementById("configureTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
	tgt=document.getElementById("generate keyTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
	tgt=document.getElementById("generate puzzleTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
	tgt=document.getElementById("generate hintsTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
	tgt=document.getElementById("aboutTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
*/
	/*
	tgt=document.getElementById("homeTab");
	tgt.style.backgroundColor=STR_BG_COLOR;
	*/
}
function turnOn(e){
	if(navigator.appName=="Microsoft Internet Explorer"){
		x=window.event.srcElement.id;
		targ=document.getElementById(x);
	}
	else{
		x=e.target.id;
		targ=e.target;
	}
	turnOffAll();
	targ.style.backgroundColor=STR_ACCENT_COLOR;
}
function turnOff(e){
	if(navigator.appName=="Microsoft Internet Explorer"){
		x=window.event.srcElement.id;
		targ=document.getElementById(x);
	}
	else{
		x=e.target.id;
		targ=e.target;
	}
	targ.style.backgroundColor=STR_BG_COLOR;
}
function callback_switcher(e){
	if(navigator.appName=="Microsoft Internet Explorer"){
		x=window.event.srcElement.id;
		targ=document.getElementById(x);
	}
	else{
		x=e.target.id;
		targ=e.target;
	}
		
	for(idx=0;idx<tabLabelNames.length;idx++){
		if(targ.firstChild.data==tabLabelNames[idx]){
			cmd=cbNames[idx]+"()";
		}
	}
	eval(cmd);
}
