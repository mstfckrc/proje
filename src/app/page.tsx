"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    const isAsistan = document.querySelector("#asistanRadio");
    if (isAsistan?.checked) {
      router.push(`/asistan/${id}`);
    } else {
      router.push(`/takimlideri/${id}`);
    }
  }
  return (
    <div className="min-h-screen bg-slate-600 p-32">
      <div className="w-4/5 bg-white p-20 rounded-lg m-auto">
        <form
          onSubmit={(e:any) => {
            handleSubmit(e);
          }}
          className="flex flex-col gap-10 items-center"
        >
          <input
            type="text"
            placeholder="ID"
            className="border border-black w-1/2 rounded p-3"
            id="id"
            value={id}
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
          <input
            type="text"
            className="border border-black w-1/2 rounded p-3"
            placeholder="İsim"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="border border-black w-1/2 rounded p-3"
            placeholder="Soyisim"
            id="lastname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <div className="flex flex-row gap-5">
            <div>
              <label htmlFor="asistan">Asistan </label>
              <input
                type="radio"
                value="asistan"
                name="tur"
                id="asistanRadio"
                defaultChecked
              />
            </div>
            <div>
              <label htmlFor="takimlideri">Takım Lideri </label>
              <input type="radio" value="takimlideri" name="tur" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-slate-600 text-white w-1/3 p-2 rounded-md hover:bg-slate-500 transition"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
