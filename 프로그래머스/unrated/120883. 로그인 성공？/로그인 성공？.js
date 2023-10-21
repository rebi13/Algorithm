function solution(id_pw, db) {
    let result = "fail";
    let [id, pw] = id_pw;
    db.forEach(([db_id, db_pw]) => {
        if(db_id === id) {
            if(db_pw === pw) result = "login";
            else result = "wrong pw";
        }
    });
    return result;
}