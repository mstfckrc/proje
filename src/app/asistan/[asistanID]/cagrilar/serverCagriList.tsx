import sql from "mssql";

async function Serverside() {
  let allData: Array<object>;

  const config = {
    user: "sa",
    password: "1",
    server: "Mustafa\\SQLEXPRESS",
    database: "dukkan",
    port: 1433,
    options: {
      instancename: "SQLEXPRESS",
      trustedconnection: true,
      trustServerCertificate: true,
    },
  };

  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("select * from tblUrun");
    allData = products.recordset;
  } catch (error) {
    console.log(error);
  }

  if (allData.length > 0) {
    return (
      <table className="">
        <tr>
          <th className="border p-5">Ürün Adı</th>
          <th className="border p-5">Liste Fiyatı</th>
          <th className="border p-5">Stok Durumu</th>
        </tr>
        {allData.map((data) => (
          <tr key={data.urunKod}>
            <td className="border p-5">{data.urunAd}</td>
            <td className="border p-5">{data.listeFiyat}</td>
            <td className="border p-5">{data.stokDurum}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Serverside;
