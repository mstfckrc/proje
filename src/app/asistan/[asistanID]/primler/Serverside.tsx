import sql from "mssql";
import Link from "next/link";

async function Serverside({ asistanID }: any) {
  let allData: Array<object>;

  const config = {
    user: "sa",
    password: "1",
    server: "Mustafa\\SQLEXPRESS",
    database: "MUSTAFA",
    port: 1433,
    options: {
      instancename: "SQLEXPRESS",
      trustedconnection: true,
      trustServerCertificate: true,
    },
  };

  try {
    let pool = await sql.connect(config);

    let products = await pool
      .request()
      .query(`select * from AylikPrimListesi WHERE asistanID = ${asistanID}`);

    allData = products.recordset;

    console.log(allData);
  } catch (error) {
    console.log(error);
  }

  if (allData.length > 0) {
    return (
      <div className="flex flex-col">
        <Link
          href={`/asistan/${asistanID}/primler/itiraz/${allData[0].ay}`}
          className=" bg-slate-600 m-auto my-16 w-1/2 text-center text-white px-20 py-5 rounded-md hover:bg-slate-500 transition "
        >
          Son Ay İçin İtiraz Et
        </Link>

        <table className="">
          <tr>
            <th className="border p-5">Asistan</th>
            <th className="border p-5">Ay</th>
            <th className="border p-5">Prim Miktarı</th>
          </tr>
          {allData.map((data) => (
            <tr key={data}>
              <td className="border p-5">
                {data.asistanAdi + " " + data.asistanSoyadi}
              </td>
              <td className="border p-5">{data.ay}</td>
              <td className="border p-5">{data.primMiktari}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Serverside;
