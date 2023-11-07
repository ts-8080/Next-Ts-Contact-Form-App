{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Context-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メール送信成功");
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Next-Ts-Gmail-App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            お名前
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            required
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            メールアドレス
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            メッセージ
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            placeholder="message"
            required
            ref={messageRef}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          メール送信
        </button>
      </form>
    </div>
  );
}
