var alldata=new Object();
var nowdata=new Array(13);
var knnscore=new Array(956);

window.onload=function(){
	document.getElementById("code").value="";
	document.getElementById("mr").value="";
	document.getElementById("lmr").value="";
	document.getElementById("ymr").value="";
	document.getElementById("mc").value="";
	document.getElementById("yc").value="";
	document.getElementById("ym").value="";
	document.getElementById("lmc").value="";
	queryallfromdb("kmeanscentroid");
	queryallfromdb("testdata");
}

function queryallfromdb(target){
	$.ajax({
		type:"POST",
		url:"php/simpleml1_sql.php",
		data:{
			"targettable":target,
		},
		success:function(data){
			data=JSON.parse(data);
			alldata[target]=data;
		},
		error:function(){
			alert("發生錯誤 狀態:"+jqXHR.readyState + " "+jqXHR.status);
		},
		})
}

function testinput(){
	if (document.getElementById("code").value!=""&&
		document.getElementById("mr").value!=""&&
		document.getElementById("lmr").value!=""&&
		document.getElementById("ymr").value!=""&&
		document.getElementById("mc").value!=""&&
		document.getElementById("yc").value!=""&&
		document.getElementById("ym").value!=""&&
		document.getElementById("lmc").value!="")
		{
			if (document.getElementById("code").value>1100 &&
				document.getElementById("code").value<=9958 &&
				document.getElementById("mr").value>=1 &&
				document.getElementById("lmr").value>=1&&
				document.getElementById("ymr").value>=1&&
				document.getElementById("mc").value>=1&&
				document.getElementById("yc").value>=1) 
			{
				nowdata[0]=document.getElementById("code").value;
				nowdata[1]=document.getElementById("mr").value;
				nowdata[2]=document.getElementById("lmr").value;
				nowdata[3]=document.getElementById("ymr").value;
				nowdata[4]=document.getElementById("mc").value;
				nowdata[5]=document.getElementById("yc").value;
				nowdata[6]=document.getElementById("ym").value;
				nowdata[7]=document.getElementById("lmc").value;
				console.log(nowdata);
				return('success');
			}
			else{
				alert("請確認公司代號、當月營收、上月營收、去年當月營收、當月累計營收及去年累計營收資料是否正確");
			}
		}
		else{
			alert("請完整填寫上述表單!");
		}
}

function kmeans(){
	if (testinput()!="success") 
	{
		return;
	}
	else{
		var kscore=new Array(6);
		for(var j=0;j<=5;j++){
			var tempscore=0;
			for(var i=0;i<=7;i++)
			{
				if(i==0){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(9958-1101);
				}
				else if(i==1){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(621713098-21);					
				}
				else if(i==2){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(550890889-38);					
				}
				else if(i==3){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(681375475-56);					
				}
				else if(i==4){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(5276869462-7953);					
				}
				else if(i==5){
					tempscore += 1- Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(4642281058-13797);					
				}
				else{
					if(nowdata[i]==alldata["kmeanscentroid"][j][i+1]){
						tempscore++;
					}
				} 
			}
			kscore[j]=tempscore;
		}
		console.log(alldata);

		var nowcluster=kscore.indexOf(Math.max.apply(null,kscore))+1;
		console.log(nowcluster);
		document.getElementById("nowcluster").innerHTML=nowcluster;
		var nowkmeanspep=alldata["kmeanscentroid"][nowcluster-1][9];
		console.log(nowkmeanspep);
		document.getElementById("nowkmeanspep").innerHTML=nowkmeanspep;
		nowdata[8]=nowcluster;
		nowdata[9]=nowkmeanspep;
	}
}
function knn(){
	if(testinput()!="success")
	{
		return;
	}
	for (var j=0;j<=955;j++){
		var tempscore=0;
		for(var i=0;i<=7;i++)
			{
				if(i==0){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(9958-1101);
				}
				else if(i==1){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(621713098-21);					
				}
				else if(i==2){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(550890889-38);					
				}
				else if(i==3){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(681375475-56);					
				}
				else if(i==4){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(5276869462-7953);					
				}
				else if(i==5){
					tempscore += 1- Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(4642281058-13797);					
				}
				else{
					if(nowdata[i]==alldata["testdata"][j][i+1]){
						tempscore++;
					}
				} 
			}
	knnscore[j]=tempscore;
	}
	var nowknnid=knnscore.indexOf(Math.max.apply(null,knnscore))+1;
	document.getElementById("nowknnid").innerHTML=nowknnid;
	var nowknnpep=alldata["testdata"][nowknnid-1][9];
	document.getElementById("nowknnpep").innerHTML=nowknnpep;
	nowdata[10]=nowknnid;
	nowdata[11]=nowknnpep;
}
function crossanalysis(){
	var nowcapep="";
	if(testinput()!="success"){
		return;}
	if(!nowdata[8]){
		alert("請先進行kmeans");}
	else if(nowdata[8]==0){
		if(nowdata[6]=="小於0"){
			nowcapep="強烈大於0";}
	}
	else if(nowdata[8]==1){
		if(nowdata[6]=="小於0"){
			nowcapep="強烈大於0";}
	}
	else if(nowdata[8]==2){
		nowcapep="強烈大於0";
	}
	else if(nowdata[8]==3){
		nowcapep="強烈大於0";
	}
	else if(nowdata[8]==5){
		if(nowdata[6]=="大於0"){
			nowcapep="強烈小於0";}
	}
	if(!nowcapep){
		nowcapep="NONE";}
	document.getElementById("nowcafinal").innerHTML=nowcapep;
	nowdata[12]=nowcapep;
}
function sendresult(){
	if(nowdata[8]==""){
		alert("請先進行kmeans");
		return;
	}
	else if(nowdata[10]==""){
		alert("請先進行knn");
		return;
	}
	else  if(nowdata[12]==""){
		alert("請先進行交叉分析");
		return;
	}
	$.ajax({
	type:"POST",
	url:"php/savedata.php",
	data:{"nowdata":nowdata},
	success:function(){
		alert("儲存成功");
	},
	error:function(){
		alert("錯誤 readyState:"+jqXHR.readyState+" status"+jqXHR.status);
	},
});
}
function emptyInput(){
	nowdata.length=0;
	document.getElementById("code").value="";
	document.getElementById("mr").value="";
	document.getElementById("lmr").value="";
	document.getElementById("ymr").value="";
	document.getElementById("mc").value="";
	document.getElementById("yc").value="";
	document.getElementById("ym").value="";
	document.getElementById("lmc").value="";
	document.getElementById("nowcluster").innerHTML="";
	document.getElementById("nowkmeanspep").innerHTML="";
	document.getElementById("nowknnid").innerHTML="";
	document.getElementById("nowknnpep").innerHTML="";
	document.getElementById("nowcafinal").innerHTML="";
}