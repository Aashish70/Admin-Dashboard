import { CSVLink } from 'react-csv';

export const generateCSVLink = (data, headers) => { //data is the data to be downloaded and headers are the column headers
  return (
    <CSVLink
      data={data}
      headers={headers.map(header => ({ label: header.Header, key: header.accessor }))}
      filename="books.csv" 
      className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block"
    >
      Download CSV
    </CSVLink>
  );
};
