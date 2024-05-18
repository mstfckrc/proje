import sql from "mssql";

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
      .query(`select * from AsistanItirazListesi`);

    allData = products.recordset;

    console.log(allData);
  } catch (error) {
    console.log(error);
  }

  if (allData.length > 0) {
    return (
      <div className="flex flex-col">
        <table className="mt-20">
          <tr>
            <th className="border p-5">İtiraz ID</th>
            <th className="border p-5">Asistan</th>
            <th className="border p-5">İtiraz Tarih</th>
            <th className="border p-5">İtiraz Açıklaması</th>
            <th className="border p-5">İtiraz Durum</th>
          </tr>
          {allData.map((data) => (
            <tr key={data}>
              <td className="border p-5">{data.itirazID}</td>
              <td className="border p-5">
                {data.asistanAdi + " " + data.asistanSoyadi}
              </td>
              <td className="border p-5">{JSON.stringify(data.itirazTarih)}</td>
              <td className="border p-5">{data.itirazAciklamasi}</td>
              <td className="border p-5">{data.itirazDurum}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Serverside;
