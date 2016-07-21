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
                          cwp_table_stuff.js

	Description: generates key,puzzle and hints pages

 ***************************************************************************/
var allow_disconnected=0;
var cells=null;
var rows=null;
var pcells=null;
var prows=null;
var across_list=new Array();
var down_list=new Array();
var HintDiv=null;
var success_label=document.createTextNode("");
var gbs;

CELLSIZE=30;


DEFAULT_STR="blank";
function update_success_string(){
	num_used=get_used().length;
	total=get_total();
	rval=num_used+"/"+total;
	return(rval);
}
function do_toggle(e){
	//alert("do_toggle");
	b=document.getElementById("allow_disconnected_button");
	if(allow_disconnected==0){
		allow_disconnected=1;
		b.checked=allow_disconnected;
	}
	else{
		allow_disconnected=0;
		b.checked=allow_disconnected;
	}
}
function do_fill(e){
	//make bag-of-letters from submitted words:
	used=get_used();
	words=get_words();
	fill=[];
	for(var uidx=0;uidx<used.length;uidx++)
		for(var cidx=0;cidx<used[uidx].length;cidx++)
			if(used[uidx].charAt(cidx)!=':')fill.push(used[uidx].charAt(cidx));
	
	for(var widx=0;widx<words.length;widx++)
		for(var cidx=0;cidx<words[widx].length;cidx++)
			if(words[widx].charAt(cidx)!=':')fill.push(words[widx].charAt(cidx));
	
	mrow=getMROW();
	ncol=getNCOL();
	for(midx=0;midx<mrow;midx++){
	for(nidx=0;nidx<ncol;nidx++){
		if(cells[midx][nidx].str=="blank"){
			cells[midx][nidx].removeChild(cells[midx][nidx].firstChild);
			ridx=Math.floor(Math.random()*fill.length)
			cells[midx][nidx].appendChild(MkPiece(fill[ridx],null));
		}
	}}
}
function make_generate_button_div(){
	gbt=document.createElement("table");
	
	gbr=gbt.insertRow(-1);
	gbx=gbr.insertCell(0);
	gbc=gbr.insertCell(1);
	gbs=gbr.insertCell(2);//gbs ~ "generate_button_success"
	gbs.style.width="40";
	gbs.style.fontWeight="bold";
	gbs.align="right";
	gbt.style.backgroundColor="AAAAAA";
	gbt.style.color="0000AA";
	gbt.style.fontSize="12px";
	
	gr0=document.createElement("input");
	gr0.title="\
Toggle after generating satisfactory layout to fill-in remainder with random letters thereby making a word search puzzle.\
	";
	gr0.id="word_search_fill"; 
	gr0.type="radio";
	gr0.checked=false;
	if(navigator.appName=="Microsoft Internet Explorer")gr0.attachEvent("onclick",do_fill);
	else gr0.addEventListener("click",do_fill,false);
	gbx.appendChild(gr0);
	
	gr1=document.createElement("input");
	gr1.title="\
Toggle to allow disconnected words at intermediate stages with the hope that they get connected by the end of the puzzle construction phase. \
This is an experimental feature and often leads to disconnected words at the end of the fitting algorithm. \
	";
	gr1.id="allow_disconnected_button"; 
	gr1.type="radio";
	gr1.checked=allow_disconnected;
	if(navigator.appName=="Microsoft Internet Explorer")gr1.attachEvent("onclick",do_toggle);
	else gr1.addEventListener("click",do_toggle,false);
	gbx.appendChild(gr1);

	gb=document.createElement("input");
	gb.title="\
Generate the puzzle key from the word:hint pairs which have been added to the right panel of the configuration interface.\
Note that you must push the \"add\" button to actually cause the application to ingest the words to be used.\
This step can be repeated until a satisfactory layout is achieved.\
This step must be done before the blank puzzle or puzzle hints can be generated, as those steps depend on the\
results of this step.\
	";
	gb.id="generate_button"; 
	gb.type="submit";//calls add_keyword_to_session
	if(navigator.appName=="Microsoft Internet Explorer")gb.attachEvent("onclick",generate);
	else gb.addEventListener("click",generate,false);
	
	cmd='gbValue='+prefix+'_gbValue';
	eval(cmd);
	
	gb.value=gbValue;
	gb.style.width="200";
	gbc.appendChild(gb);
	
	success_string=update_success_string();
	success_label=document.createTextNode("");
	success_label.appendData(success_string);
	gbs.appendChild(success_label);
	gbs.title="This label shows the fraction of words that were successfully fit to the puzzle.";
	
	div=document.createElement("div");
	div.style.position="absolute";
	div.style.top=TOP-2;
	div.appendChild(gbt);

	var winwidth = window.document.width || window.document.body.clientWidth;
	div.style.left=(winwidth-200)/2.-25;
	
	return(div);
}
function setup_cwp_table(m,n,cellsize,default_src,default_str,which_table){

	theTable=document.createElement("table");
	theTable.cellPadding="0";
	theTable.cellSpacing="0";
	theTable.style.backgroundColor="AAAAAA";
	theTable.style.color="0000AA";
	//theTable.align="center";
	
	xrows=new Array();
	xcells=new Array();
	for(midx=0;midx<m;midx++){
		xcells[midx]=new Array();
		xrows[midx]=theTable.insertRow(-1);
		xrows[midx].align="right";
		for(nidx=0;nidx<n;nidx++){
			xcells[midx][nidx]=xrows[midx].insertCell(nidx);
			xcells[midx][nidx].bgColor="AAAAAA";
			xcells[midx][nidx].setAttribute("height",cellsize);
			xcells[midx][nidx].setAttribute("width",cellsize);
			xcells[midx][nidx].left=nidx*cellsize;
			xcells[midx][nidx].top=midx*cellsize;
			xcells[midx][nidx].align="center";
			
			x=document.createElement("img");
			x.src=default_src;
			//document.images[default_str+"_"+midx+"_"+nidx]=x;
			//document.images["blank_"+midx+"_"+nidx]
			
			//if(midx==0 && nidx==0)alert(xcells[midx][nidx]);
			
			xcells[midx][nidx].appendChild(x);
			//if(navigator.appName=="Microsoft Internet Explorer")xcells[midx][nidx].appendChild(x);
			//else xcells[midx][nidx].appendChild(document.images[default_str+"_"+midx+"_"+nidx]);
			
			/*
			*/
			xcells[midx][nidx].str=default_str;
			xcells[midx][nidx].AMHEAD=0;
			xcells[midx][nidx].AMROWHEAD=0;
			xcells[midx][nidx].AMCOLHEAD=0;
			xcells[midx][nidx].AMCOL=0;
			xcells[midx][nidx].AMROW=0;
			xcells[midx][nidx].COL_WORD="";
			xcells[midx][nidx].ROW_WORD="";
			/**/
		}
	}
	
	div=document.createElement("div");
	div.style.position="absolute";
	div.style.position="absolute";
	div.style.top=TOP+30;
	
	var winwidth = window.document.width || window.document.body.clientWidth;
	div.style.left=(winwidth-CELLSIZE*n)/2.;
	
	div.appendChild(theTable);

	if(which_table==1){cells=xcells;rows=xrows;}
	else{pcells=xcells;prows=xrows;}
	return(div);
}
function make_update_puzzle_button_div(){
	upt=document.createElement("table");
	upr=upt.insertRow(-1);
	upc=upr.insertCell(0);
	//upt.align="center";
	upt.style.backgroundColor="AAAAAA";
	upt.style.color="0000AA";
	
	up=document.createElement("input");
	up.id="generate_button"; 
	if(navigator.appName=="Microsoft Internet Explorer")up.attachEvent("onclick",generate_puzzle);
	else up.addEventListener("click",generate_puzzle,false);
	//up.addEventListener("click",generate_puzzle,false);
	
	cmd='upvalue='+prefix+'_upvalue';
	eval(cmd);
	
	up.type="submit";//calls add_keyword_to_session
	up.title="Generate the blank puzzle after the key has been generated. After this you can generate the hints.";
	up.value=upvalue;
	up.style.width="200";
	upc.appendChild(up);
	
	div=document.createElement("div");
	div.style.position="absolute";
	div.style.top=TOP;
	
	var winwidth = window.document.width || window.document.body.clientWidth;
	div.style.left=(winwidth-200)/2.;
	
	div.appendChild(upt);
	return(div);
}
function make_update_hints_button_div(){
	uht=document.createElement("table");
	uht.cellPadding="1";
	uht.cellSpacing="1";
	uht.style.backgroundColor="AAAAAA";
	uht.style.color="0000AA";
	uht.style.width=200;
	
	uhr=uht.insertRow(-1);
	uhc=uhr.insertCell(0);
	
	cmd='uhvalue='+prefix+'_uhvalue';
	eval(cmd);

	uh=document.createElement("input");
	uh.title="Create the hints table corresponding to the key and puzzle which you have already generated.";
	uh.id="generate_button"; 
	uh.type="submit";//calls add_keyword_to_session
	uh.value=uhvalue;
	uh.style.width="200";
	uh.style.alighn="center";
	if(navigator.appName=="Microsoft Internet Explorer")uh.attachEvent("onclick",generate_hints);
	else uh.addEventListener("click",generate_hints,false);
	uhc.appendChild(uh);
	
	div=document.createElement("div");
	div.style.position="absolute";
	div.style.top=TOP;

	var winwidth = window.document.width || window.document.body.clientWidth;
	div.style.left=(winwidth-200)/2;
	div.appendChild(uht);
	return(div);
}

function get_rand_idx(){return(Math.floor(Math.random()*get_words().length));}
function reset_table(m,n){
	
	for(midx=0;midx<m;midx++){
		for(nidx=0;nidx<n;nidx++){
			cells[midx][nidx].removeChild(cells[midx][nidx].firstChild);
			x=document.createElement("img");
			x.src=DEFAULT_IMAGE;
			cells[midx][nidx].appendChild(x);
			cells[midx][nidx].str=DEFAULT_STR;
			cells[midx][nidx].AMHEAD=0;
			cells[midx][nidx].AMROWHEAD=0;
			cells[midx][nidx].AMCOLHEAD=0;
			cells[midx][nidx].AMROW=0;
			cells[midx][nidx].AMCOL=0;
			cells[midx][nidx].ROW_WORD=null;
			cells[midx][nidx].COL_WORD=null;
		}
	}
	for(midx=0;midx<m;midx++){
		for(nidx=0;nidx<n;nidx++){
			x=document.createElement("img");
			x.src=DEFAULT_IMAGE;
			try{
				pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
				pcells[midx][nidx].appendChild(x);
			}catch(e){;}
		}
	}
}
function advise1(){
	//update success label for last generation:
	gbs.removeChild(success_label);
	success_label=document.createTextNode(update_success_string());
	gbs.appendChild(success_label);
	
	cmd='advise1value='+prefix+'_advise1value';
	eval(cmd);
	alert(advise1value);
}
function advise2(){
	//update success label for last generation:
	gbs.removeChild(success_label);
	success_label=document.createTextNode(update_success_string());
	gbs.appendChild(success_label);

	cmd='advise2value='+prefix+'_advise2value';
	eval(cmd);
	alert(advise2value);
}
function MkPiece(uchar,lrcNumber){//à

	//The div is completely covered: 100% x 100%
	piece=document.createElement("div");
	piece.style.width=CELLSIZE.toString()+"px";
	piece.style.height=CELLSIZE.toString()+"px";
	piece.style.backgroundColor="#FF0000";
	piece.style.align="center";
//	piece.style.opacity=1./10.;
	
	//white
	fg=document.createElement("table");
	fg.style.width=(CELLSIZE).toString()+"px";//"100%";//
	fg.style.height=(CELLSIZE).toString()+"px";//"100%";//
	fg.align="center";
	fg.style.backgroundColor="#FFFFFF";//#006A46 #20A169
	fg.setAttribute("cellSpacing",0);
	fg.setAttribute("cellPadding",0);
	r0=fg.insertRow(-1);
	r0c0=r0.insertCell(-1);
//	r0c0.width="100%";//(CELLSIZE).toString()+"px";//
//	r0c0.height=(CELLSIZE).toString()+"px";//"100%";
	r0c0.align="center";
	r0c0.style.backgroundColor="#FFFFFF";
//	r0c0.style.foregroundColor="#00FFFF";

	//black
	ffg=document.createElement("table");
	ffg.style.width=(CELLSIZE-2).toString()+"px";//"100%";//
	ffg.style.height=(CELLSIZE-2).toString()+"px";//"100%";//
	ffg.align="center";
	ffg.style.backgroundColor="#00FFFF";//#006A46 #20A169
	ffg.setAttribute("cellSpacing",0);
	ffg.setAttribute("cellPadding",0);
	fr0=ffg.insertRow(-1);
	fr0c0=fr0.insertCell(-1);
	fr0c0.align="center";
	fr0c0.style.backgroundColor="#000000";

	//black
	fffg=document.createElement("table");
	fffg.style.width=(CELLSIZE-4).toString()+"px";//"100%";//
	fffg.style.height=(CELLSIZE-4).toString()+"px";//"100%";//
	fffg.align="center";
	fffg.style.backgroundColor="#0FFFFF";//#006A46 #20A169
	fffg.setAttribute("cellSpacing",0);
	fffg.setAttribute("cellPadding",0);
	ffr0=fffg.insertRow(-1);
	ffr0c0=ffr0.insertCell(-1);
	ffr0c0.align="center";
	ffr0c0.style.backgroundColor="#FFFFFF";

	fr0c0.appendChild(fffg)
	r0c0.appendChild(ffg);	
	
	
	f=document.createElement("font");
	if(lrcNumber){
	//	fontWeight="bold";
		fontSize="10px";
	//	f.style.fontWeight=fontWeight;
		f.style.fontSize=fontSize;
		f.style.color="#000000";
		dxx=document.createElement("div");
		dxx.style.width=(CELLSIZE-4).toString()+"px";
		dxx.style.height=(CELLSIZE-4).toString()+"px";
		dxx.style.backgroundColor="#FFFFFF";
		//dxx.style.position="absolute";
		ddxx=document.createElement("div");
		ddxx.appendChild(document.createTextNode(lrcNumber));
		ddxx.style.position="relative";
		ddxx.style.top=CELLSIZE/2;
		dxx.appendChild(ddxx);
		f.appendChild(dxx);
		ffr0c0.align="right";
	}
	else{
		fontWeight="bold";
		fontSize="20px";
	//	f.style.fontWeight=fontWeight;
		f.style.fontSize=fontSize;
		f.style.color="#000000";
		f.appendChild(document.createTextNode(uchar));
	}
	ffr0c0.appendChild(f);
	
	piece.appendChild(fg);
//	return fg;
	return piece;
}
function generate(){
	//cells.style.cursor = "wait";
	//cleanup tables & words:
	used2words();
	mrow=getMROW();
	ncol=getNCOL();
	try{reset_table(mrow,ncol);}
	//try{setup_cwp_table(getMROW(),getNCOL(),CELLSIZE,DEFAULT_IMAGE,DEFAULT_STR,1)}
	catch(ex){alert(ex);}	
	try{reset_table(getMROW(),getNCOL());}
	//try{setup_cwp_table(getMROW(),getNCOL(),CELLSIZE,DEFAULT_IMAGE,DEFAULT_STR,2)}
	catch(ex){alert(ex);}	
	
	start_with_row=Math.floor(Math.random()*2);
	if(get_words().length==0){advise2();return;}
	
	offset=4;

///SAFARI-UPSIDE-DOWN VERSION
	while(1){
		offset--;
		m=Math.floor(Math.random()+Math.random()*offset);
		n=Math.floor(Math.random()+Math.random()*offset);
		if(m<0){advise1();return}
		if(n<0){advise1();return}
		
		rand_idx=get_rand_idx();
		keyval=remove_word_by_index(rand_idx);
		submission=keyval.split(":",2)[0];
		
		//alert(submission.length);
		
		if(submission.length<1){
			add_to_words(keyval);
			submission=null;
			continue;
		}
		if(start_with_row){
			if(n+submission.length>cells[0].length){
				add_to_words(keyval);
				submission=null;
				continue;
			}
		}
		if(!start_with_row){
			if(m+submission.length>rows.length){
				add_to_words(keyval);
				submission=null;
				continue;
			}
		}
		if(submission)break;
	}
	for(var sidx=0;sidx<submission.length;sidx++){
		if(start_with_row){
			//if(submission.charAt(sidx)=="-"){cells[m][n+sidx].firstChild.src="images/dash.jpeg";}
			if(1){
				cells[m][n+sidx].removeChild(cells[m][n+sidx].firstChild);
				cells[m][n+sidx].appendChild(MkPiece(submission.charAt(sidx),null));
			}
			//alert(submission.slice(sidx:sidx+1));
			
			cells[m][n+sidx].str=submission.charAt(sidx);
			cells[m][n+sidx].AMROW=1;
			if(sidx==0){
				cells[m][n+sidx].AMHEAD=1;
				cells[m][n+sidx].AMROWHEAD=1;
				cells[m][n+sidx].ROW_WORD=submission;
			}
		}
		else{
			//if(submission.charAt(sidx)=="-"){cells[m+sidx][n].firstChild.src="images/dash.jpeg";}
			if(1){
				cells[m+sidx][n].removeChild(cells[m+sidx][n].firstChild);
				cells[m+sidx][n].appendChild(MkPiece(submission.charAt(sidx),null));
			}
			cells[m+sidx][n].str=submission.charAt(sidx);
			cells[m+sidx][n].AMCOL=1;
			if(sidx==0){
				cells[m+sidx][n].AMHEAD=1;
				cells[m+sidx][n].AMCOLHEAD=1;
				cells[m+sidx][n].COL_WORD=submission;
			}
		}
	}
	add_to_used(keyval);
	
	stuck=0;
	really_stuck=0;
	while(get_words().length>0){
		//alert(stuck+","+really_stuck+","+submission+","+words);
		rand_idx=get_rand_idx();
		keyval=remove_word_by_index(rand_idx);
		submission=keyval.split(":",2)[0];
		rval=localize(submission,really_stuck);
		//alert(submission+" "+rval);
		
		if(rval==1){
			add_to_used(keyval);
			stuck=0;
			really_stuck=0;
		}
		else{
			add_to_words(keyval);
			stuck++;
		}
		if(stuck>get_words().length*4){
			if(allow_disconnected==0)break;
			really_stuck++;
			if(really_stuck>get_words().length*2)break;	
		}
	}
	//alert("used="+used.length+", unused="+words.length);
	//alert(get_used()+":"+get_words());



	//update success label for last generation:
	gbs.removeChild(success_label);
	success_label=document.createTextNode(update_success_string());
	gbs.appendChild(success_label);
	//cells.style.cursor = "default";
	
	document.getElementById('word_search_fill').checked=false;
}

function localize(submission,really_stuck){
	//next: localize remaining...
	var hs=0;
	var m_hs=0;
	var n_hs=0;
	var rc_hs="row";
	var ok=0;
	var score;
	var dummy;
	//rows
	//alert(submission+": "+submission.length);
	for(var midx=0;midx<rows.length;midx++){
		for(var nidx=0;nidx<cells[0].length-submission.length;nidx++){
			//m,n candidate row head
			ok=1;
			score=0;
			
			if(nidx+submission.length>cells[0].length){ok=0;continue;}
			for(var sidx=0;sidx<submission.length;sidx++){
				if(cells[midx][nidx+sidx].str=="blank")dummy=99;
				else{
					if(cells[midx][nidx+sidx].str==submission.charAt(sidx))score=score+1;
					else ok=0;
				}
			}
			//print midx,nidx,ok,score
			if(ok==1 && score<submission.length){
				if(really_stuck>0){score++;}
				if(score>hs){
					if(check4conflict(submission,"row",midx,nidx)){
						hs=score;m_hs=midx;n_hs=nidx;rc_hs="row";
					}
				}
			}	
		}
	}
	//cols
	for(var midx=0;midx<rows.length-submission.length;midx++){
		if(midx+submission.length>rows.length)continue;
		for(var nidx=0;nidx<NCOL;nidx++){
			ok=1
			score=0
			for(var sidx=0;sidx<submission.length;sidx++){
				if(cells[midx+sidx][nidx].str=="blank")dummy=99;
				else{
					if(cells[midx+sidx][nidx].str==submission.charAt(sidx))score=score+1;
					else ok=0;
				}
			}
			//print midx,nidx,ok,score
			if(ok==1 && score<submission.length){
				if(really_stuck>0){score++;}
				if(score>hs){
					if(check4conflict(submission,"col",midx,nidx)){
						hs=score;m_hs=midx;n_hs=nidx;rc_hs="col";
					}
				}
			}	
		}
	}
	
	if(hs>0){
		//alert(rc_hs+" r="+m_hs+" c="+n_hs+", submission="+submission+" ok="+ok+" score="+score);
		for(var sidx=0;sidx<submission.length;sidx++){
			if(rc_hs=="row"){
				//if(submission.charAt(sidx)=="-"){cells[m_hs][n_hs+sidx].firstChild.src="images/dash.jpeg";}
				if(1){
					cells[m_hs][n_hs+sidx].removeChild(cells[m_hs][n_hs+sidx].firstChild);
					cells[m_hs][n_hs+sidx].appendChild(MkPiece(submission.charAt(sidx),null));
				}
				cells[m_hs][n_hs+sidx].str=submission.charAt(sidx);
				cells[m_hs][n_hs+sidx].AMROW=1;
				if(sidx==0){
					cells[m_hs][n_hs+sidx].AMHEAD=1;
					cells[m_hs][n_hs+sidx].AMROWHEAD=1;
					cells[m_hs][n_hs+sidx].ROW_WORD=submission;
					//alert("row "+m_hs+","+n_hs+" "+submission+" "+score);
				}
			}
			else{
				//if(submission.charAt(sidx)=="-"){cells[m_hs+sidx][n_hs].firstChild.src="images/dash.jpeg";}
				if(1){
					cells[m_hs+sidx][n_hs].removeChild(cells[m_hs+sidx][n_hs].firstChild);
					cells[m_hs+sidx][n_hs].appendChild(MkPiece(submission.charAt(sidx),null));
				}
				cells[m_hs+sidx][n_hs].str=submission.charAt(sidx);
				cells[m_hs+sidx][n_hs].AMCOL=1;
				if(sidx==0){
					cells[m_hs+sidx][n_hs].AMHEAD=1;
					cells[m_hs+sidx][n_hs].AMCOLHEAD=1;
					cells[m_hs+sidx][n_hs].COL_WORD=submission;
					//alert("col "+m_hs+","+n_hs+" "+submission+" "+score);
				}
			}
			//if(rc_hs=="row")board.set_row_head(m_hs,n_hs,len(submission));
			//else:board.set_col_head(m_hs,n_hs,len(submission));
		}
		return(1);
	}
	//if(really_stuck>0){
	//}
	return(submission);
}	
function check4conflict(submission,rcval,m,n){
	ok=1
	if(rcval=="row"){
		//check rows above and below;
		//above
		if(m>0){
			for(nidx=n;nidx<n+submission.length;nidx++){
				if(cells[m-1][nidx].str=="blank")dummy=99;
				else{
					if(cells[m][nidx].str==submission.charAt(nidx-n))dummy=99;
					else ok=0;
				}
			}
		}
		//below
		if(m<rows.length-1){
			for(nidx=n;nidx<n+submission.length;nidx++){
				if(cells[m+1][nidx].str=="blank")dummy=99;
				else{
					if(cells[m][nidx].str==submission.charAt(nidx-n))dummy=99;
					else ok=0;
				}
			}
		}
		//check row endpoints
		if(n>0){
			if(cells[m][n-1].str=="blank")dummy=99;
			else ok=0;
		}
		if(n+submission.length<cells[0].length){
			if(cells[m][n+submission.length].str=="blank")dummy=99;
			else ok=0;
		}
	}

	else if(rcval=="col"){
		//check cols left and right;
		//left	//left,up,down failed!
		if(n>0){
			for(midx=m;midx<m+submission.length;midx++){
				if(cells[midx][n-1].str=="blank")dummy=99;
				else{
					if(cells[midx][n].str==submission.charAt(midx-m))dummy=99;
					else ok=0;
				}
			}
		}
		//right
		if(n<cells[0].length-1){
			for(midx=m;midx<m+submission.length;midx++){
				if(cells[midx][n+1].str=="blank")dummy=99;
				else{
					if(cells[midx][n].str==submission.charAt(midx-m))dummy=99;
					else ok=0;
				}
			}
		}	
		//check col endpoints
		if(m>0){
			if(cells[m-1][n].str=="blank")dummy=99;
			else ok=0;
		}
		if(m+submission.length<rows.length){
			if(cells[m+submission.length][n].str=="blank")dummy=99;
			else ok=0;
		}
	}
	return(ok);
}
function clear_out_hints(){
	while(down_list.length>0){down_list.shift();}
	while(across_list.length>0){across_list.shift();}
	try{HintDiv.removeChild(HintTableDiv);}
	catch(ex){dummy=99;}
	delete(HintTableDiv);
}
function generate_puzzle(){
	
	down_counter=1;
	across_counter=1;
	clear_out_hints();
	
	for(var midx=0;midx<rows.length;midx++){
		for(var nidx=0;nidx<cells[0].length;nidx++){
			
			if(cells[midx][nidx].AMHEAD==1){
				
				if((cells[midx][nidx].AMROWHEAD==1) && (cells[midx][nidx].AMCOLHEAD==1)){//corner_head
					if(across_counter>=down_counter){
						down_counter=across_counter;
						
						//pcells[midx][nidx].firstChild.src="images/"+parseInt(across_counter)+".jpeg";
						pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
						pcells[midx][nidx].appendChild(MkPiece("",parseInt(across_counter)));
						
						across_list.push(parseInt(across_counter)+". "+get_hint_by_key(cells[midx][nidx].ROW_WORD));
						down_list.push(parseInt(down_counter)+". "+get_hint_by_key(cells[midx][nidx].COL_WORD));
						across_counter++;
						down_counter++
						//alert("section 1:\n"+across_list+"\n"+down_list);
					}
					else{//corner_head
						across_counter=down_counter;
						
						//pcells[midx][nidx].firstChild.src="images/"+parseInt(down_counter)+".jpeg";
						pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
						pcells[midx][nidx].appendChild(MkPiece("",parseInt(down_counter)));
						
						across_list.push(parseInt(across_counter)+". "+get_hint_by_key(cells[midx][nidx].ROW_WORD));
						down_list.push(parseInt(down_counter)+". "+get_hint_by_key(cells[midx][nidx].COL_WORD));
						down_counter++;
						across_counter++;
						//alert("section 2:\n"+across_list+"\n"+down_list);
					}
				}
				else{
					if(cells[midx][nidx].AMROWHEAD){//just_row_head
						
						//pcells[midx][nidx].firstChild.src="images/"+parseInt(across_counter)+".jpeg";
						pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
						pcells[midx][nidx].appendChild(MkPiece("",parseInt(across_counter)));
						
						across_list.push(parseInt(across_counter)+". "+get_hint_by_key(cells[midx][nidx].ROW_WORD));
						across_counter++;
						//alert("section 3:\n"+across_list+"\n"+down_list);
					}
					else{//just_col_head
						//pcells[midx][nidx].firstChild.src="images/"+parseInt(down_counter)+".jpeg";
						pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
						pcells[midx][nidx].appendChild(MkPiece("",parseInt(down_counter)));
						
						down_list.push(parseInt(down_counter)+". "+get_hint_by_key(cells[midx][nidx].COL_WORD));
						down_counter++;
						//alert("section 4:\n"+across_list+"\n"+down_list);
					}
				}
			}
			else{//AMHEAD==0
				if((cells[midx][nidx].AMROW==1) || (cells[midx][nidx].AMCOL)){
					//pcells[midx][nidx].firstChild.src="images/white.jpeg";
					pcells[midx][nidx].removeChild(pcells[midx][nidx].firstChild);
					pcells[midx][nidx].appendChild(MkPiece("",""));
						
					
				}
			}
		}
	}

//alert(across_list.length+","+down_list.length);
//alert(across_list);
//alert(down_list);
}

function setup_hints_table(){
	
	HintDiv=document.createElement("div");
	HintTitleTable=document.createElement("table");
	HintTitleTable.style.backgroundColor="AAAAAA";
	//HintTitleTable.align="center";
	HintTitleTable.style.fontSize="12px";
	
	TitleRow=HintTitleTable.insertRow(-1);
	
	accross_title_cell=TitleRow.insertCell(0);
	accross_title_cell.bgColor="AAAAAA";
	accross_title_cell.style.color="000000";
	//accross_title_cell.style.fontWeight="bold";
	accross_title_cell.style.width="200"; 
	accross_title_cell.align="center";
	
	cmd='acrossTitle='+prefix+'_acrossTitle';
	eval(cmd);
	cmd='downTitle='+prefix+'_downTitle';
	eval(cmd);
	
	accross_title_cell.appendChild(document.createTextNode(acrossTitle));
	down_title_cell=TitleRow.insertCell(1);
	down_title_cell.bgColor="AAAAAA";
	down_title_cell.style.color="000000";
	//down_title_cell.style.fontWeight="bold";
	down_title_cell.style.width="200"; 
	down_title_cell.align="center";
	down_title_cell.appendChild(document.createTextNode(downTitle));

	HintDiv.appendChild(HintTitleTable);
	HintDiv.style.position="absolute";
	HintDiv.style.top=TOP+30;

	var winwidth = window.document.width || window.document.body.clientWidth;
	HintDiv.style.left=(winwidth-400)/2.;

	return(HintDiv);
}
function generate_hints(){
	try{HintDiv.removeChild(HintTableDiv);}
	catch(ex){dummy=99;}
	//catch(ex){alert(ex);}
	HintTableDiv=null;
	
	HintTableDiv=document.createElement("div");
	HintTable=document.createElement("table");
	HintTable.style.backgroundColor="FFFFFF";
	//HintTable.align="center";
	
	ContentRow=HintTable.insertRow(-1);
	
	AcrossCell=ContentRow.insertCell(0);
	AcrossCell.align="left";
	AcrossCell.style.width="200";
	AcrossTable=document.createElement("table");
	AcrossCell.appendChild(AcrossTable);
	
	DownCell=ContentRow.insertCell(1);
	DownCell.align="left";
	DownCell.style.width="200";
	DownTable=document.createElement("table");
	DownCell.appendChild(DownTable);

	for(idx=0;idx<across_list.length;idx++){
		val=document.createTextNode(across_list[idx]+"\n");
		dummyRow=AcrossTable.insertRow(-1);
		dummyCell=dummyRow.insertCell(0);
		dummyCell.appendChild(val);
	}
	
	for(idx=0;idx<down_list.length;idx++){
		val=document.createTextNode(down_list[idx]+"\n");
		dummyRow=DownTable.insertRow(-1);
		dummyCell=dummyRow.insertCell(0);
		dummyCell.appendChild(val);
	}
	
	HintTableDiv.appendChild(HintTable);
	HintDiv.appendChild(HintTableDiv);
}
