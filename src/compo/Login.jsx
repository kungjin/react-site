import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [agree, setAgree] = useState(false);

  const canSubmit = id.trim().length > 0 && pw.trim().length > 0 && agree;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    alert(`id=${id}, pw=${pw}`)
  }

  return (
    <div>
      <h2>LOGIN PAGE</h2>
      <form  onSubmit={onSubmit}>
        <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <input style={{marginTop: 20}}  type="password" placeholder="패스워드" value={pw} onChange={(e) => setPw(e.target.value) } 
        autoComplete="current-password"
        />
        
        <br />
        <label style={{marginTop: 20}}>
          <input type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          />
          <span>입력 내용을 확인했고 동의합니다.</span>

        </label>
        <br />
      <button style={{marginTop: 20}} disabled={!canSubmit}>로그인</button> 

      </form>
      <hr />
      <p>입력 확인용 → 아이디:{id} / 비번:{pw}</p>


    </div>
  );
}
