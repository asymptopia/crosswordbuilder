/***************************************************************************

	Author			:Charles B. Cossé 
	
	Website			:http://www.asymptopia.org
	
	Email			:ccosse@asymptopia.org
					
	Copyright		:(C) 2001-2010 Asymptopia Software.
	
	Package			:Asymptopia Math Crossword Builder
	
	Version			:3.2
	
	License			:Gnu Public License (GPL)
	
 ***************************************************************************/

var W_help=null;
var H_help=null;
var TITLE_COLOR="5555FF";
var DESC_COLOR="FF6600";
var BULLET_COLOR="006600";

if(navigator.appName=="Microsoft Internet Explorer"){
	var W_help=550;
	var H_help=280;
}
else{
	var W_help=650;
	var H_help=700;
}
function setup_help_table(){
	
	ContactTable=document.createElement("table");
	ContactTable.cellPadding=10;
	ContactTable.cellSpacing=1;
	ContactTable.style.color=DESC_COLOR;
	ContactTable.style.backgroundColor="FFFFFF";
	ContactTable.style.fontSize="12px";
	
	title_row=ContactTable.insertRow(-1);
	title_cell=title_row.insertCell(0);
	title_cell.style.width=W_help;
	title_cell.align="center";
	
	cmd='txt='+prefix+'_instructionsTitle';
	eval(cmd);
	
	title_node=document.createTextNode(txt);
	underline=document.createElement("b");
	underline.appendChild(title_node);
	underline.style.color=TITLE_COLOR;
	title_cell.appendChild(underline);
	
	
	steps_row=ContactTable.insertRow(-1);
	steps_cell=steps_row.insertCell(0);
	steps_cell.style.width=W_help;
	steps_cell.align="left";
	desc=document.createElement("b");
	desc.style.color=DESC_COLOR;
	
	steps=new Array();
	cmd='txt='+prefix+'_helpSec1Title';
	eval(cmd);
	steps.push(txt);
	desc.appendChild(document.createTextNode(txt));

	steps_cell.appendChild(desc);
	list=document.createElement("ul");
	steps=new Array();
	
	cmd='txt='+prefix+'_helpSec1Step1Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec1Step2Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec1Step3Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec1Step4Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec1Step5Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec1Step6Txt';
	eval(cmd);
	steps.push(txt);

	for(var idx=0;idx<steps.length;idx++){
		bullet=document.createElement("li");
		bullet.style.color=BULLET_COLOR;
		bullet_txt=document.createTextNode(steps[idx]);
		bullet.appendChild(bullet_txt);
		list.appendChild(bullet);
	}
	steps_cell.appendChild(list);

	steps_row=ContactTable.insertRow(-1);
	steps_cell=steps_row.insertCell(0);
	steps_cell.style.width=W_help;
	steps_cell.align="left";
	desc=document.createElement("b");
	desc.style.color=DESC_COLOR;
	
	cmd='txt='+prefix+'_helpSec2Title';
	eval(cmd);
	desc.appendChild(document.createTextNode(txt));
	
	steps_cell.appendChild(desc);
	list=document.createElement("ul");
	steps=new Array();
	
	cmd='txt='+prefix+'_helpSec2Step1Txt';
	eval(cmd);
	
	steps.push(txt);
	for(var idx=0;idx<steps.length;idx++){
		bullet=document.createElement("li");
		bullet.style.color=BULLET_COLOR;
		bullet_txt=document.createTextNode(steps[idx]);
		bullet.appendChild(bullet_txt);
		list.appendChild(bullet);
	}
	steps_cell.appendChild(list);
	
	steps_row=ContactTable.insertRow(-1);
	steps_cell=steps_row.insertCell(0);
	steps_cell.style.width=W_help;
	steps_cell.align="left";
	desc=document.createElement("b");
	desc.style.color=DESC_COLOR;
	
	
	cmd='txt='+prefix+'_helpSec3Title';
	eval(cmd);
	desc.appendChild(document.createTextNode(txt));
	
	steps_cell.appendChild(desc);
	list=document.createElement("ul");
	steps=new Array();
	
	cmd='txt='+prefix+'_helpSec3Step1Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec3Step2Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec3Step3Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec3Step4Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec3Step5Txt';
	eval(cmd);
	steps.push(txt);
	cmd='txt='+prefix+'_helpSec3Step6Txt';
	eval(cmd);
	steps.push(txt);
//	cmd='txt='+prefix+'_helpSec3Step7Txt';
//	eval(cmd);
//	steps.push(txt);
	
	for(var idx=0;idx<steps.length;idx++){
		bullet=document.createElement("li");
		bullet.style.color=BULLET_COLOR;
		bullet_txt=document.createTextNode(steps[idx]);
		bullet.appendChild(bullet_txt);
		list.appendChild(bullet);
	}
	steps_cell.appendChild(list);
	
	var winwidth = window.document.width || window.document.body.clientWidth;
	
	help_container=document.createElement("div");
	help_container.style.backgroundColor=BG_COLOR;
	help_container.style.position="absolute";
	help_container.style.width=W_help+5;
	help_container.style.height=H_help+5;
	help_container.style.left=(winwidth-W_help)/2.;
	help_container.style.top=TOP;
	
	help_bg_div=document.createElement("div");
	help_bg_div.style.backgroundColor="000000";
	help_bg_div.style.position="absolute";
	help_bg_div.style.width=W_help
	help_bg_div.style.height=H_help
	help_bg_div.style.top=5;
	help_bg_div.style.left=5;
	
	help_div=document.createElement("div");
	help_div.style.backgroundColor="FFFFFF";
	help_div.style.position="absolute";
	help_div.style.width=W_help;
	help_div.style.height=H_help;
	help_div.appendChild(ContactTable);
	help_div.style.top=0;
	help_div.style.left=0;
	
	help_container.appendChild(help_bg_div);
	help_container.appendChild(help_div);
	
	return(help_container);
}
