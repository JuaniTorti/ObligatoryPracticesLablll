import TableItem from "../tableItem/TableItem";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const compniesMapped = netIncomes.map((company, index) => (
  <TableItem key={index} brand={company.brand} income={company.income} /> //si no le agregaba el indice no funcionaba
));

const companiesAverageIncomes = //para calcular el promedio
  netIncomes.reduce((average, company) => {
    return average + company.income;
  }, 0) / netIncomes.length;

const Companies = () => {
  return (
    <>
      <table style={{ border: "2px solid black", width: "530px" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black", //estilo brindado por chatgpt
                padding: "8px",
                textAlign: "center",
              }}
            >
              Marcas
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
              }}
            >
              Ingresos Netos
            </th>
          </tr>
        </thead>
        <tbody>{compniesMapped}</tbody>
      </table>

      <p>
        El valor promedio de ingresos netos de todas las empresas es: $
        {companiesAverageIncomes.toFixed(2)}
      </p>
    </>
  );
};

export default Companies;
