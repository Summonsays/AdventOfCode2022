//thanks to https://stackoverflow.com/questions/13709482/how-to-read-text-file-in-javascript?noredirect=1&lq=1
var reader; //GLOBAL File Reader object for demo purpose only

    /**
     * Check for the various File API support.
     */
    function checkFileAPI() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            reader = new FileReader();
            return true; 
        } else {
            alert('The File APIs are not fully supported by your browser. Fallback required.');
            return false;
        }
    }

    /**
     * read text input
     */
    function readText(filePath, callbackFunction) {
        var output = ""; //placeholder for text output
        if(filePath.files && filePath.files[0]) {           
            reader.onload = function (e) {
                callbackFunction(readFile(e.target.result));
            };//end onload()
            reader.readAsText(filePath.files[0]);
        }//end if html5 filelist support
        else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
            try {
                reader = new ActiveXObject("Scripting.FileSystemObject");
                var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
                output = file.ReadAll(); //text contents of file
                file.Close(); //close file "input stream"
                return output;
            } catch (e) {
                if (e.number == -2146827859) {
                    alert('Unable to access local files due to browser security settings. ' + 
                     'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
                     'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
                }
            }       
        }
    }   
	function readFile(data)
	{
		return data.split(/\r?\n|\r|\n/g)
	}
	function parseGroupingData(data)
	{
		//input is array with one data per line, groups seperated by empty string
		var groupedArray = new Array();
		var temp = new Array();
		data.forEach((element) => {
			if(element!="")
				temp.push(element)
			else
			{
				groupedArray.push(temp);
				temp=new Array();
			}
			})
				groupedArray.push(temp);
		return groupedArray;
	}

    /**
     * display content using a basic HTML replacement
     */
    function displayContents(txt) {
        var el = document.getElementById('main'); 
        el.innerHTML = txt; //display output in DOM
    }   