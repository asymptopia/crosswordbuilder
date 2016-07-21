/***************************************************************************

	Author			:Charles B. Cossé 
	
	Website			:http://www.asymptopia.org
	
	Email			:ccosse@asymptopia.org
					
	Copyright		:(C) 2001-2009 Asymptopia Software.
	
	Package			:Asymptopia Math Crossword Builder
	
	Version			:3.0
	
	License			:Gnu Public License (GPL)
	
 ***************************************************************************/

var author="Charles B. Cossé";
var company="Asymptopia Software | Software@theLimit";
var website="http://www.asymptopia.org";
var ptBRtranslator="Pt-Br Translation: Jorge Barros de Abreu";
var ptBRwebsite="http://usr.solar.com.br/~ficmatin";
var de_translator="Deutsch Translation: Ronny Standtke";
var de_website="http://pauker.sourceforge.net";
var et_translator="Estonian Translation: Jakob Jõgi";
var et_website="http://";

var LangOptions=new Array("\u4e2d\u6587","Deutsch","English","\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","Español","Estonian","Français","Italiano","Kiswahili","Português do Brasil","\u0420\u0443\u0441\u0441\u043a\u0438\u0439");
var LangPrefixes=new Array("cn","en","gr","et", "ptbr","it","de","sw","es","fr","ru");

var et_gbvalue="Genereeri!";
var ptbr_gbvalue="Generate!";
var en_gbvalue="Generate!";
var it_gbvalue="Crea!";
var de_gbvalue="Erzeugen";
var sw_gbvalue="Fanyiza!";
var es_gbvalue="Generate!";
var fr_gbvalue="Générer!";
var gr_gbvalue="\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03c4\u03b5!";
var cn_gbvalue="\u751f\u6210\uff01";
var ru_gbvalue="\u0421\u043e\u0437\u0434\u0430\u0442\u044c!";


var et_advise1value="Loobun! Sõnade paigutamine ruudustikku ebaõnnestus";
var ptbr_advise1value="Está havendo dificuldade para ajustar suas palavras à grade";
var en_advise1value="Bailing Out! There was difficulty fitting your words to the grid";
var it_advise1value="Abbandona! C'è stato un problema nell'inserimento delle parole nella griglia";
var de_advise1value="Gebe auf! Es gab Schwierigkeiten, Ihre Wörter in das Gitter einzupassen.";
var sw_advise1value="Bailing Out! There was difficulty fitting your words to the grid (need translation)";
var es_advise1value="Achicando Out! Hubo dificultad aplicables a sus palabras a la red";
var fr_advise1value="Acculer Out! Difficulté Il a été l'installation de vos paroles au réseau";
var gr_advise1value="\u03a5\u03c0\u03ae\u03c1\u03be\u03b5 \u03b4\u03c5\u03c3\u03ba\u03bf\u03bb\u03af\u03b1 \u03c3\u03c4\u03b7\u03bd \u03c4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03ae \u03c3\u03b1\u03c2 \u03bb\u03cc\u03b3\u03b9\u03b1 \u03bc\u03b5 \u03c4\u03bf \u03b4\u03af\u03ba\u03c4\u03c5\u03bf";
var cn_advise1value="\u767e\u9748\u8f38\u51fa\uff01\u6709\u56f0\u96e3\u7684\u8a71\uff0c\u4ee5\u9069\u5408\u60a8\u7684\u7db2\u683c";
var ru_advise1value="\u0422\u0430\u0440\u0442\u0430\u043b\u044c\u043d\u044b\u0439 Out! \u0411\u044b\u043b \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0430\u0448\u0438\u0445 \u0441\u043b\u043e\u0432 \u043a \u0441\u0435\u0442\u043a\u0435";


var et_advise2value="Sa ei vajutanud seadistusaknas \"Lisa\" nupule!";
var ptbr_advise2value="Você não pressionou o botão \"Adicionar\" no painel Configurar!";
var en_advise2value="You did not press the \"ADD\" button in the ConfigPanel!";
var it_advise2value="Non hai premuto il pulsante \"AGGIUNGI \" nel pannello di controllo!";
var de_advise2value="Sie haben den \"Hinzufügen\"-Knopf in den Einstellungen nicht gedrückt!";
var sw_advise2value="You did not press the \"ADD\" button in the ConfigPanel! (need translation)";
var es_advise2value="Usted no presione el \"ADD \" en el botón Configuración!";
var fr_advise2value="Vous n'avez pas la presse \"ajouter \" dans le ConfigPanel!";
var gr_advise2value="\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03c4\u03b5 \u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \" \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03c3\u03c4\u03b7\u03bd \u03b4\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03c0\u03ac\u03bd\u03b5\u03bb";
var cn_advise2value="\u4f60\u6c92\u6709\u6309\u4e0b \"\u5730\u5740\" \u6309\u9215ConfigPanel \uff01";
var ru_advise2value="\u0412\u044b \u043d\u0435 \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \" \u043a\u043d\u043e\u043f\u043a\u0438 \u0432 Configpanel!";


var et_nstr=new Array("null","üks","kaks","kolm","neli","viis","kuus","seitse","kaheksa","üheksa","kümme","üksteist","kaksteist","kolmteist","neliteist","viisteist","kuusteist","seitseteist","kaheksateist","üheksateist","kakskümmend","kakskümmendüks","kakskümmendkaks","kakskümmendkolm","kakskümmendneli","kakskümmendviis","kakskümmendkuus","kakskümmendseitse","kakskümmendkaheksa","kakskümmendüheksa","kolmkümmend","kolmkümmendüks","kolmkümmendkaks","kolmkümmendkolm","kolmkümmendneli","kolmkümmendviis","kolmkümmendkuus","kolmkümmendseitse","kolmkümmendkaheksa","kolmkümmendüheksa","nelikümmend","nelikümmendüks","nelikümmendkaks","nelikümmendkolm","nelikümmendneli","nelikümmendviis","nelikümmendkuus","nelikümmendseitse","nelikümmendkaheksa","nelikümmendüheksa","viiskümmend","viiskümmendüks","viiskümmendkaks","viiskümmendkolm","viiskümmendneli","viiskümmendviis","viiskümmendkuus","viiskümmendseitse","viiskümmendkaheksa","viiskümmendüheksa","kuuskümmend","kuuskümmendüks","kuuskümmendkaks","kuuskümmendkolm","kuuskümmendneli","kuuskümmendviis","kuuskümmendkuus","kuuskümmendseitse","kuuskümmendkaheksa","kuuskümmendüheksa","seitsekümmend","seitsekümmendüks","seitsekümmendkaks","seitsekümmendkolm","seitsekümmendneli","seitsekümmendviis","seitsekümmendkuus","seitsekümmendseitse","seitsekümmendkaheksa","seitsekümmendüheksa","kaheksakümmend","kaheksakümmendüks","kaheksakümmendkaks","kaheksakümmendkolm","kaheksakümmendneli","kaheksakümmendviis","kaheksakümmendkuus","kaheksakümmendseitse","kaheksakümmendkaheksa","kaheksakümmendüheksa","üheksakümmend","üheksakümmendüks","üheksakümmendkaks","üheksakümmendkolm","üheksakümmendneli","üheksakümmendviis","üheksakümmendkuus","üheksakümmendseitse","üheksakümmendkaheksa","üheksakümmendüheksa");
var ptbr_nstr=new Array("zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove","vinte","vinte-e-um","vinte-e-dois","vinte-e-três","vinte-e-quatro","vinte-e-cinco","vinte-e-seis","vinte-e-sete","vinte-e-oito","vinte-e-nove","trinta","trinta-e-um","trinta-e-dois","trinta-e-três","trinta-e-quatro","trinta-e-cinco","trinta-e-seis","trinta-e-sete","trinta-e-oito","trinta-e-nove","quarenta","quarenta-e-um","quarenta-e-dois","quarenta-e-três","quarenta-e-quatro","quarenta-e-cinco","quarenta-e-seis","quarenta-e-sete","quarenta-e-oito","quarenta-e-nove","cinqüenta","cinqüenta-e-um","cinqüenta-e-dois","cinqüenta-e-três","cinqüenta-e-quatro","cinqüenta-e-cinco","cinqüenta-e-seis","cinqüenta-e-sete","cinqüenta-e-oito","cinqüenta-e-nove","secenta","secenta-e-um","secenta-e-dois","secenta-e-três","secenta-e-quatro","secenta-e-cinco","secenta-e-seis","secenta-e-sete","secenta-e-oito","secenta-e-nove","setenta","setenta-e-um","setenta-e-dois","setenta-e-três","setenta-e-quatro","setenta-e-cinco","setenta-e-seis","setenta-e-sete","setenta-e-oito","setenta-e-nove","oitenta","oitenta-e-um","oitenta-e-dois","oitenta-e-três","oitenta-e-quatro","oitenta-e-cinco","oitenta-e-seis","oitenta-e-sete","oitenta-e-oito","oitenta-e-nove","noventa","noventa-e-um","noventa-e-dois","noventa-e-três","noventa-e-quatro","noventa-e-cinco","noventa-e-seis","noventa-e-sete","noventa-e-oito","noventa-e-nove");
var en_nstr=new Array("zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty","forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","sixty","sixty-one","sixty-two","sixty-three","sixty-four","sixty-five","sixty-six","sixty-seven","sixty-eight","sixty-nine","seventy","seventy-one","seventy-two","seventy-three","seventy-four","seventy-five","seventy-six","seventy-seven","seventy-eight","seventy-nine","eighty","eighty-one","eighty-two","eighty-three","eighty-four","eighty-five","eighty-six","eighty-seven","eighty-eight","eighty-nine","ninety","ninety-one","ninety-two","ninety-three","ninety-four","ninety-five","ninety-six","ninety-seven","ninety-eight","ninety-nine");
var it_nstr=new Array("zero","uno","due","tre","quattro","cinque","sei","sette","otto","nove","dieci","undici","dodici","tredici","quattordici","quindici","sedici","diciassette","diciotto","diciannove","venti","ventuno","ventidue","ventitre","ventiquattro","venticinque","ventisei","ventisette","ventotto","ventinove","trenta","trentuno","trentadue","trentatre","trentaquattro","trentacinque","trentasei","trentasette","trentotto","trentanove","quaranta","quarantuno","quarantadue","quarantatre","quarantaquattro","quarantacinque","quarantasei","quarantasette","quarantotto","quarantanove","cinquanta","cinquantuno","cinquantadue","cinquantatre","cinquantaquattro","cinquantacinque","cinquantasei","cinquantasette","cinquantotto","cinquantanove","sessanta","sessantuno","sessantadue","sessantatre","sessantaquattro","sessantacinque","sessantasei","sessantasette","sessantotto","sessantanove","settanta","settantuno","settantadue","settantatre","settantaquattro","settantacinque","settantasei","settantasette","settantotto","settantanove","ottanta","ottantuno","ottantadue","ottantatre","ottantaquattro","ottantacinque","ottantasei","ottantasette","ottantotto","ottantanove","novanta","novantuno","novantadue","novantatre","novantaquattro","novantacinque","novantasei","novantasette","novantotto","novantanove");
var de_nstr=new Array("null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn","zwanzig","einundzwanzig","zweiundzwanzig","dreiundzwanzig","vierundzwanzig","fünfundzwanzig","sechsundzwanzig","siebenundzwanzig","achtundzwanzig","neunundzwanzig","dreißig","einunddreißig","dreißig-zwei","dreiunddreißig","vierunddreißig","fünfunddreißig","sechsunddreißig","siebenunddreißig","achtunddreißig","neununddreißig","vierzig","einundvierzig","zweiundvierzig","dreiundvierzig","vierundvierzig","fünfundvierzig","sechsundvierzig","siebenundvierzig","achtundvierzig","vierzig-neun","fünfzig","einundfünfzig","zweiundfünfzig","dreiundfünfzig","vierundfünfzig","fünfundfünfzig","sechsundfünfzig","siebenundfünfzig","achtundfünfzig","neunundfünfzig","sechzig","einundsechzig","zweiundsechzig","dreiundsechzig","vierundsechzig","fünfundsechzig","sechsundsechzig","siebenundsechzig","achtundsechzig","neunundsechzig","siebzig","einundsiebzig","zweiundsiebzig","dreiundsiebzig","vierundsiebzig","siebzig-fünf","sechsundsiebzig","siebenundsiebzig","achtundsiebzig","neunundsiebzig","achtzig","einundachtzig","zweiundachtzig","dreiundachtzig","vierundachtzig","fünfundachtzig","sechsundachtzig","siebenundachtzig","achtundachtzig","neunundachtzig","neunzig","einundneunzig","zweiundneunzig","dreiundneunzig","vierundneunzig","fünfundneunzig","sechsundneunzig","siebenundneunzig","achtundneunzig","neunundneunzig");
var sw_nstr=new Array("mwanzo","moja","mbili","tatu","nne","tano","sita","saba","nane","tisa","kumi","kumi-na-moja","kumi-na-mbili","kumi-na-tatu","kumi-na-nne","kumi-na-tano","kumi-na-sita","kumi-na-saba","kumi-na-nane","kumi-na-tisa","ishirini","ishirini-na-moja","ishirini-na-mbili","ishirini-na-tatu","ishirini-na-nne","ishirini-na-tano","ishirini-na-sita","ishirini-na-saba","ishirini-na-nane","ishirini-na-tisa","thelathini","thelathini-na-moja","thelathini-na-mbili","thelathini-na-tatu","thelathini-na-nne","thelathini-na-tano","thelathini-na-sita","thelathini-na-saba","thelathini-na-nane","thelathini-na-tisa","arobaini","arobaini-na-moja","arobaini-na-mbili","arobaini-na-tatu","arobaini-na-nne","arobaini-na-tano","arobaini-na-sita","arobaini-na-saba","arobaini-na-nane","arobaini-na-tisa","hamsini","hamsini-na-moja","hamsini-na-mbili","hamsini-na-tatu","hamsini-na-nne","hamsini-na-tano","hamsini-na-sita","hamsini-na-saba","hamsini-na-nane","hamsini-na-tisa","sitini","sitini-na-moja","sitini-na-mbili","sitini-na-tatu","sitini-na-nne","sitini-na-tano","sitini-na-sita","sitini-na-saba","sitini-na-nane","sitini-na-tisa","sabini","sabini-na-moja","sabini-na-mbili","sabini-na-tatu","sabini-na-nne","sabini-na-tano","sabini-na-sita","sabini-na-saba","sabini-na-nane","sabini-na-tisa","themanini","themanini-na-moja","themanini-na-mbili","themanini-na-tatu","themanini-na-nne","themanini-na-tano","themanini-na-sita","themanini-na-saba","themanini-na-nane","themanini-na-tisa","tisini","tisini-na-moja","tisini-na-mbili","tisini-na-tatu","tisini-na-nne","tisini-na-tano","tisini-na-sita","tisini-na-saba","tisini-na-nane","tisini-na-tisa");
var es_nstr=new Array("zero","uno","dos","tres","cuatro","cinco","seis","seite","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidos","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve","treinta","treinta-y-uno","treinta-y-dos","treinta-y-tres","treinta-y-cuatro","treinta-y-cinco","treinta-y-seis","treinta-y-seite","treinta-y-ocho","treinta-y-nueve","cuarenta","cuarenta-y-uno","cuarenta-y-dos","cuarenta-y-tres","cuarenta-y-cuatro","cuarenta-y-cinco","cuarenta-y-seis","cuarenta-y-seite","cuarenta-y-ocho","cuarenta-y-nueve","cincuenta","cincuenta-y-uno","cincuenta-y-dos","cincuenta-y-tres","cincuenta-y-cuatro","cincuenta-y-cinco","cincuenta-y-seis","cincuenta-y-seite","cincuenta-y-ocho","cincuenta-y-nueve","sesenta","sesenta-y-uno","sesenta-y-dos","sesenta-y-tres","sesenta-y-cuatro","sesenta-y-cinco","sesenta-y-seis","sesenta-y-seite","sesenta-y-ocho","sesenta-y-nueve","setenta","setenta-y-uno","setenta-y-dos","setenta-y-tres","setenta-y-cuatro","setenta-y-cinco","setenta-y-seis","setenta-y-seite","setenta-y-ocho","setenta-y-nueve","ochenta","ochenta-y-uno","ochenta-y-dos","ochenta-y-tres","ochenta-y-cuatro","ochenta-y-cinco","ochenta-y-seis","ochenta-y-seite","ochenta-y-ocho","ochenta-y-nueve","noventa","noventa-y-uno","noventa-y-dos","noventa-y-tres","noventa-y-cuatro","noventa-y-cinco","noventa-y-seis","noventa-y-seite","noventa-y-ocho","noventa-y-nueve");
var fr_nstr=new Array("zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf","vingt","vingt-et-un","vingt-deux","vingt-trois","vingt-quatre","vingt-cinq","vingt-six","vingt-sept","vingt-huit","vingt-neuf","trente","trente-et-un","trente-deux","trente-trois","trente-quatre","trente-cinq","trente-six","trente-sept","trente-huit","trente-neuf","quarante","quarante-et-un","quarante-deux","quarante-trois","quarante-quatre","quarante-cinq","quarante-six","quarante-sept","quarante-huit","quarante-neuf","cinquante","cinquante-et-un","cinquante-deux","cinquante-trois","cinquante-quatre","cinquante-cinq","cinquante-six","cinquante-sept","cinquante-huit","cinquante-neuf","soixante","soixante-et-un","soixante-deux","soixante-trois","soixante-quatre","soixante-cinq","soixante-six","soixante-sept","soixante-huit","soixante-neuf","soixante-dix","soixante-et-onze","soixante-douze","soixante-treize","soixante-quatorze","soixante-quinze","soixante-seize","soixante-dix-sept","soixante-dix-huit","soixante-dix-neuf","quatre-vingt","quatre-vingt-un","quatre-vingt-deux","quatre-vingt-trois","quatre-vingt-quatre","quatre-vingt-cinq","quatre-vingt-six","quatre-vingt-sept","quatre-vingt-huit","quatre-vingt-neuf","quatre-vingt-dix","quatre-vingt-onze","quatre-vingt-douze","quatre-vingt-treize","quatre-vingt-quatorze","quatre-vingt-quinze","quatre-vingt-seize","quatre-vingt-dix-sept","quatre-vingt-dix-huit","quatre-vingt-dix-neuf");
var gr_nstr=new Array("\u03bc\u03b7\u03b4\u03ad\u03bd","\u03ad\u03bd\u03b1","\u03b4\u03cd\u03bf","\u03c4\u03c1\u03af\u03b1","\u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03c0\u03ad\u03bd\u03c4\u03b5","\u03ad\u03be\u03b9","\u03b5\u03c0\u03c4\u03ac","\u03bf\u03ba\u03c4\u03ce","\u03b5\u03bd\u03bd\u03ad\u03b1","\u03b4\u03ad\u03ba\u03b1","\u03ad\u03bd\u03c4\u03b5\u03ba\u03b1","\u03b4\u03ce\u03b4\u03b5\u03ba\u03b1","\u03b4\u03b5\u03ba\u03b1\u03c4\u03c1\u03af\u03b1","\u03b4\u03b5\u03ba\u03b1\u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03b4\u03b5\u03ba\u03b1\u03c0\u03ad\u03bd\u03c4\u03b5","\u03b4\u03b5\u03ba\u03b1\u03ad\u03be\u03b9","\u03b4\u03b5\u03ba\u03b1\u03b5\u03c0\u03c4\u03ac","\u03b4\u03b5\u03ba\u03b1\u03bf\u03ba\u03c4\u03ce","\u03b4\u03b5\u03ba\u03b1\u03b5\u03bd\u03bd\u03ad\u03b1","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9","atwenty-\u03ad\u03bd\u03b1","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03b4\u03cd\u03bf","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03c4\u03c1\u03af\u03b1","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03ad\u03be\u03b9","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03b5\u03c0\u03c4\u03ac","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9 \u03bf\u03ba\u03c4\u03ce","\u03b5\u03bd\u03bd\u03ad\u03b1","\u03b5\u03af\u03ba\u03bf\u03c3\u03b9","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1-\u03ad\u03bd\u03b1","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03c4\u03c1\u03af\u03b1","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03c4\u03c1\u03b9\u03ac\u03bd\u03c4\u03b1 \u03b5\u03bd\u03bd\u03ad\u03b1","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03ad\u03bd\u03b1","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03c4\u03c1\u03af\u03b1","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03c3\u03b1\u03c1\u03ac\u03bd\u03c4\u03b1 \u03b5\u03bd\u03bd\u03ad\u03b1","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03ad\u03bd\u03b1","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c4\u03c1\u03af\u03b1","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03b5\u03bd\u03bd\u03ad\u03b1 \u03c0\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03ad\u03bd\u03b1","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03c4\u03c1\u03b5\u03b9\u03c2","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b9\u03c2","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03b5\u03be\u03ae\u03bd\u03c4\u03b1 \u03b5\u03bd\u03bd\u03ad\u03b1","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03bc\u03af\u03b1","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03c4\u03c1\u03b5\u03b9\u03c2","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b9\u03c2","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03b5\u03bd\u03bd\u03ad\u03b1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ae\u03bd\u03c4\u03b1","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03ad\u03bd\u03b1","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03c4\u03c1\u03b5\u03b9\u03c2","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03bf\u03b3\u03b4\u03cc\u03bd\u03c4\u03b1 \u03b5\u03bd\u03bd\u03ad\u03b1","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03ad\u03bd\u03b1","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03b4\u03cd\u03bf","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c4\u03c1\u03b5\u03b9\u03c2","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c4\u03ad\u03c3\u03c3\u03b5\u03c1\u03b1","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03ad\u03be\u03b9","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03b5\u03c0\u03c4\u03ac","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03bf\u03ba\u03c4\u03ce","\u03b5\u03bd\u03b5\u03bd\u03ae\u03bd\u03c4\u03b1 \u03b5\u03bd\u03bd\u03ad\u03b1");
var cn_nstr=new Array("zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty","forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","sixty","sixty-one","sixty-two","sixty-three","sixty-four","sixty-five","sixty-six","sixty-seven","sixty-eight","sixty-nine","seventy","seventy-one","seventy-two","seventy-three","seventy-four","seventy-five","seventy-six","seventy-seven","seventy-eight","seventy-nine","eighty","eighty-one","eighty-two","eighty-three","eighty-four","eighty-five","eighty-six","eighty-seven","eighty-eight","eighty-nine","ninety","ninety-one","ninety-two","ninety-three","ninety-four","ninety-five","ninety-six","ninety-seven","ninety-eight","ninety-nine");
var ru_nstr=new Array("\u043d\u043e\u043b\u044c", "\u043e\u0434\u0438\u043d", "\u0434\u0432\u0430", "\u0442\u0440\u0438", "\u0447\u0435\u0442\u044b\u0440\u0435", "\u043f\u044f\u0442\u044c", "\u0448\u0435\u0441\u0442\u044c", "\u0421\u0435\u043c\u044c", "\u0432\u043e\u0441\u0435\u043c\u044c", "\u0434\u0435\u0432\u044f\u0442\u044c", "\u0434\u0435\u0441\u044f\u0442\u044c", "\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c", "\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c "," \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c "," \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043e\u0434\u0438\u043d "," \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0434\u0432\u0430 "," \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0442\u0440\u0438 "," \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0447\u0435\u0442\u044b\u0440\u0435 "," \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u043f\u044f\u0442\u044c "," \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0448\u0435\u0441\u0442\u044c "," \u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0441\u0435\u043c\u044c "," \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0432\u043e\u0441\u0435\u043c\u044c "," \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c \u0434\u0435\u0432\u044f\u0442\u044c "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u043e\u0434\u0438\u043d "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c -\u0434\u0432\u0430 "," \u0422\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0442\u0440\u0438 "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0447\u0435\u0442\u044b\u0440\u0435 "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u043f\u044f\u0442\u044c "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0448\u0435\u0441\u0442\u043e\u0439 "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0441\u0435\u043c\u044c "," \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0432\u043e\u0441\u0435\u043c\u044c "," \u0422\u0440\u0438\u0434\u0446\u0430\u0442\u044c \u0434\u0435\u0432\u044f\u0442\u044c "," \u0441\u043e\u0440\u043e\u043a ", "\u0441\u043e\u0440\u043e\u043a \u043e\u0434\u0438\u043d", "\u0441\u043e\u0440\u043e\u043a \u0434\u0432\u0430", "\u0441\u043e\u0440\u043e\u043a \u0442\u0440\u0438", "\u0441\u043e\u0440\u043e\u043a\u0430 \u0447\u0435\u0442\u044b\u0440\u0435\u0445", "\u0441\u043e\u0440\u043e\u043a \u043f\u044f\u0442\u044c", "\u0441\u043e\u0440\u043e\u043a \u0448\u0435\u0441\u0442\u044c", "\u0441\u043e\u0440\u043e\u043a \u0441\u0435\u043c\u044c", "\u0441\u043e\u0440\u043e\u043a \u0432\u043e\u0441\u0435\u043c\u044c", "\u0441\u043e\u0440\u043e\u043a \u0434\u0435\u0432\u044f\u0442\u044c "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u043e\u0434\u0438\u043d "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0432\u0430 "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0442\u0440\u0438 "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0447\u0435\u0442\u044b\u0440\u0435 "," \u041f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u043f\u044f\u0442\u044c "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0448\u0435\u0441\u0442\u044c "," \u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0441\u0435\u043c\u044c ", "\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0432\u043e\u0441\u0435\u043c\u044c", "\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0435\u0432\u044f\u0442\u044c", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u043e\u0434\u0438\u043d", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0432\u0430", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0442\u0440\u0438", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0447\u0435\u0442\u044b\u0440\u0435", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u043f\u044f\u0442\u044c", "\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0448\u0435\u0441\u0442\u044c "," \u0428\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0441\u0435\u043c\u044c "," \u0428\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0432\u043e\u0441\u0435\u043c\u044c "," \u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0435\u0432\u044f\u0442\u044c "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u043e\u0434\u0438\u043d "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0432\u0430 "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0442\u0440\u0438 "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0447\u0435\u0442\u044b\u0440\u0435 "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u043f\u044f\u0442\u044c "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0448\u0435\u0441\u0442\u043e\u0439 "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0441\u0435\u043c\u044c "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0432\u043e\u0441\u0435\u043c\u044c "," \u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0435\u0432\u044f\u0442\u044c "," \u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 "," \u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u043e\u0434\u0438\u043d "," \u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0432\u0430 "," \u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0442\u0440\u0438 ", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0447\u0435\u0442\u044b\u0440\u0435", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u043f\u044f\u0442\u044c", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0448\u0435\u0441\u0442\u044c", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0441\u0435\u043c\u044c", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0432\u043e\u0441\u0435\u043c\u044c", "\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442 \u0434\u0435\u0432\u044f\u0442\u044c", "\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e", "\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u043e\u0434\u0438\u043d", "\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0434\u0432\u0430 "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0442\u0440\u0438 "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0447\u0435\u0442\u044b\u0440\u0435 "," \u0414\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u043f\u044f\u0442\u044c "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0448\u0435\u0441\u0442\u044c "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0441\u0435\u043c\u044c "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0432\u043e\u0441\u0435\u043c\u044c "," \u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e \u0434\u0435\u0432\u044f\u0442\u044c ");

var et_mathColumns=new Array("Tehe","Reziim","Min","Max","Tegevus");
var ptbr_mathColumns=new Array("Compatibilidade","Modo","MinVal","MaxVal","Ação");
var en_mathColumns=new Array("Capability","Mode","MinVal","MaxVal","Action");
var it_mathColumns=new Array("Possibilità", "Modalità", "ValMin", "ValMax", "Azione");
var de_mathColumns=new Array("Fähigkeit", "Modus", "Minimum", "Maximum", "Aktion");
var sw_mathColumns=new Array("Nguvu","Mode","MinVal","MaxVal","Action");
var es_mathColumns=new Array("Capacidad","Mode","MinVal","MaxVal","Acción");
var fr_mathColumns=new Array("Capabilité","Modalité","MinVal","MaxVal","Action");
var gr_mathColumns=new Array("\u0399\u03ba\u03b1\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1", "\u03c4\u03c1\u03cc\u03c0\u03bf\u03c2", "\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf", "\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03b7", "\u0395\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1");
var cn_mathColumns=new Array("\u80fd\u529b","\u6a21\u5f0f","\u6700\u5c0f\u503c","\u6700\u9ad8\u503c","\u884c\u52d5");
var ru_mathColumns=new Array("\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438", "\u0420\u0435\u0436\u0438\u043c", "\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435", "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435", "\u0410\u043a\u0446\u0438\u044f");

var et_capabilities=new Array("Liitmine","Lahutamine","Korrutamine","Algebra","Murrud");
var ptbr_capabilities=new Array("adição", "subtração", "multiplicação", "álgebra", "frações");
var en_capabilities=new Array("addition","subtraction","multiplication","algebra","fractions");
var it_capabilities=new Array("addizione", "sottrazione", "moltiplicazione", "algebra", "frazioni");
var de_capabilities=new Array("Addition", "Subtraktion", "Multiplikation", "Algebra", "Brüche");
var sw_capabilities=new Array("taz","toa","kuzidisha","hesabu","sehemu");
var es_capabilities=new Array("addition","subtraction","multiplicación","álgebra","fracciones");
var fr_capabilities=new Array("addition","soustraction","multiplication","algèbre","fractions");
var gr_capabilities=new Array("\u0395\u03c0\u03b9\u03c0\u03bb\u03ad\u03bf\u03bd", "\u03b1\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7", "\u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03b1\u03c3\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd", "\u03ac\u03bb\u03b3\u03b5\u03b2\u03c1\u03b1", "\u03ba\u03bb\u03b1\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd");
var cn_capabilities=new Array("\u6b64\u5916","\u6e1b\u6cd5","\u4e58\u6cd5","\u4ee3\u6578","\u7d44\u5206");
var ru_capabilities=new Array("\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435", "\u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435", "\u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435", "\u0410\u043b\u0433\u0435\u0431\u0440\u0430", "\u0444\u0440\u0430\u043a\u0446\u0438\u0438");

var et_gbValue="Genereeri!";
var ptbr_gbValue="Gerar!";
var en_gbValue="Generate!";
var it_gbValue="Crea!";
var de_gbValue="Erzeugen";
var sw_gbValue="Fanyiza!";
var es_gbValue="Generate!";
var fr_gbValue="Générer!";
var gr_gbValue="\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03c4\u03b5!";
var cn_gbValue="\u7522\u751f!";
var ru_gbValue="\u0421\u043e\u0437\u0434\u0430\u0442\u044c!";

var et_formatLabelTxt="Formaat = Sõna:Vihje (Vajuta \"Lisa\" nupule, et lisada)";
var ptbr_formatLabelTxt="Formato = Palavra:Dica (Pressione o Botão Adicionar)";
var en_formatLabelTxt="Format = Word:Hint (Hit Add Button To Load)";
var it_formatLabelTxt="Formato = Parola:Definizione";
var de_formatLabelTxt="Format=Wort:Hinweis";
var sw_formatLabelTxt="Format = Word:Hint (Hit Add Button To Load)";
var es_formatLabelTxt="Palabra:Sugerencia(Hit botón Agregar para carga)";
var fr_formatLabelTxt="Mots:Signes (\"Ajouter\" pour charger)";
var gr_formatLabelTxt="\u03bb\u03ad\u03be\u03b7:\u03a3\u03c5\u03bc\u03b2\u03bf\u03c5\u03bb\u03ae (\u03a0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c6\u03bf\u03c1\u03c4\u03af\u03bf)";
var cn_formatLabelTxt="\u683c\u5f0f=\u8a5e\uff1a\u63d0\u793a\uff08\u9ede\u64ca\u8cfc\u8cb7\u6309\u9215\uff0c\u8ca0\u8f09\uff09";
var ru_formatLabelTxt="\u0424\u043e\u0440\u043c\u0430\u0442 = Word: \u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430";

var et_wordsLabelTxt="Sõnad:Vihjed selles tekstikastis on lisatud";
var ptbr_wordsLabelTxt="Palavras:Dicas nessa coluna foram inseridas";
var en_wordsLabelTxt="Words:Hints in this column have been loaded";
var it_wordsLabelTxt="Parole:Definizioni sono state caricate in questa colonna ";
var de_wordsLabelTxt="Wörter:Hinweise in dieser Rubrik wurden geladen";
var sw_wordsLabelTxt="Words:Hints in this column have been loaded";
var es_wordsLabelTxt="Palabras:Sugerencias en esta columna se han cargado";
var fr_wordsLabelTxt="Mots:Signes dans cette colonne ont été chargées";
var gr_wordsLabelTxt="\u039b\u03ad\u03be\u03b5\u03b9\u03c2: \u03a3\u03c5\u03bc\u03b2\u03bf\u03c5\u03bb\u03ad\u03c2 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7 \u03c3\u03c4\u03ae\u03bb\u03b7 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c6\u03bf\u03c1\u03c4\u03c9\u03b8\u03b5\u03af";
var cn_wordsLabelTxt="\u95dc\u9375\u8a5e\uff1a\u63d0\u793a\u5728\u672c\u5c08\u6b04\u4e2d\u5df2\u88dd";
var ru_wordsLabelTxt="\u042d\u0442\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0430 \u0431\u044b\u043b\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0430";

var et_addButtonTxt="Lisa";
var ptbr_addButtonTxt="Adicionar";
var en_addButtonTxt="Add";
var it_addButtonTxt="Aggiungi";
var de_addButtonTxt="Hinzufügen";
var sw_addButtonTxt="Tia Zaidi";
var es_addButtonTxt="Agregar";
var fr_addButtonTxt="Ajouter";
var gr_addButtonTxt="\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c4\u03c9";
var cn_addButtonTxt="\u6dfb\u52a0";
var ru_addButtonTxt="\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c";

var et_removeButtonTxt="Eemalda";
var ptbr_removeButtonTxt="Remover";
var en_removeButtonTxt="Remove";
var it_removeButtonTxt="Elimina";
var de_removeButtonTxt="Entfernen";
var sw_removeButtonTxt="Ondoa";
var es_removeButtonTxt="Eliminar";
var fr_removeButtonTxt="Supprimer";
var gr_removeButtonTxt="\u0391\u03c6\u03b1\u03b9\u03c1\u03ce";
var cn_removeButtonTxt="\u522a\u9664";
var ru_removeButtonTxt="\u0423\u0434\u0430\u043b\u0438\u0442\u044c";

var et_numRowsTxt="Ridade arv";
var ptbr_numRowsTxt="número de linhas";
var en_numRowsTxt="number of rows";
var it_numRowsTxt="numero di righe";
var de_numRowsTxt="Anzahl der Zeilen";
var sw_numRowsTxt="msafa ngapi";
var es_numRowsTxt="número de linhas";
var fr_numRowsTxt="nombre de lignes";
var gr_numRowsTxt="\u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03c4\u03c9\u03bd \u03b3\u03c1\u03b1\u03bc\u03bc\u03ce\u03bd";
var cn_numRowsTxt="\u884c\u6578";
var ru_numRowsTxt="\u0427\u0438\u0441\u043b\u043e \u0441\u0442\u0440\u043e\u043a";

var et_numColsTxt="Veergude arv";
var ptbr_numColsTxt="número de colunas";
var en_numColsTxt="number of columns";
var it_numColsTxt="numero di colonne";
var de_numColsTxt="Anzahl der Spalten";
var sw_numColsTxt="kwenda juu ngapi";
var es_numColsTxt="número de colunas";
var fr_numColsTxt="nombre de colonnes";
var gr_numColsTxt="\u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03c9\u03bd \u03c3\u03c4\u03b7\u03bb\u03ce\u03bd";
var cn_numColsTxt="\u5217\u6578";
var ru_numColsTxt="\u0427\u0438\u0441\u043b\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432";

var et_setButtonTxt="Rakenda";
var ptbr_setButtonTxt="Escolher";
var en_setButtonTxt="Set";
var it_setButtonTxt="Definisci";
var de_setButtonTxt="Festlegen";
var sw_setButtonTxt="Weka";
var es_setButtonTxt="Establecer";
var fr_setButtonTxt="Définir";
var gr_setButtonTxt="\u03c3\u03b5\u03c4";
var cn_setButtonTxt="\u9472";
var ru_setButtonTxt="\u041d\u0430\u0431\u043e\u0440";

var et_tabLabelNames=new Array("Seadista","Genereeri ristsõna","Genereeri ruudustik","Genereeri vihjed","Abi","Info");
var ptbr_tabLabelNames=new Array("configurar","gerar solução","gerar jogo","gerar dicas","ajuda","sobre");
var en_tabLabelNames=new Array("configure","generate key","generate puzzle","generate hints","help","about");
var it_tabLabelNames=new Array("configura", "crea schema", "crea puzzle", "definizioni", "help", "info");
var de_tabLabelNames=new Array("Einstellungen", "Schlüssel erzeugen", "Puzzle erzeugen", "Hinweise erzeugen", "Hilfe", "Über");
var sw_tabLabelNames=new Array("namna","fanyazi ufumbuzi","fanyazi zuzua","fanyazi mafumbo","saidia","juu ya");
var es_tabLabelNames=new Array("configure", "generar clave", "rompecabezas", "sugerencias", "ayuda", "sobre");
var fr_tabLabelNames=new Array("configuration","générer légende","générer puzzle","générer signes","aide","auteur");
var gr_tabLabelNames=new Array("configure", "\u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03bf\u03cd\u03bd \u03ba\u03bb\u03b5\u03b9\u03b4\u03af", "\u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03bf\u03cd\u03bd \u03c0\u03b1\u03b6\u03bb", "\u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03bf\u03cd\u03bd \u03c3\u03c5\u03bc\u03b2\u03bf\u03c5\u03bb\u03ad\u03c2", "\u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1", "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5");
var cn_tabLabelNames=new Array("\u914d\u7f6e","\u7522\u751f\u7684\u95dc\u9375","\u751f\u6210\u4e4b\u8b0e","\u751f\u6210\u63d0\u793a","\u5e6b\u52a9","\u5927\u7d04");
var ru_tabLabelNames=new Array("\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430", "\u043e\u0442\u0432\u0435\u0442\u044b", "\u0437\u0430\u0433\u0430\u0434\u043a\u0430", "\u043d\u0430\u043c\u0435\u043a\u0438", "Help", "\u043e");

var et_minus="miinus";
var ptbr_minus="menos";
var en_minus="minus";
var it_minus="meno";
var de_minus="minus";
var sw_minus="toa";
var es_minus="menos";
var fr_minus="moins";
var gr_minus="\u03bc\u03b5\u03af\u03bf\u03bd";
var cn_minus="minus";
var ru_minus="\u043c\u0438\u043d\u0443\u0441";

var et_times="korda";
var ptbr_times="vezes";
var en_times="times";
var it_times="per";
var de_times="mal";
var sw_times="kwa";
var es_times="por";
var fr_times="fois";
var gr_times="\u03c6\u03bf\u03c1\u03ad\u03c2";
var cn_times="times";
var ru_times="\u0440\u0430\u0437";

var et_plus="pluss";
var ptbr_plus="mais";
var en_plus="plus";
var it_plus="più";
var de_plus="plus";
var sw_plus="na";
var es_plus="y";
var fr_plus="et";
var gr_plus="\u03c3\u03c5\u03bd";
var cn_plus="plus";
var ru_plus="\u043f\u043b\u044e\u0441";

var et_upvalue="Värskenda ruudustikku";
var ptbr_upvalue="Atualizar Jogo";
var en_upvalue="Update Puzzle";
var it_upvalue="Aggiorna Puzzle";
var de_upvalue="Puzzle aktualisieren";
var sw_upvalue="Fanyazi zuzua";
var es_upvalue="Atualizar Jogo";
var fr_upvalue="Mettre à jour le Puzzle";
var gr_upvalue="\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7 Puzzle";
var cn_upvalue="\u66f4\u65b0\u4e4b\u8b0e";
var ru_upvalue="\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0413\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0430";

var et_uhvalue="Värskenda vihjeid";
var ptbr_uhvalue="Atualizar Dicas";
var en_uhvalue="Update Hints";
var it_uhvalue="Aggiorna Definizioni";
var de_uhvalue="Hinweise aktualisieren";
var sw_uhvalue="Fanyazi mafumbo";
var es_uhvalue="Atualizar Dicas";
var fr_uhvalue="Mettre à jour les Signes";
var gr_uhvalue="\u0395\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7 \u03a3\u03c5\u03bc\u03b2\u03bf\u03c5\u03bb\u03ad\u03c2";
var cn_uhvalue="\u66f4\u65b0\u63d0\u793a";
var ru_uhvalue="\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438";

var et_acrossTitle="Paremale";
var ptbr_acrossTitle="Horizontais";
var en_acrossTitle="Across";
var it_acrossTitle="Orizzontale";
var de_acrossTitle="Horizontal";
var sw_acrossTitle="Horizontal";
var es_acrossTitle="Horizontal";
var fr_acrossTitle="Horizontal";
var gr_acrossTitle="\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03b1";
var cn_acrossTitle="\u6a6b\u904e";
var ru_acrossTitle="\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f";

var et_downTitle="Alla";
var ptbr_downTitle="Verticais";
var en_downTitle="Down";
var it_downTitle="Verticale";
var de_downTitle="Vertikal";
var sw_downTitle="Vertical";
var es_downTitle="Vertical";
var fr_downTitle="Vertical";
var gr_downTitle="\u039a\u03b1\u03c4\u03b1\u03ba\u03cc\u03c1\u03c5\u03c6\u03b7";
var cn_downTitle="\u5411\u4e0b\u7684";
var ru_downTitle="\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435";

