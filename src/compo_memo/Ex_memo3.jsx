import React, { useMemo, useState } from 'react';

const user = [
  { id: 1, name: "Kim", active: false },
  { id: 2, name: "Lee", active: true },
  { id: 3, name: "Park", active: false }
]

const Ex_memo3 = () => {
  const [showActive, setShowActive] = useState(true)

  const filteredUsers = useMemo(() => {
    console.log("사용자 필터링 실행...")
    return user.filter(user => user.active === showActive)

  }, [showActive])

  return (
    <>
      <button onClick={() => setShowActive(a => !a)}>
        {showActive ? "비활성 " : "활성 "} <br />사용자 보기
      </button>
      <ul>
        {filteredUsers.map(u => (
          <li key={u.id}>{u.name}님은 {String(u.active)}</li>
        ))}
      </ul>

    </>
  );
};

export default Ex_memo3;