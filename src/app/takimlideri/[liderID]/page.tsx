type paramsType = {
  params: {
    liderID: string;
  };
};

const page = ({ params }: paramsType) => {
  return (
    <div className="min-h-screen bg-slate-600 pt-24">
      <div className="w-4/5 bg-white p-40 rounded-lg m-auto">
        <h1>Takım Lideri {params.liderID}</h1>
        <h1>Asistanlarının primlerine yaptıkları itirazlar listesi menüsü</h1>
      </div>
    </div>
  );
};

export default page;
