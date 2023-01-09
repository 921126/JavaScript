
    var data = [
        {id: 'aaa123', title: 'aaa', content:'a...'},
        {id: 'bbb123', title: 'bbb', content:'b...'},
        {id: 'ccc123', title: 'ccc', content:'c...'}
    ];

    //JS객체를 JSON문자열로 형변환
    var str = JSON.stringify(data);
    console.log(str);

    //JSON문자열을 JS객체로 형변환
    var obj = JSON.parse(str);
    console.log(obj);

    //단, 문자열을 객체로 변경할 때는 엄격한 규칙이있다.
    //key, value가 " " 처리여야 한다.
    // JSON.parse("{id: 'aaa123'}"); //err
    JSON.parse('{"id": "aaa123"}'); //OK

