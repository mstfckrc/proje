import Link from "next/link";

type paramsType = {
  params: {
    asistanID: string;
    ay: string;
  };
};
const page = ({ params }: paramsType) => {
  return (
    <div className="min-h-screen bg-slate-600 pt-24">
      <div className="flex flex-col w-4/5 bg-white p-24 rounded-lg m-auto">
        <Link href={`/asistan/${params.asistanID}/primler`} className="text-left">
          Back
        </Link>
        <h1 className="text-center font-extrabold text-lg">Asistan {params.asistanID}</h1>
        <h1 className="text-center font-extrabold text-lg">Ay {params.ay}</h1>
      </div>
    </div>
  );
};

export default page;
