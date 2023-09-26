// import nsslogo from "./assets/nss_logo.png"
import { Button, Input } from "@material-tailwind/react";
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
  const [studentData,setStudentData] = useState([]);

  const getStudent = async (search) => {

    base("Students")
      .select({
        view: "Data",
        filterByFormula: `({CHEST_NO} = '${search}')`,
      })
      .eachPage(
        (record, fetchNextPage) => {
          setStudentData(record[0].fields);
          console.log(record[0].fields)
          // setHeading(search);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  return (
    <div className="flex flex-col items-center px-4">
      {/* <img src={nsslogo} alt="nss_logo" /> */}
      <div className="py-4">
      <h4 className="text-2xl font-bold">NSS Admission</h4>
      <h5 className="text-1xl font-semibold">Score System</h5>
      </div>
      <div className="w-full flex flex-col gap-2">
      <Input type="text" label="Chest No*" onChange={(e) => {setSearchText(e.target.value)}} />
      <Button className="w-full bg-blue-900" onClick={()=>{getStudent(searchText)}} >Search</Button>
      </div>
      <DataCard data={studentData}/>
      <ScoreCard/>
    </div>
  )
}

export default App
