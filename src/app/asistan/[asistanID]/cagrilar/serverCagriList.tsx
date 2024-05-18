import sql from "mssql";

async function Serverside({ asistanID }: any) {
  let allData: Array<object>;
  let asistanBilgi: Array<object>;

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
      .query("select * from AsistanCagriListesi");
    let asistan = await pool
      .request()
      .query(`select * from tblAsistan WHERE asistanID = ${asistanID}`);
    allData = products.recordset;
    asistanBilgi = asistan.recordset;
    console.log(asistanBilgi);
    console.log(allData);
  } catch (error) {
    console.log(error);
  }

  if (allData.length > 0) {
    return (
      <table className="">
        <tr>
          <th className="border p-5">Asistan</th>
          <th className="border p-5">Müşteri</th>
          <th className="border p-5">Tarih</th>
          <th className="border p-5">Başlangıç Saati</th>
          <th className="border p-5">Bitiş Saati</th>
        </tr>
        {allData.map((data) => (
          <tr key={data}>
            <td className="border p-5">
              {asistanBilgi[0].asistanAdi + " " + asistanBilgi[0].asistanSoyadi}
            </td>
            <td className="border p-5">
              {data.musteriAdi + " " + data.musteriSoyadi}
            </td>
            <td className="border p-5">{JSON.stringify(data.gorusmeTarihi)}</td>
            <td className="border p-5">
              {JSON.stringify(data.gorusmeBaslangicSaati)}
            </td>
            <td className="border p-5">
              {JSON.stringify(data.gorusmeBitisSaati)}
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Serverside;
