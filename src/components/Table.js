import React from 'react';
import TableRow from './TableRow';

const Table = ({ columns, datas }) => {
  const dataIndex = [];
  return (
    <table className="list-company__table table table-bordered table-striped">

      <thead>
        <tr className="tr_head">
          {columns.map((item) => {
            dataIndex.push(item.id);
            return (
              <th scope="col" key={item.id}>
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {datas &&
          datas.map((data, index) => {
            return (
              <tr key={index} className={`tr_reset tr_color-${data?.s_status && data?.s_status.replace(/\s/g,'')}`}>
                <TableRow data={data} dataIndex={dataIndex} />
              </tr>
            );
          })}
      </tbody>

    </table>
  );
};

export default Table;
