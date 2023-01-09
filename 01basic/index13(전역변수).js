

    //var변수의 유효범위는 함수이다.
    var num1 = 50; //전역변수
    if(true){
        var num2 = 100; //전역취급
    }
    console.log(num2);


    var num3 = 100; //전역변수
    function add(){
        var num4 = 200; //지역변수
    }

    // console.log(num4);
    
    //es6 - let변수, 중괄호 스코프
    let x1 = 100;
    if(true){
        let x2 = 200; //지역변수
    }
    console.log(x2);

    let x3 = 100; //전역변수
    function add2(){
        let x4 = 200; //지역변수
    }
    // console.log(x4);

    