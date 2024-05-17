import Link from "next/link";
import Serverside from "./serverCagriList";

type paramsType = {
  params: {
    asistanID: string;
  };
};

const page = ({ params }: paramsType) => {
  return (
    <div className="min-h-screen bg-slate-600 p-20">
      <div className="flex flex-col w-4/5 bg-white p-24 rounded-lg m-auto">
        <Link href={`/asistan/${params.asistanID}`} className="text-left">
          Back
        </Link>
        <h1 className="text-center font-extrabold text-lg">
          Asistan {params.asistanID}
        </h1>
        <Link
          href={`/asistan/${params.asistanID}/cagrilar/yenicagri`}
          className=" bg-slate-600 m-auto my-16 w-1/2 text-center text-white px-20 py-5 rounded-md hover:bg-slate-500 transition "
        >
          Yeni Çağrı
        </Link>
        <Serverside />
      </div>
    </div>
  );
};

export default page;
