
    //클로저
    //렉시칼 스코프 - 함수의 선언 위치에 따라서 상위 스코프를 결정한다.

    // var a = 1;
    // function x(){
    //     a = 10;
    //     console.log(a); //10
    // }

    // x();

    // var b = 1;
    // function y(){
    //     var b = 10;
    //     z();
    // }

    // function z(){
    //     console.log(b);
    // }

    // y(); //실행 값 1


    //클로저 - 내부함수를 이용해서 외부함수(a)의 변수의 접근할 수 있는 환경을 만들어준다.
    function func1(){ //외부함수
        var a = 1;

        //1st
        // var b = function(){
        //     return a;
        // }

        //2nd 내부함수
        return function(){
            return a;
        }


    } //a의 범위는 함수까지 이다.
    // console.log(a); err
    
    var result = func1();
    console.log(result); //내부함수 리턴
    var x = result();
    console.log(x); //a의 값 리턴

    console.log("------------------------------------------");


    //클로저가 아닌 상황
    // function compute(){
    //     var count = 0;
    //     return ++count;
    // }

    // console.log( compute() ); //1
    // console.log( compute() ); //1

    //클로저 환경
    function compute(){
        var count = 0;     //private 변수
        return function(){ //내부함수가 count의 값을 기억해서
            return ++count;//값이 1씩 상승함
        }
    }

    var result2 = compute(); //내부함수
    console.log(result2());
    console.log(result2());
    console.log(result2());

