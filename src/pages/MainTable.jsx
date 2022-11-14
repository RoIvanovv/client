import React, {useEffect, useState} from 'react';
import Table from "../components/Table";
import Pager from "../components/Pager";
import Loader from "../components/Loader";
import Filters from "../components/Filters";
import {getSettings} from "../actions/getDBactions";
const {getDataFromDB} = require('../actions/getDBactions')

const MainTable = (props) => {

  const [activePage, setActivePage] = useState(1)
  const [countPage, setCountPage] = useState(1)
  const [dataT, setDataT] = useState([])
  const [Load, setLoad] = useState(false)
  const [filters, setFilters] = useState({
    site:"ALL",
    name: "",
    area: "ALL",
    val:"ALL",
    salary: {
      from: {
        min: "",
        max: ""
      },
      to: {
        min: "",
        max: ""
      }
    },
    archived: "ALL",
    shedule: "ALL",
    created_at: {
      from: "",
      to: ""
    },
    sorted: {
      title: "area",
      type: "ASC"
    }
  }
)
  const [settings, setSettings] = useState({
    listArea: [],
    listShedule: []
  })
  const [useFilters, setUseFilters] = useState(true)

  useEffect(() => {
    setLoad(true)
    getDataFromDB(activePage, filters)
     .then((res) => {
       setDataT(res.data.data)
       props.setState({
         count: res.data.statistic.count[0][0],
         static1: res.data.statistic.static1,
         static2: res.data.statistic.static2,
         statics: res.data.statistic.statics[0],
       })
       console.log(res.data.statistic.statics[0])
       setCountPage(res.data.options.countPage)
       setLoad(false)
    })

  }, [activePage, useFilters])

  // useEffect(()=>{
  //   console.log(filters)
  //   console.log(settings)
  // }, [filters])

  useEffect(()=>{
    getSettings()
      .then((res) => {
        setSettings({
          listArea : res.data.settings.listArea,
          listShedule : res.data.settings.listShedule
        })
      })
  }, [countPage])

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} settings={settings} useFilters={useFilters} setUseFilters={setUseFilters}/>
      { Load ? <Loader/> : <Table dataT={dataT} activePage={activePage}/> }
      <Pager countPage={countPage} setActivePage={setActivePage}/>
    </div>
  );
};

export default MainTable;
