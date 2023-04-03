		
		// parameter x,y
		// 같으면 곱, 다르면 합 return
		function sumMulti(x, y) {
			if (x == y) return x * y;
			else return x + y;
		}

		//argument 5,10 / 10,10
		console.log(sumMulti(5, 10));
		console.log(sumMulti(10, 10));