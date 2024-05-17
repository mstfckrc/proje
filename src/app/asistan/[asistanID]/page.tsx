"use client";

import Link from "next/link";

type paramsType = {
  params: {
    asistanID: string;
  };
};

const page = ({ params }: paramsType) => {
  return (
    <div className="min-h-screen bg-slate-600 pt-24">
      <div className="w-4/5 bg-white p-32 rounded-lg m-auto">
        <Link href={`/`} className="text-left">
          Çıkış
        </Link>
        <h1 className="text-center font-extrabold text-lg">
          Asistan {params.asistanID}
        </h1>
        <div className="flex flex-row text-center pt-28 gap-10">
          <Link
            href={`/asistan/${params.asistanID}/cagrilar`}
            className="w-1/3 p-10 h-52 content-center bg-sky-950 rounded-md hover:bg-sky-800 text-white transition"
          >
            Müşteri Çağrı Listesi
          </Link>
          <Link
            href={`/asistan/${params.asistanID}/primler`}
            className="w-1/3 p-10 h-52 content-center bg-sky-950 rounded-md hover:bg-sky-800 text-white transition"
          >
            Aylık Prim Listesi
          </Link>
          <Link
            href={`/asistan/${params.asistanID}/itirazlar`}
            className="w-1/3 p-10 h-52 content-center bg-sky-950 rounded-md hover:bg-sky-800 text-white transition"
          >
            İtirazlar Listesi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
