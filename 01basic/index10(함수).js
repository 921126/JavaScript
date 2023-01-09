

    func1(); //가능 ::  호이스팅
    var result = func2(); //함수의 return
    console.log(result);  //return 결과값 출력

    var result2 = func3(1,2,3);
    console.log(result2);

    function func1(){
        console.log('func1 실행');
    }

    function func2(){
        console.log('func2 실행');
        return 'func2의 반환';
    }

    function func3(a, b, c){
        console.log('func3 실행');
        return a + b+ c;
    }


    //선언적 함수를 변수에 저장
    var a = func1;
    console.log(a);

    a(); //변수에 저장된 함수를 사용하는 법