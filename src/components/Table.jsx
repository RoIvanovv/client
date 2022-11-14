import React from 'react';
import '../components/Components.scss'

const Table = ({dataT, activePage}) => {
  return (
    <table className='highlight mtable'>
      <thead>
      <tr className='rowe'>
        <th className='mr m1'>#</th>
        <th className='mr m01'>site</th>
        <th className='mr m2'>name</th>
        <th className='mr m3'>area</th>
        <th className='mr m4'>zp_from</th>
        <th className='mr m5'>zp_to</th>
        <th className='mr m01'>val</th>
        <th className='mr m6'>created_at</th>
        <th className='mr m7'>archived</th>
        <th className='mr m8'>shedule</th>
        <th className='mr m9'>URL</th>
      </tr>
      </thead>

      <tbody>
      {dataT.map((item,index) => {
        return(
          <tr key={(index+1)+20*(activePage-1)} className='rowe'>
            <td className='mr m1'>{(index+1)+20*(activePage-1)}</td> 
            <td className='mr m01'>{item[0]}</td>
            <td className='mr m2'>{item[1]}</td>
            <td className='mr m3'>{item[2]}</td>
            <td className='mr m4'>{item[3]}</td>
            <td className='mr m5'>{item[4]}</td>
            <td className='mr m01'>{item[5]}</td>
            <td className='mr m6'>{String(item[6])}</td>
            <td className='mr m7'>{String(item[7])}</td>
            <td className='mr m8'>{item[8]}</td>
            <td className='mr m9'>
              <a className='' href={String(item[9])}>
                <i className="material-icons">launch</i>
              </a>
            </td>
          </tr>
        )
      })}

      </tbody>
    </table>
  );
};

export default Table;
