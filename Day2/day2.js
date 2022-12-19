var data;

class RPSMatch {
	#totalScore=0;
	constructor(inputLine,day)
	{
		if(day==1)
		{
			this.opponent=this.scoreDay1(inputLine[0]);
			this.me=this.scoreDay1(inputLine[2]);
		}
		else
		{
			this.opponent=this.scoreDay1(inputLine[0]);
			this.me = this.scoreDay2(this.opponent, inputLine[2])
		}
	}
	scoreDay1(gesture){
		switch(gesture)
		{
			//Rock
			case "A":
			case "X":
				return 1;
			//Paper
			case "B":
			case "Y":
				return 2;
			//Scissors
			case "C":
			case "Z":
				return 3;
		}
	}
	scoreDay2(gesture, outcome){
		switch(outcome)
		{
			//Lose
			case "X":
			{
				if(gesture==1)
					return 3;
				if(gesture==2)
					return 1;
				return 2;
			}
			//draw
			case "Y":
				return gesture;
			//Win
			case "Z":
			{
				if(gesture==1)
					return 2;
				if(gesture==2)
					return 3;
				return 1;
			}
		}
	}
	compare(){
		if(this.me==this.opponent)
			this.#totalScore+=3;
		else if(
			(this.me==1&&this.opponent==3)
			||(this.me==2 && this.opponent==1)
			||(this.me==3 && this.opponent==2)
		)
			this.#totalScore+=6;
		return this.me+this.#totalScore;
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
	data.forEach((element) => {
		total += new RPSMatch(element,1).compare();
		console.log(total);
	}
		);
		
	print(total);
}

function part2()
{
	let total=0;
	data.forEach((element) => {
		total += new RPSMatch(element,2).compare();
		console.log(total);
	}
		);
		
	print(total);
}

function print(answer)
{
	document.getElementById("answer").innerHTML = answer;
}