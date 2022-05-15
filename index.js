//express 모듈 불러오기
const express = require("express");
//express 사용
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//임시 데이터
const users = [
    {id: 1, name: "kassy"},
    {id: 2, name: "jinny"},
    {id: 3, name: "kevin"},
    {id: 4, name: "ella"}
];

/**
 * =========================
 * GET Request
 * =========================
 */
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/users", (req, res) => {
    res.json({ok: true, users: users}); // json 형태로 결과를 반환
});

app.get("/api/users/user", (req, res) => {
    const user_id = req.query.user_id;  // queryString
    const user = users.filter(data => data.id == user_id);
    res.json({ok: true, user: user});

});
  
app.get("/api/users/:user_id", (req, res) => {
    const user_id = req.params.user_id;     // pathParameter
    const user = users.filter(data => data.id == user_id);
    res.json({ok: true, user: user});

});


/**
 * =========================
 * POST Request
 * =========================
 */


// http listen port 생성 서버 실행
app.listen(3000, () => console.log("Hello Node Project ! "));