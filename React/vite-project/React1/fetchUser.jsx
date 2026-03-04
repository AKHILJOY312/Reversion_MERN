import { useEffect, useState } from "react";
import axios from "axios";
//   {
//     "id": 1,
//     "name": "Sonia Torphy",
//     "company": "Kassulke Inc",
//     "username": "Ted.Kilback36",
//     "email": "Garrison82@hotmail.com",
//     "address": "7912 Meadow Way",
//     "zip": "23995-1992",
//     "state": "Oregon",
//     "country": "Luxembourg",
//     "phone": "676-460-1072 x2496",
//     "photo": "https://json-server.dev/ai-profiles/43.png"
//   },
function App() {
  const [data, setData] = useState([]); //  Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://fake-json-api.mock.beeceptor.com/users", //  Trimmed URL
        );
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); //  Empty dependency array = run once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>List of Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              {" "}
              {/*  Unique key */}
              <td>{d.id}</td> {/*  Proper table cell */}
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
