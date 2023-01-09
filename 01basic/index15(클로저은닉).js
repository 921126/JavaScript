
    function obj(){

        var name = "홍길동";
        
        //자바 getter 동일
        // return function(){
        //     return name;
        // }

        //자바 setter 동일
        // return function(aaa){
        // name = aaa;
        // }

        //getter,setter 통합
        return {
            getName: function(){
                return name;
            }

            ,setName: function(aaa){
                name = aaa;
            }
        }
    }


    // var getobj = obj();
    // console.log(getobj());

    // var setobj = obj();
    // setobj("오도도");

    var result = obj(); //obj반환
    result.setName("오도도"); //setter
    console.log( result.getName() ); //getter