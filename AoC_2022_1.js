function solution (input){
  var elfs = input.split('\n\n')
	var biggestElf = 0
	var secondBiggestElf = 0
	var thirdBiggestElf = 0
	elfs.forEach (function (elf,index,array) {
		var elf = parseInt(elf.split('\n')
		.reduce((a,b) => parseInt(a) + (b != ""? parseInt(b) : 0))
		)
		if (biggestElf < elf)
			biggestElf = elf
		else if (secondBiggestElf < elf)
			secondBiggestElf = elf
		else if (thirdBiggestElf < elf)
			thirdBiggestElf = elf
	})
	console.log(biggestElf + secondBiggestElf + thirdBiggestElf)
}

solution(temp0.textContent)
