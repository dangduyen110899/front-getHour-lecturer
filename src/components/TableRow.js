import React from 'react';

const TableRow = ({ data, dataIndex }) => {
  return (
    <>
      {dataIndex.map((title, index) => {
        return <td key={index}>{data?.[title]}</td>;
      })}
    </>
  );
};

export default TableRow;
