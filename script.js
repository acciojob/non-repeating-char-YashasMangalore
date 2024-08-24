function firstNonRepeatedChar(str) {
 // Write your code here
	const freq={};

	for(let ch of str)
	{
		freq[ch]=(freq[ch]||0)+1;
	}

	for(let ch of str)
	{
		if(freq[ch]===1)
			return ch;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
