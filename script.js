let Countdown = document.getElementById("btn");

     Countdown.addEventListener("click",  () => {


	setTimeout(() => {
		 console.log("10");
		Countdown.innerHTML = 10;

		setTimeout(() => {
			// console.log("9");
			Countdown.innerHTML = 9;
	
			setTimeout(() => {
				// console.log("8");
				Countdown.innerHTML = 8;
	
				setTimeout(() => {
					// console.log("7");
					Countdown.innerHTML = 7;
	
									
				   setTimeout(() => {
					// console.log("6");
					Countdown.innerHTML = 6;
	
					setTimeout(() => {
						// console.log("5");
						Countdown.innerHTML = 5;
	
						setTimeout(() => {
							// console.log("4");
							Countdown.innerHTML = 4;
	  
						 setTimeout(() => {
						//   console.log("3");
						  Countdown.innerHTML = 3;
	
						  setTimeout(() => {
							// console.log("2");
							Countdown.innerHTML = 2;
	
							setTimeout(() => {
								// console.log("1");
								Countdown.innerHTML = 1;
	
								setTimeout(() => {
									// console.log("HAPPY INDEPENDENCE DAY");
									Countdown.innerHTML = "HAPPY INDEPENDENCE DAY";
	
	                      },1000);
	               
					   },1000);
	
	                 },1000);
	
	               },1000);
	
	            },1000);
	
	          },1000);
	
	        },1000);
	
	      },1000);
	
	    },1000);
	
	 },1000);
	
},1000);
});