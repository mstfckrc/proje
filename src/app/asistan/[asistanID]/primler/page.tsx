type paramsType = {
  params: {
    asistanID: string;
  };
};

const page = ({ params }: paramsType) => {
  return (
    <div className="min-h-screen bg-slate-600 pt-24">
      <div className="w-4/5 bg-white p-40 rounded-lg m-auto">
        <h1>Asistan {params.asistanID}</h1>
        <h1>Sistemde aktif olan asistana ait aylık prim listesi menüsü </h1>
      </div>
    </div>
  );
};

export default page;
