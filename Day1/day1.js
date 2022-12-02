var data;

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
	var largest=0;
	var sum=0;
	//part 1
	data.forEach((element) => compare(element));
	
	function compare(item)
	{
		if(item=="")
			sum=0;
		else
			sum+=parseInt(item);
		if(sum>largest)
			largest=sum;
	}
	print(largest);
}

function part2()
{
	var topThree=[0,0,0];
	var groupData = parseGroupingData(data);
	
	function sum(dataGroup)
	{
		var sum = dataGroup.reduce((a, b) => parseInt(a) + parseInt(b), 0)
		updateTopThree(sum);
		
	}
	function updateTopThree(value)
	{
		if(value=="")
			return
		else
			value = parseInt(value)
		if(value>topThree[0])
		{
			topThree[2]=topThree[1];
			topThree[1]=topThree[0];
			topThree[0]=value;
		}
		else if (value>topThree[1])
		{
			topThree[2]=topThree[1];
			topThree[1]=value;
		}
		else if (value>topThree[2])
		{
			topThree[2]=value;
		}
	}
	
	groupData.forEach((element) => sum(element));
	print(topThree.reduce((a, b) => parseInt(a) + parseInt(b), 0));
}

function print(answer)
{
	document.getElementById("answer").innerHTML = answer;
}