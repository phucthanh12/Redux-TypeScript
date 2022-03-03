import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PaginationSelector } from '../Redux/selector';

interface IPropsTable {
  datas: any[];

  tittleHeaders: { keycolum: string; display: string }[];
  keySpecial?: string[];

  IsDetail?: boolean;
  pathDetail?: string;
  IsUpdate?: boolean;
  pathUpdate?: string;
}
const Table = (props: IPropsTable) => {
  const Paginate = useSelector(PaginationSelector);
  const {
    datas, // mãng chứa các object:[{}]
    IsDetail, // mãng có cột chi tiết hay không : true or false
    pathDetail, //nếu có chi tiết thì đường dẫn để xem chi tiết: string
    IsUpdate, // mãng có cột update hay không : true or false
    pathUpdate, //nếu có update thì đường dẫn để xem update: string
    tittleHeaders, // mãng chứa các tiêu đề : string[]
  } = props;
  const handleClickWatchAdd = (key: number) => {
    let element = document.getElementsByClassName('colum-service-nowatch')[key];
    element.classList.toggle('colum-service');
  };
  const indexOfLastRow = Paginate.currentPerPage * Paginate.numRowInPage;
  const indexOfFirstRow = indexOfLastRow - Paginate.numRowInPage;
  const dataslice = datas.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="table ">
      <table>
        <thead>
          <tr>
            {tittleHeaders.map((tittle, index) => (
              <th key={index}>{tittle.display}</th>
            ))}
            {IsDetail && <th></th>}
            {IsUpdate && <th></th>}
          </tr>
        </thead>
        <tbody>
          {dataslice.map((data, key) => (
            <tr key={`row ${key}`}>
              {tittleHeaders.map((item, index) => (
                <th
                  key={index}
                  className={
                    item.keycolum === 'service'
                      ? 'colum-service colum-service-nowatch'
                      : ''
                  }
                >
                  {item.keycolum === 'active' &&
                    (data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Hoạt động'}</span>
                    ) : (
                      <span className="danger">{'Ngưng hoạt động'}</span>
                    ))}
                  {item.keycolum === 'connect' &&
                    (data[item.keycolum as keyof typeof datas] === true ? (
                      <span className="active">{'Kết nối'}</span>
                    ) : (
                      <span className="danger">{'Mất kết nối'}</span>
                    ))}
                  {/* service */}
                  {item.keycolum === 'status' &&
                    (['Vắng', 'Đã sử dụng'].includes(
                      data[item.keycolum as keyof typeof datas]
                    ) ? (
                      <span className="dis">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : ['Đã hoàn thành'].includes(
                        data[item.keycolum as keyof typeof datas]
                      ) ? (
                      <span className="active">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : ['Đang chờ', 'Đang thực hiện'].includes(
                        data[item.keycolum as keyof typeof datas]
                      ) ? (
                      <span className="doing">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ) : (
                      <span className="danger">
                        {data[item.keycolum as keyof typeof datas]}
                      </span>
                    ))}
                  {item.keycolum !== 'status' &&
                    data[item.keycolum as keyof typeof datas]}
                  {item.keycolum === 'service' && (
                    <>
                      <p
                        className="table-Link table-Link_watch"
                        onClick={() => handleClickWatchAdd(key)}
                      >
                        xem thêm
                      </p>
                    </>
                  )}
                </th>
              ))}
              {IsDetail && (
                <th>
                  <Link to={`/${pathDetail}/${data['id']}`}>
                    <span className="table-Link">Chi tiết</span>
                  </Link>
                </th>
              )}
              {IsUpdate && (
                <th>
                  <Link to={`/${pathUpdate}/${data['id']}`}>
                    <span className="table-Link">Cập nhật</span>
                  </Link>
                </th>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;