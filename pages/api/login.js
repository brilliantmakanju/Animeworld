import { serialize } from "cookie";
import jwtDecode from "jwt-decode";

export default async function (req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    let data = await response.json();

    // if (response.status === 200) {
    const serialized = serialize("AnimeCastle",  data.access, {
      httpOnly: true,
      // secure: "development",
      sameSite: "strict",
      maxAge: 6000000,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    // console.log(serialized)
    res.status(200).json({message: "hrllo"})
    // }

    // const UID =
  }
}
