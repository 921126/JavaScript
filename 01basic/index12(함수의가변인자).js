
    function func1(x, y){
        //arguments 키워드를 이용해서 매개변수를 찾아서 이용 가능하다.
        console.log("매개변수의 길이:" + arguments.length);
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
        return x+y;
    }

    //매개변수 자체는 큰 의미가 없으며, 단순히 값에 이름을 붙이는 형태
    console.log(func1(1,));
    console.log(func1(1,2,));
    console.log(func1(1,2,3,4,5));
