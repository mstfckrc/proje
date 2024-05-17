"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type paramsType = {
  params: {
    asistanID: string;
  };
};

const page = ({ params }: paramsType) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  function geri() {
    router.back();
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    const konu = document.querySelector("#konu");
    const durum = document.querySelector("#durum");
    const tarih = document.querySelector("#tarih");
    const baslangic = document.querySelector("#başlangıç");
    const bitis = document.querySelector("#bitiş");
    
    console.log(
      name,
      lastname,
      konu.value,
      durum.value,
      tarih.value,
      baslangic.value,
      bitis.value
    );
  }

  return (
    <div className="min-h-screen bg-slate-600 p-8">
      <div className="flex flex-col w-4/5 bg-white p-24 rounded-lg m-auto">
        <button onClick={geri} className="text-left">
          Back
        </button>
        <h1 className="text-center font-extrabold text-2xl mt-10">
          Çağrı Ekle
        </h1>
        <div className="p-20 m-auto flex flex-col">
          <form
            onSubmit={(e: any) => {
              handleSubmit(e);
            }}
            className="flex flex-col gap-16"
          >
            <div className="mt-10 flex flex-row gap-10">
              <input
                type="text"
                className="border border-black w-1/2 rounded p-2"
                placeholder="Müşteri Adı"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                className="border border-black w-1/2 rounded p-2"
                placeholder="Müşteri Soyadı"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label htmlFor="konu" className="text-lg font-medium">
                Görüşme Konusu :
              </label>
              <select
                name="konu"
                id="konu"
                className="border p-2 border-black bg-gray-100 rounded-md"
              >
                <option value="1">Arıza</option>
                <option value="2">Talep</option>
                <option value="3">Bilgi</option>
              </select>
              <label htmlFor="durum" className="text-lg font-medium">
                Görüşme Durumu :
              </label>
              <select
                name="durum"
                id="durum"
                className="border p-2 border-black bg-gray-100 rounded-md"
              >
                <option value="1">Tamamlandı</option>
                <option value="2">Takip Ediliyor</option>
                <option value="3">Sorun Çözülemedi</option>
              </select>
            </div>
            <div className="flex flex-row">
              <div>
                <label htmlFor="tarih" className="text-lg font-medium">
                  Görüşme Tarihi :
                </label>
                <input
                  type="date"
                  name="tarih"
                  id="tarih"
                  className="border border-black"
                />
              </div>
              <div>
                <label htmlFor="başlangıç" className="text-lg font-medium">
                  Görüşme Başlama Saati :
                </label>
                <input
                  type="time"
                  name="başlangıç"
                  id="başlangıç"
                  className=""
                />
              </div>

              <div>
                <label htmlFor="bitiş" className="text-lg font-medium">
                  Görüşme Bitiş Saati :
                </label>
                <input type="time" name="bitiş" id="bitiş" className="" />
              </div>
            </div>
            <div className="m-auto mt-5">
              <button
                type="submit"
                className="bg-slate-600 px-20 py-4 rounded-xl text-white hover:bg-slate-500 transition"
              >
                Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
