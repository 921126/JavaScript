
    //익명함수
    var a = function(){
        console.log('a 함수');
    }

    a();

    var b = function(x, y){
        return x +y;
    }

    console.log(b(1,2));

    console.log("---------------------------");

    //1. 익명함수로 변경해보기
    var method1 = function(x){

        if(x % 2 == 0){
            return '짝수';
        }else{
            return '홀수';
        }
    }

    console.log(method1(4));

    //2. 매개변수를 3개 받아서 평균을 반환하는 익명함수를 선언.
    var method2 = function(x, y, z){
        return parseFloat((x+y+z)/3);
    }

    console.log(method2(75,80,90));

    console.log('-------------------------------');

    //즉시실행 함수
    (function(){
        console.log("즉시실행");
    })();

    (function(x, y, z){
        console.log("즉시실행", (X+y+z));
    })(1,2,3);



