/***************************************************************************

	Author			:Charles B. Cossé 
	
	Website			:http://www.asymptopia.org
	
	Email			:ccosse@asymptopia.org
					
	Copyright		:(C) 2001-2010 Asymptopia Software.
	
	Package			:Asymptopia Math Crossword Builder
	
	Version			:3.2
	
	License			:Gnu Public License (GPL)
	
 ***************************************************************************/
/***************************************************************************
                          about_table_stuff.js

	Description: How to contact Asymptopia Software

 ***************************************************************************/
var W_ABOUT=null;
var H_ABOUT=null;
if(navigator.appName=="Microsoft Internet Explorer"){
	var W_ABOUT=400;
	var H_ABOUT=280;
}
else{
	var W_ABOUT=400;
	var H_ABOUT=280;
}


function setup_about_table(){
	
	ContactTable=document.createElement("table");
	ContactTable.cellPadding=0;
	ContactTable.cellSpacing=1;
	ContactTable.style.color="AAAAAA";
	ContactTable.style.backgroundColor="000000";
	ContactTable.style.fontSize="12px";
	
	
	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=company;
	f=document.createElement("font");
	f.style.fontWeight="bold";
	f.style.fontSize="14px";
	f.style.color="orange";
	name_node=document.createTextNode(txt);
	f.appendChild(name_node);
	name_cell.appendChild(f);

	address_row=ContactTable.insertRow(-1);
	address_cell=address_row.insertCell(0);
	address_cell.style.width=W_ABOUT;
	address_cell.align="center";
	txt=author;
	www=document.createElement("a");
	www.href="mailto:ccosse@asymptopia.org";
	address_node=document.createTextNode(txt);
	www.appendChild(address_node);
	address_cell.appendChild(www);

	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=website;
	www=document.createElement("a");
	www.href="http://www.asymptopia.org";
	www.appendChild(document.createTextNode(txt));
	name_cell.appendChild(www);

	anim_row=ContactTable.insertRow(-1);
	anim_cell=anim_row.insertCell(0);
	anim_cell.style.width=W_ABOUT;
	anim_cell.style.height=50;
	anim_cell.align="center";
	x=document.createElement("img");
	x.src="images/multigrid.gif";
	anim_cell.appendChild(x);

//ptBR translation credit
	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=ptBRtranslator;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);

	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=ptBRwebsite;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);
	

//de translation credit
	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=de_translator;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);

	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=de_website;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);
	
//et translation credit
	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=et_translator;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);
/*
	name_row=ContactTable.insertRow(-1);
	name_cell=name_row.insertCell(0);
	name_cell.style.width=W_ABOUT;
	name_cell.align="center";
	txt=et_website;
	name_node=document.createTextNode(txt);
	name_cell.appendChild(name_node);
*/
	
/*	
	email_row=ContactTable.insertRow(2);
	email_cell=email_row.insertCell(0);
	email_cell.style.width=W_ABOUT;
	email_cell.align="center";
	txt="ccosse@asymptopia.org";
	email_node=document.createTextNode(txt);
	email_cell.appendChild(email_node);
*/
	/*
	globe_row=ContactTable.insertRow(4);
	globe_cell=globe_row.insertCell(0);
	globe_cell.style.backgroundColor="white";
	globe_cell.style.width=W_ABOUT;
	globe_cell.style.height=127;
	globe_cell.align="center";
	x=new Image();
	x.src="asymptopia_globe.gif";
	globe_cell.appendChild(x);
	*/
	var winwidth = window.document.width || window.document.body.clientWidth;
	
	about_container=document.createElement("div");
	about_container.style.backgroundColor=BG_COLOR;
	about_container.style.position="absolute";
	about_container.style.width=W_ABOUT+5;
	about_container.style.height=H_ABOUT+5;
	about_container.style.left=(winwidth-W_ABOUT)/2.;
	about_container.style.top=TOP;
	
	about_bg_div=document.createElement("div");
	about_bg_div.style.backgroundColor="000000";
	about_bg_div.style.position="absolute";
	about_bg_div.style.width=W_ABOUT
	about_bg_div.style.height=H_ABOUT
	about_bg_div.style.top=5;
	about_bg_div.style.left=5;
	
	about_div=document.createElement("div");
	about_div.style.backgroundColor="FFFFFF";
	about_div.style.position="absolute";
	about_div.style.width=W_ABOUT;
	about_div.style.height=H_ABOUT;
	about_div.appendChild(ContactTable);
	about_div.style.top=0;
	about_div.style.left=0;
	
	//about_container.appendChild(about_bg_div);
	about_container.appendChild(about_div);
	
	return(about_container);
}
