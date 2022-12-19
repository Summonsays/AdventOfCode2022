var data;

class rucksack {
	//#compartment=0;
	constructor(inputLine)
	{
			let middle=inputLine.length/2;
			this.compartment1=inputLine.substr(0, middle);
			this.compartment2=inputLine.substr(middle);
	}
	
	compare(){
		let element="";
		for (var i = 0; i < this.compartment1.length; i++) {
			element = this.compartment1[i];
			if(this.compartment2.indexOf(element)>-1)
			{
				if(element.charCodeAt()-96<0)
					return element.charCodeAt()-38;
				else
					return element.charCodeAt()-96
			}
		  }
	}
}

class elfGroup{
	#badge = "";
	constructor(inputArray)
	{
		this.elf1 = new rucksack(inputArray[0]);
		this.elf2 = new rucksack(inputArray[1]);
		this.elf3 = new rucksack(inputArray[2]);
	}
	findBadge(){
		let elf1Total = this.elf1.compartment1+this.elf1.compartment2;
		let elf2Total = this.elf2.compartment1+this.elf2.compartment2;
		let elf3Total = this.elf3.compartment1+this.elf3.compartment2;
		return this.getCommonItems(this.getCommonItems(elf1Total, elf2Total),(elf3Total));		
	}

	getCommonItems(string1, string2)
	{
		let tempString ="";
		for (var i = 0; i < string1.length; i++) {
			if(string2.indexOf(string1[i])>-1)
			{
				if(tempString.indexOf(string1[i])==-1)
					tempString+=string1[i];
			}
		}
		if(tempString.length==1)
		{
			if(tempString.charCodeAt()-96<0)
				return tempString.charCodeAt()-38;
			else
				return tempString.charCodeAt()-96
		}
		return tempString;
	}
}
function loadData(filePath){
	if(checkFileAPI())
	{
		readText(filePath,solveData);
	}
}

function solveData(dataFromFile)
{
		data=dataFromFile;	
}

function part1()
{
	let total=0;
	let item =0;
	data.forEach((element) => {
		item = new rucksack(element).compare();
		if(item>0)
		total+=item;
		console.log(item);
	});
		
	print(total);
	
}

function part2()
{
	let group=[];
	let groups =[];
	let total=0;
	data.forEach((element, index) => {
		if(index%3==0)
		{
			group = [];
		}
		group.push(element);
		if(index%3==2)
		{
			groups.push(new elfGroup(group))
		}
	});
	
	groups.forEach((element)=>{
		total+=element.findBadge();
	})
	print(total);
}

function print(answer)
{
	document.getElementById("answer").innerHTML = answer;
}