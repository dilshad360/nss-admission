// import nsslogo from "./assets/nss_logo.png"
import { Button, Input , Spinner } from "@material-tailwind/react";
import Airtable  from "airtable";
import backendUrl from "./const/backendUrl";
import { useState } from "react";
import DataCard from "./components/DataCard";
import ScoreCard from "./components/ScoreCard";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);


function App() {



  const [searchText,setSearchText] = useState("");
  const [studentID,setStudentID] = useState("");
  const [studentData,setStudentData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [alert,setAlert] = useState(false);

  const getStudent = async (search) => {
    if(searchText === "") return
    clearStudentData()
    setAlert(false)
    setLoading(true)
    base("Students")
      .select({
        view: "Data",
        filterByFormula: `({CHEST_NO} = '${search}')`,
      })
      .eachPage(
        (record, fetchNextPage) => {
          if(record.length === 0 ) { 
            setAlert(true)
            setLoading(false)
            return
          }
          setStudentData(record[0].fields);
          setStudentID(record[0].id);
          fetchNextPage();
          setLoading(false)
        },
        function done(err) {
          if (err) {
            console.error(err);
            setLoading(false)
            return;
          }
        }
      );
      
  };

  const clearStudentData = () =>{
    setStudentData([])
  }

  return (
    <div className="flex flex-col items-center px-4">
      {/* <img src={nsslogo} alt="nss_logo" /> */}
      <div className="py-4">
      <h4 className="text-2xl font-bold">NSS Admission</h4>
      <h5 className="text-1xl font-semibold">Score System</h5>
      </div>
      <div className="w-full flex flex-col gap-2">
      <Input type="text" label="Chest No" onChange={(e) => {setSearchText(e.target.value)}} />
      <Button className="w-full bg-blue-900" onClick={()=>{getStudent(searchText)}} >Search</Button>
      </div>
      {loading && (<Spinner className="mt-4"/>)}

        {alert && (<p className="text-sm font-semibold my-1">No Data Found</p>)}

      {studentData.Name &&(<>
      <DataCard data={studentData}/>
      <ScoreCard base={base} stuid={studentID} data={studentData} clear={clearStudentData} />
      </>
      )
  }
    </div>
  )
}

export default App
