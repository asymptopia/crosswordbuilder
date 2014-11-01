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
                          config_table_stuff.js

		Description: generates configuration panel

 ***************************************************************************/
var addition_words=-1;
var subtraction_words=-1;
var multiplication_words=-1;
var algebra_words=-1;
var fraction_words=-1;

var words=new Array();
var used=new Array();
var used2=new Array();
var keyvals=new Array();
var MROW=12;
var NCOL=19;
function getMROW(){return(MROW);}
function getNCOL(){return(NCOL);}
function setMN(e){
	mrow_area=document.getElementById("mrow_area");
	MROW=mrow_area.value;
	ncol_area=document.getElementById("ncol_area");
	NCOL=ncol_area.value;
	//alert(MROW+","+NCOL);
	recreate_cwp_table();
}
function get_total(){
	total=get_words().length+get_used().length;
	return(total);
}
function used2words(){
	while(used.length>0)words.push(used.pop());
	while(used2.length>0)words.push(used2.pop());
}
function add_word(word){
	words.push(word);
}
function get_used(){
	//alert("get_used:returning "+used);
	return(used);
}
function get_words(){
	//alert("get_words:returning "+words);
	return(words);
}
function remove_word_by_index(idx){
	for(var dummy=0;dummy<idx;dummy++){words.push(words.shift());}
	return(words.shift());
}
function add_to_words(word){
	words.push(word);
}
function add_to_used(word){
	used.push(word);
}
function remove_word_by_value(word){
	for(var dummy=0;dummy<words.length;dummy++){
		current=words.shift();
		//alert("shifted-off "+current+" words="+words);
		if(current==word){
			//alert("removed:"+current+" words="+words);
			return(current);
		}
		else words.push(current);
	}
	for(var dummy=0;dummy<used.length;dummy++){
		current=used.shift();
		//alert("shifted-off "+current+" used="+words);
		if(current==word){
			//alert("removed:"+current+" used="+words);
			return(current);
		}
		else words.push(current);
	}
	return(current);
}
function get_hint_by_key(key){
	var tmp;
	for(idx=0;idx<used.length;idx++){
		k=used[0].split(":",2)[0];
		
		//071608: handle mutliple ":" in hint
		split_used=used[0].split(":");
		v=split_used[1];
		if(split_used.length>=3){
			for(var sidx=2;sidx<split_used.length;sidx++){
				v+=":"+split_used[sidx];
			}
		}
		//old code ... delete in future
		//v=used[0].split(":",2)[1];
		//alert(used[0]+" "+v);
		
		tmp=used.shift()
		if(k==key){
			used2.push(tmp);
			return(v);
		}
		used.push(tmp);
	}
}
function recreate_cwp_table(){
	key_table_div=setup_cwp_table(getMROW(),getNCOL(),CELLSIZE,DEFAULT_IMAGE,DEFAULT_STR,1);
	puzzle_table_div=setup_cwp_table(getMROW(),getNCOL(),CELLSIZE,DEFAULT_IMAGE,DEFAULT_STR,2);
}
function setup_config_background(){
	div=document.createElement("div");
	div.style.position="absolute";
	div.style.top="40px";
	div.style.height="540px";
	div.style.width="880px";
	div.style.align="center";
	var winwidth = window.document.width || window.document.body.clientWidth;
	div.style.left=(winwidth-880)/2.;
	div.style.backgroundColor="000070";
	return(div);
}

function generate_addition(){
	xmin_area=document.getElementById("addition_minval_area");
	xmax_area=document.getElementById("addition_maxval_area");
	add_keyword_area=document.getElementById('add_keyword_area');
	xmin=Number(xmin_area.value);
	xmax=Number(xmax_area.value);
	range=xmax-xmin;
	if(range<0)return;
	
	//make an expression:
	ngen=0;
	n2gen=10;
	while(ngen<n2gen){
		//pick 2 #s in range
		n1=Math.floor(xmin+range*Math.random());
		n2=Math.floor(xmin+range*Math.random());
		val=n1+n2;
		
		cmd='plus='+prefix+'_plus';
		eval(cmd);
		
		if(val<99){
			if(addition_words>0)entry=nstr[val]+":"+nstr[n1]+" "+plus+" "+nstr[n2]+"\n";
			else entry=nstr[val]+":"+String(n1)+" + "+String(n2)+"\n";
			add_keyword_area.value=entry+add_keyword_area.value;
			ngen++;
		}
	}
}
function generate_subtraction(){
	xmin_area=document.getElementById("subtraction_minval_area");
	xmax_area=document.getElementById("subtraction_maxval_area");
	add_keyword_area=document.getElementById('add_keyword_area');
	xmin=Number(xmin_area.value);
	xmax=Number(xmax_area.value);
	range=xmax-xmin;
	if(range<0)return;
	
	//make an expression:
	ngen=0;
	n2gen=10;
	while(ngen<n2gen){
		//pick 2 #s in range
		n1=Math.floor(xmin+range*Math.random());
		n2=Math.floor(xmin+range*Math.random());
		val=n1-n2;
		
		cmd='minus='+prefix+'_minus';
		eval(cmd);
		
		if(val<99 && val>-1){
			if(subtraction_words>0)entry=nstr[val]+":"+nstr[n1]+" "+minus+" "+nstr[n2]+"\n";
			else entry=nstr[val]+":"+String(n1)+" - "+String(n2)+"\n";
			add_keyword_area.value=entry+add_keyword_area.value;
			ngen++;
		}
	}
}
function generate_multiplication(){
	xmin_area=document.getElementById("multiplication_minval_area");
	xmax_area=document.getElementById("multiplication_maxval_area");
	add_keyword_area=document.getElementById('add_keyword_area');
	xmin=Number(xmin_area.value);
	xmax=Number(xmax_area.value);
	range=xmax-xmin;
	if(range<0)return;
	
	//make an expression:
	ngen=0;
	n2gen=10;
	while(ngen<n2gen){
		//pick 2 #s in range
		n1=Math.floor(xmin+range*Math.random());
		n2=Math.floor(xmin+range*Math.random());
		val=n1*n2;
		
		cmd='times='+prefix+'_times';
		eval(cmd);
		
		if(val<99 && val>-1){
			if(multiplication_words>0)entry=nstr[val]+":"+nstr[n1]+" "+times+" "+nstr[n2]+"\n";
			else entry=nstr[val]+":"+String(n1)+" * "+String(n2)+"\n";
			add_keyword_area.value=entry+add_keyword_area.value;
			ngen++;
		}
	}
}
function generate_algebra(){
	xmin_area=document.getElementById("algebra_minval_area");
	xmax_area=document.getElementById("algebra_maxval_area");
	add_keyword_area=document.getElementById('add_keyword_area');
	xmin=Number(xmin_area.value);
	xmax=Number(xmax_area.value);
	range=xmax-xmin;
	if(range<0)return;
	
	//make an expression:
	ngen=0;
	n2gen=10;
	while(ngen<n2gen){
		//pick 2 #s in range
		n1=Math.floor(xmin+range*Math.random());
		n2=Math.floor(xmin+range*Math.random());
		if(algebra_words<0){
			val=n1+n2;
			if(val<99 && val>-1){
				if(Math.floor(2.*Math.random()))entry=nstr[n2]+":"+"x"+" + "+String(n1)+" = "+val+"\n";
				else entry=nstr[n2]+":"+String(n1)+" + "+" x "+" = "+val+"\n";
				ngen++;
				add_keyword_area.value=entry+add_keyword_area.value;
			}
		}
		else{
			val=n1-n2;
			if(val<99 && val>-1){
				if(Math.floor(2.*Math.random()))entry=nstr[n1]+":"+"x"+" - "+String(n2)+" = "+val+"\n";
				else entry=nstr[n2]+":"+String(n1)+" - "+" x "+" = "+val+"\n";
				ngen++;
				add_keyword_area.value=entry+add_keyword_area.value;
			}
			
		}
		
		
	}
}
function generate_fractions(){
	xmin_area=document.getElementById("fractions_minval_area");
	xmax_area=document.getElementById("fractions_maxval_area");
	add_keyword_area=document.getElementById('add_keyword_area');
	xmin=Number(xmin_area.value);
	xmax=Number(xmax_area.value);
	range=xmax-xmin;
	if(range<0)return;
	
	//make an expression:
	ngen=0;
	n2gen=10;
	var gcf,d,e;
	if(fraction_words>0){	
	while(ngen<n2gen){
		//alert("fraction_words="+fraction_words);
		a=0;
		d=0;
		f=0;
		c=0;
		while(a==0)
			a=Math.floor(xmin+range*Math.random());
		while(d==0)
			d=Math.floor(xmin+range*Math.random());
		while(f==0)
			f=d*Math.floor(1+range*Math.random());
		c=f/d*a;
		
		xidx=Math.floor(4*Math.random());
		if(xidx==0)		{xval=a;answ=nstr[a];a='x';}
		else if(xidx==1){xval=d;answ=nstr[d];d='x';}
		else if(xidx==2){xval=c;answ=nstr[c];c='x';}
		else if(xidx==3){xval=f;answ=nstr[f];f='x';}
		
		if(xval>=0 && xval<=99){
			entry=answ+":"+a+"/"+d+"="+c+"/"+f+"\n";
			add_keyword_area.value=entry+add_keyword_area.value;
			ngen++;	
		}
		
	}}
	else{
	while(ngen<n2gen){
		a=0;
		b=0;
		d=0;
		e=0;
		while(a==0)
			a=Math.floor(xmin+range*Math.random());
		while(b==0)
			b=Math.floor(xmin+range*Math.random());
		while(d==0)
			d=Math.floor(xmin+range*Math.random());
		while(e==0)
			e=Math.floor(xmin+range*Math.random());
		lcd=d*e;
		a3=a*lcd/d;
		b3=b*lcd/e;
		ops=['+','-','*'];
		idx=Math.floor(3*Math.random());
		op=ops[idx];
		
		if(op=='+'){
			c=a3+b3;
			f=lcd;
		}
		else if(op=='-'){
			c=a3-b3;
			f=lcd;
		}
		else if(op=='*'){
			c=a3*b3;
			f=lcd*lcd;
		}
		if(c<=f)minval=c;
		else minval=f;
		
		for(GCF=minval;GCF>0;GCF--){
			
			if(Math.floor(c/GCF)==c/GCF && Math.floor(f/GCF)==f/GCF){
				gcf=GCF;
				c=c/gcf;
				f=f/gcf;
				break;
			}
		}
		xidx=Math.floor(6*Math.random());
		if(xidx==0)		{xval=a;answ=nstr[a];a='x';}
		else if(xidx==1){xval=b;answ=nstr[b];b='x';}
		else if(xidx==2){xval=c;answ=nstr[c];c='x';}
		else if(xidx==3){xval=d;answ=nstr[d];d='x';}
		else if(xidx==4){xval=e;answ=nstr[e];e='x';}
		else if(xidx==5){xval=f;answ=nstr[f];f='x';}
		if(xval>=0 && xval<=99){
			entry=answ+":"+a+"/"+d+op+b+"/"+e+"="+c+"/"+f+"\n";
			add_keyword_area.value=entry+add_keyword_area.value;
			ngen++;	
		}
	}
	}//end else
}
function capability_toggle(e){
	if(navigator.appName=="Microsoft Internet Explorer"){
		x=window.event.srcElement.id;
		targ=document.getElementById(x);
	}
	else{
		x=e.target.id;
		targ=e.target;
	}
	if(x=="addition"){
		addition_words*=-1;
		if(addition_words<0)targ.checked=0;
		else targ.checked=1;
	}
	if(x=="subtraction"){
		subtraction_words*=-1;
		if(subtraction_words<0)targ.checked=0;
		else targ.checked=1;
	}
	if(x=="multiplication"){
		multiplication_words*=-1;
		if(multiplication_words<0)targ.checked=0;
		else targ.checked=1;
		}
	if(x=="algebra"){
		algebra_words*=-1;
		if(algebra_words<0)targ.checked=0;
		else targ.checked=1;
	}
	if(x=="fractions"){
		fraction_words*=-1;
		if(fraction_words<0)targ.checked=0;
		else targ.checked=1;
	}
}

//filter in add to ensure proper format=word:hint?
function add_entries(e){
	sel_keyword=document.getElementById('select_keywordlist');
	add_keyword_area=document.getElementById('add_keyword_area');
	txt=add_keyword_area.value;
	txt_array=txt.split('\n',1000);
	//alert(txt_array);
	for(var i=txt_array.length-1;i>-1;i--){
		if(navigator.appName=="Micorsoft Internet Explorer")txt_array[i]=txt_array[i].replace(/\s+/g,'');//stupid Microsoft doesn't handle newlines correctly!
		else txt_array[i]=txt_array[i].replace(/\s+/g,' ');
		if(txt_array[i]=='')continue;//This line is for Microsoft too! (without it, you get blanks added!)
		opt=document.createElement("option");
		opt.text=txt_array[i];
		opt.defaultSelected=1;
		opt.selected=0;
		words.push(opt.text);
		if(agent=="MSIE")sel_keyword.add(opt);
		else sel_keyword.add(opt,sel_keyword.options[0]);
	}
	add_keyword_area.value='';
}
function rem_entries(e){
	sel_keyword=document.getElementById('select_keywordlist');
	for(i=0;i<sel_keyword.options.length;i++){
		if(sel_keyword.options[i].selected){
			dummy=remove_word_by_value(sel_keyword.options[i].text);
			sel_keyword.options[i]=null;
			//should remove from words via pop!!
		}
	}
}
function remove_word_by_value(word){
	for(var dummy=0;dummy<words.length;dummy++){
		current=words.shift();
		//alert("shifted-off "+current+" words="+words);
		if(current==word){
			//alert("removed:"+current+" words="+words);
			return(current);
		}
		else words.push(current);
	}
	for(var dummy=0;dummy<used.length;dummy++){
		current=used.shift();
		//alert("shifted-off "+current+" used="+words);
		if(current==word){
			//alert("removed:"+current+" used="+words);
			return(current);
		}
		else words.push(current);
	}
	return(current);
}
